import React, { useState } from 'react'
import { AGE_GROUPS, AGE_LABELS } from '../constants'
import styles from './SettingsScreen.module.css'

export default function SettingsScreen({ settings, onSave, onBack }) {
  const [eventsPerAge, setEventsPerAge] = useState(settings.eventsPerAge)
  const [startingStats, setStartingStats] = useState({ ...settings.startingStats })

  function handleStat(stat, val) {
    setStartingStats(prev => ({ ...prev, [stat]: Math.max(0, Math.min(100, Number(val))) }))
  }

  function handleSave() {
    onSave({ eventsPerAge, startingStats })
  }

  return (
    <div className={styles.screen}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <button className={styles.back} onClick={onBack}>
            <i className="ti ti-arrow-left" aria-hidden="true" /> Back
          </button>
          <h2 className={styles.heading}>Settings</h2>
        </div>

        <section className={styles.section}>
          <label className={styles.label}>
            Events per life stage
            <span className={styles.labelVal}>{eventsPerAge}</span>
          </label>
          <input
            type="range"
            min={3}
            max={12}
            step={1}
            value={eventsPerAge}
            onChange={e => setEventsPerAge(Number(e.target.value))}
            className={styles.slider}
          />
          <div className={styles.sliderHints}>
            <span>3 — short</span>
            <span>{Math.round((3+12)/2)} — medium</span>
            <span>12 — long</span>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.label}>Starting stats</div>
          <div className={styles.statsGrid}>
            {Object.entries(startingStats).map(([stat, val]) => (
              <div key={stat} className={styles.statRow}>
                <span className={styles.statName}>{stat}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={val}
                  onChange={e => handleStat(stat, e.target.value)}
                  className={styles.slider}
                />
                <span className={styles.statVal}>{val}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.label}>Life stages</div>
          <div className={styles.stages}>
            {AGE_GROUPS.map(g => (
              <span key={g} className={styles.stage}>{AGE_LABELS[g]}</span>
            ))}
          </div>
        </section>

        <button className={styles.save} onClick={handleSave}>
          Save &amp; continue
        </button>
      </div>
    </div>
  )
}
