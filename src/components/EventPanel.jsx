import React from 'react'
import styles from './EventPanel.module.css'

export default function EventPanel({ event, onChoice }) {
  if (!event) return null

  return (
    <div className={styles.col}>
      <div className={styles.header}>
        <span>What happens next</span>
        {event.special && (
          <span className={styles.specialBadge}>★ critical moment</span>
        )}
      </div>
      <div className={styles.body}>
        {event.theme && (
          <div className={styles.theme}>
            {event.theme.replace(/_/g, ' ')}
          </div>
        )}
        <p className={`${styles.description} ${event.special ? styles.specialDesc : ''}`}>
          {event.description}
        </p>
        <div className={styles.choices}>
          {(event.choices || []).map((choice, i) => (
            <button
              key={i}
              className={styles.choice}
              onClick={() => onChoice(i)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}