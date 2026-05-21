import { AGE_LABELS, AGE_GROUPS } from './constants'
import { useGameState } from './hooks/useGameState'
import TitleScreen from './components/TitleScreen'
import SettingsScreen from './components/SettingsScreen'
import StatBar from './components/StatBar'
import DiaryPanel from './components/DiaryPanel'
import EventPanel from './components/EventPanel'
import GameOverScreen from './components/GameOverScreen'
import styles from './App.module.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [allEvents, setAllEvents] = useState([])

  useEffect(() => {
    fetch('./life_events_clean.json')
      .then(r => r.json())
      .then(data => setAllEvents(data))
  }, [])

  const {
    phase, setPhase,
    ageIndex,
    stats,
    history,
    currentEvent,
    settings, setSettings,
    startGame,
    makeChoice,
  } = useGameState(allEvents)

  function handleLoadFile(events) {
    setAllEvents(events)
    startGame()
  }

  function handleSettings() {
    setPhase('settings')
  }

  function handleSaveSettings(newSettings) {
    setSettings(newSettings)
    setPhase('title')
  }

  function handleRestart() {
    setPhase('title')
  }

  const age = AGE_GROUPS[ageIndex]

  return (
    <div className={styles.shell}>
      <div className={styles.wrap}>

        {/* ── TITLE ── */}
        {phase === 'title' && (
          <TitleScreen
            onStart={() => startGame()}
            onLoadFile={handleLoadFile}
            onSettings={handleSettings}
          />
        )}

        {/* ── SETTINGS ── */}
        {phase === 'settings' && (
          <SettingsScreen
            settings={settings}
            onSave={handleSaveSettings}
            onBack={() => setPhase('title')}
          />
        )}

        {/* ── PLAYING ── */}
        {phase === 'playing' && (
          <>
            <div className={styles.header}>
              <span className={styles.gameTitle}>A life, unfolding</span>
              <span className={styles.ageBadge}>
                {AGE_LABELS[age] || age}
              </span>
            </div>
            <StatBar stats={stats} />
            <div className={styles.body}>
              <DiaryPanel history={history} />
              <EventPanel event={currentEvent} onChoice={makeChoice} />
            </div>
          </>
        )}

        {/* ── GAME OVER ── */}
        {phase === 'gameover' && (
          <>
            <div className={styles.header}>
              <span className={styles.gameTitle}>A life, unfolding</span>
              <span className={styles.ageBadge}>The end</span>
            </div>
            <GameOverScreen
              stats={stats}
              history={history}
              onRestart={handleRestart}
            />
          </>
        )}

      </div>
    </div>
  )
}
