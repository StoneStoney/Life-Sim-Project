import React from 'react'
import { STAT_COLORS } from '../constants'
import styles from './StatBar.module.css'

export default function StatBar({ stats }) {
  return (
    <div className={styles.bar}>
      {Object.entries(stats).map(([name, value]) => (
        <div key={name} className={styles.item}>
          <div className={styles.label}>
            <span>{name}</span>
            <span className={styles.val}>{Math.round(value)}</span>
          </div>
          <div className={styles.track}>
            <div
              className={styles.fill}
              style={{
                width: `${Math.round(value)}%`,
                background: STAT_COLORS[name],
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
