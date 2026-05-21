import { useState, useCallback, useRef } from 'react'
import { AGE_GROUPS, DEFAULT_SETTINGS } from '../constants'

function clamp(v) {
  return Math.max(0, Math.min(100, v))
}

function pickEvent(pool, usedSet) {
  const available = pool.filter((_, i) => !usedSet.has(i))
  const source = available.length ? available : pool
  const event = source[Math.floor(Math.random() * source.length)]
  const idx = pool.indexOf(event)
  return { event, idx }
}

export function useGameState(allEvents) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS)
  const [phase, setPhase] = useState('title') // title | settings | playing | gameover
  const [ageIndex, setAgeIndex] = useState(0)
  const [stats, setStats] = useState({ ...DEFAULT_SETTINGS.startingStats })
  const [history, setHistory] = useState([])
  const [eventsPlayed, setEventsPlayed] = useState(0)
  const [currentEvent, setCurrentEvent] = useState(null)
  const usedPerAge = useRef({})

  const getPool = useCallback((age) => {
    const pool = allEvents.filter(e => e.age_group === age)
    return pool.length ? pool : allEvents.slice(0, 5)
  }, [allEvents])

  const drawNext = useCallback((ageIdx) => {
    const age = AGE_GROUPS[ageIdx]
    if (!usedPerAge.current[age]) usedPerAge.current[age] = new Set()
    const pool = getPool(age)
    const { event, idx } = pickEvent(pool, usedPerAge.current[age])
    usedPerAge.current[age].add(idx)
    return event
  }, [getPool])

  const startGame = useCallback((overrideSettings) => {
    const s = overrideSettings || settings
    usedPerAge.current = {}
    setAgeIndex(0)
    setStats({ ...s.startingStats })
    setHistory([])
    setEventsPlayed(0)
    setCurrentEvent(drawNext(0))
    setPhase('playing')
  }, [settings, drawNext])

  const makeChoice = useCallback((choiceIndex) => {
    if (!currentEvent) return
    const choice = currentEvent.choices[choiceIndex]
    const deltas = {}

    setStats(prev => {
      const next = { ...prev }
      ;['health', 'happiness', 'money', 'stress'].forEach(s => {
        if (choice[s] !== undefined) {
          deltas[s] = choice[s]
          next[s] = clamp(prev[s] + choice[s])
        }
      })
      return next
    })

    setHistory(prev => [...prev, {
      event: currentEvent,
      choice,
      deltas: { ...deltas },
      age: AGE_GROUPS[ageIndex],
    }])

    setEventsPlayed(prev => {
      const next = prev + 1
      const threshold = settings.eventsPerAge

      if (next % threshold === 0) {
        if (ageIndex < AGE_GROUPS.length - 1) {
          const nextAge = ageIndex + 1
          setAgeIndex(nextAge)
          setCurrentEvent(drawNext(nextAge))
        } else {
          setPhase('gameover')
        }
      } else {
        setCurrentEvent(drawNext(ageIndex))
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
