import { useState, useCallback, useRef } from 'react'
import { AGE_GROUPS, DEFAULT_SETTINGS } from '../constants'

const NAMES = [
  'Alex', 'Jordan', 'Sam', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Jamie',
  'Quinn', 'Avery', 'Blake', 'Drew', 'Cameron', 'Skyler', 'Reese', 'Finley',
  'Dana', 'Robin', 'Emery', 'Logan', 'Peyton', 'Shawn', 'Hayden', 'Charlie',
]

function injectNames(event) {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)]
  const r = (str) => str ? str.replace(/\[NAME\]/g, name) : str
  return {
    ...event,
    description: r(event.description),
    choices: (event.choices || []).map(c => ({ ...c, text: r(c.text) })),
  }
}

function clamp(v) {
  return Math.max(0, Math.min(100, v))
}

function getStatTrigger(stats) {
  const checks = []
  for (const [stat, val] of Object.entries(stats)) {
    if (val <= 25) checks.push({ stat, direction: 'low' })
    if (val >= 85) checks.push({ stat, direction: 'high' })
  }
  return checks.length ? checks[Math.floor(Math.random() * checks.length)] : null
}

function weightedPick(pool) {
  const weights = pool.map(e => 6 - (e.rarity || 3))
  const total = weights.reduce((a, b) => a + b, 0)
  let rand = Math.random() * total
  for (let i = 0; i < pool.length; i++) {
    rand -= weights[i]
    if (rand <= 0) return { event: pool[i], idx: i }
  }
  return { event: pool[pool.length - 1], idx: pool.length - 1 }
}

function pickEvent(pool, usedSet) {
  const available = pool.filter((_, i) => !usedSet.has(i))
  const source = available.length ? available : pool
  const { event } = weightedPick(source)
  const idx = pool.indexOf(event)
  return { event, idx }
}

export function useGameState(allEvents) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS)
  const [phase, setPhase] = useState('title')
  const [ageIndex, setAgeIndex] = useState(0)
  const [stats, setStats] = useState({ ...DEFAULT_SETTINGS.startingStats })
  const [history, setHistory] = useState([])
  const [eventsPlayed, setEventsPlayed] = useState(0)
  const [currentEvent, setCurrentEvent] = useState(null)

  const usedPerAge = useRef({})
  const specialCooldown = useRef(0)
  const latestStats = useRef({ ...DEFAULT_SETTINGS.startingStats })

  const getPool = useCallback((age) => {
    const pool = allEvents.filter(e => !e.special && e.age_group === age)
    return pool.length ? pool : allEvents.filter(e => !e.special).slice(0, 5)
  }, [allEvents])

  const drawNext = useCallback((ageIdx, currentStats) => {
    const age = AGE_GROUPS[ageIdx]
    if (!usedPerAge.current[age]) usedPerAge.current[age] = new Set()

    if (specialCooldown.current <= 0 && currentStats) {
      const trigger = getStatTrigger(currentStats)
      if (trigger) {
        let pool = allEvents.filter(e =>
          e.special &&
          e.trigger_stat === trigger.stat &&
          e.trigger_direction === trigger.direction &&
          e.age_group === age
        )
        if (!pool.length) pool = allEvents.filter(e =>
          e.special &&
          e.trigger_stat === trigger.stat &&
          e.trigger_direction === trigger.direction
        )
        if (pool.length) {
          specialCooldown.current = 3
          return injectNames(pool[Math.floor(Math.random() * pool.length)])
        }
      }
    } else if (specialCooldown.current > 0) {
      specialCooldown.current--
    }

    const pool = getPool(age)
    const { event, idx } = pickEvent(pool, usedPerAge.current[age])
    usedPerAge.current[age].add(idx)
    return injectNames(event)
  }, [getPool, allEvents])

  const startGame = useCallback((overrideSettings) => {
    const s = overrideSettings || settings
    usedPerAge.current = {}
    specialCooldown.current = 0
    const initialStats = { ...s.startingStats }
    latestStats.current = initialStats
    setAgeIndex(0)
    setStats(initialStats)
    setHistory([])
    setEventsPlayed(0)
    setCurrentEvent(drawNext(0, initialStats))
    setPhase('playing')
  }, [settings, drawNext])

  const makeChoice = useCallback((choiceIndex) => {
    if (!currentEvent) return
    const choice = currentEvent.choices[choiceIndex]
    const deltas = {}

    const newStats = { ...latestStats.current }
      ;['health', 'happiness', 'money', 'stress'].forEach(s => {
        if (choice[s] !== undefined) {
          deltas[s] = choice[s]
          newStats[s] = clamp(newStats[s] + choice[s])
        }
      })
    latestStats.current = newStats
    setStats(newStats)

    setHistory(prev => [...prev, {
      event: currentEvent,
      choice,
      deltas: { ...deltas },
      age: AGE_GROUPS[ageIndex],
      special: !!currentEvent.special,
    }])

    setEventsPlayed(prev => {
      const next = prev + 1
      const threshold = settings.eventsPerAge
      if (next % threshold === 0) {
        if (ageIndex < AGE_GROUPS.length - 1) {
          const nextAge = ageIndex + 1
          setAgeIndex(nextAge)
          setCurrentEvent(drawNext(nextAge, newStats))
        } else {
          setPhase('gameover')
        }
      } else {
        setCurrentEvent(drawNext(ageIndex, newStats))
      }
      return next
    })
  }, [currentEvent, ageIndex, settings.eventsPerAge, drawNext])

  return {
    phase, setPhase,
    ageIndex,
    stats,
    history,
    eventsPlayed,
    currentEvent,
    settings, setSettings,
    startGame,
    makeChoice,
  }
}