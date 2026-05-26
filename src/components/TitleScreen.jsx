import React, { useRef } from 'react'
import styles from './TitleScreen.module.css'

export default function TitleScreen({ onStart, onLoadFile, onSettings }) {
  const fileRef = useRef(null)

  function handleFile(e) {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result)

        if (Array.isArray(parsed) && parsed.length > 0) {
          onLoadFile(parsed)
        } else {
          alert("Couldn't read events. Make sure it's a valid JSON array.")
        }
      } catch {
        alert('Invalid JSON file.')
      }
    }

    reader.readAsText(file)
  }

  return (
    <div className={styles.screen}>
      <div className={styles.inner}>

        <div className={styles.eyebrow}>
          a life simulation
        </div>

        <h1 className={styles.title}>
          A Life
        </h1>

        <p className={styles.sub}>
          Have fun!
          <br />
          Just a series of small decisions and what comes after.
        </p>

        <div className={styles.actions}>

          {/* MAIN CTA */}
          <button
            className={styles.primary}
            onClick={onStart}
          >
            Begin
          </button>

          {/* SETTINGS */}
          <button
            className={styles.ghost}
            onClick={onSettings}
          >
            <i className="ti ti-settings" aria-hidden="true" />
            Settings
          </button>

        </div>

        {/* SUBTLE DEV TOOL AREA */}
        <div className={styles.devArea}>

          <button
            className={styles.hiddenUpload}
            onClick={() => fileRef.current?.click()}
          >
            load custom event file
          </button>

          <input
            type="file"
            accept=".json"
            ref={fileRef}
            style={{ display: 'none' }}
            onChange={handleFile}
          />

        </div>

      </div>
    </div>
  )
}