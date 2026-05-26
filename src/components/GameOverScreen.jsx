import React from 'react'
import styles from './GameOverScreen.module.css'
import StatBar from './StatBar'

export default function GameOverScreen({ stats, history, onRestart }) {
  return (
    <>
      <StatBar stats={stats} />
      <div className={styles.screen}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>the end</div>
          <h2 className={styles.title}>And so it went.</h2>
          <p className={styles.summary}>
            You made {history.length} choice{history.length !== 1 ? 's' : ''}.<br />
            Health&nbsp;{Math.round(stats.health)}&nbsp;·&nbsp;
            Happiness&nbsp;{Math.round(stats.happiness)}&nbsp;·&nbsp;
            Money&nbsp;{Math.round(stats.money)}&nbsp;·&nbsp;
            Stress&nbsp;{Math.round(stats.stress)}
          </p>
          <p className={styles.coda}>
            That was that.
          </p>
          <button className={styles.restart} onClick={onRestart}>
            Live again
          </button>
        </div>
      </div>
    </>
  )
}
