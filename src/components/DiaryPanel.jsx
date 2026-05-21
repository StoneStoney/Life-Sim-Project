import React from 'react'
import { AGE_LABELS } from '../constants'
import styles from './DiaryPanel.module.css'

function DeltaPill({ stat, val }) {
  const sign = val > 0 ? '+' : ''
  const cls = val > 0 ? styles.pos : styles.neg
  const label = stat.charAt(0).toUpperCase() + stat.slice(1)
  return (
    <span className={`${styles.pill} ${cls}`}>
      {label} {sign}{val}
    </span>
  )
}

function DiaryEntry({ entry }) {
  return (
    <div className={`${styles.entry} ${entry.special ? styles.specialEntry : ''}`}>
      <div className={styles.meta}>
        {entry.special && <span className={styles.star}>★</span>}
        {AGE_LABELS[entry.age] || entry.age}
      </div>
      <div className={styles.desc}>
        {entry.event.description}
      </div>
      <div className={styles.choice}>
        "{entry.choice.text}"
      </div>
      {Object.keys(entry.deltas).length > 0 && (
        <div className={styles.deltas}>
          {Object.entries(entry.deltas).map(([k, v]) => (
            <DeltaPill key={k} stat={k} val={v} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function DiaryPanel({ history }) {
  const reversedHistory = [...history].reverse()
  return (
    <div className={styles.col}>
      <div className={styles.header}>
        <i className="ti ti-journal" aria-hidden="true" />
        Journal
      </div>
      <div className={styles.scroll}>
        {history.length === 0 ? (
          <p className={styles.empty}>Your choices will appear here…</p>
        ) : (
          reversedHistory.map((entry, i) => (
            <DiaryEntry key={i} entry={entry} />
          ))
        )}
      </div>
    </div>
  )
}