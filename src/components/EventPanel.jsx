import React from 'react'
import styles from './EventPanel.module.css'

export default function EventPanel({ event, onChoice }) {
  if (!event) return null

  return (
    <div className={styles.col}>
      <div className={styles.header}>What happens next</div>
      <div className={styles.body}>
        {event.theme && (
          <div className={styles.theme}>
            {event.theme.replace(/_/g, ' ')}
          </div>
        )}
        <p className={styles.description}>{event.description}</p>
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
