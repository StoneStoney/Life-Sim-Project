.col {
  border - right: 0.5px solid var(--warm - border);
  display: flex;
  flex - direction: column;
  background: var(--paper);
  min - height: 0;
  height: 100 %;
}

.header {
  padding: 14px 18px 10px;
  border - bottom: 0.5px solid var(--warm - border);
  font - size: 11px;
  color: var(--warm - muted);
  text - transform: uppercase;
  letter - spacing: 0.07em;
  display: flex;
  align - items: center;
  gap: 6px;
  flex - shrink: 0;
}

.scroll {
  flex: 1;
  overflow - y: auto;
  overflow - x: hidden;
  padding: 14px 18px;
  display: flex;
  flex - direction: column;
  gap: 14px;
  min - height: 0;
}

/* nicer scrollbar */
.scroll:: -webkit - scrollbar {
  width: 6px;
}

.scroll:: -webkit - scrollbar - thumb {
  background: rgba(0, 0, 0, 0.12);
  border - radius: 20px;
}

.empty {
  font - size: 12px;
  color: var(--warm - muted);
  font - style: italic;
  padding: 8px 0;
}

.entry {
  font - size: 13px;
  line - height: 1.65;
  color: var(--ink);
  padding - bottom: 12px;
  border - bottom: 0.5px solid var(--warm - border);
  animation: fadeUp 0.35s ease forwards;
}

.entry: last - child {
  border - bottom: none;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.meta {
  font - size: 11px;
  color: var(--warm - accent - light);
  margin - bottom: 4px;
  font - style: italic;
}

.desc {
  color: var(--ink);
}

.choice {
  font - size: 12px;
  color: var(--warm - muted);
  margin - top: 5px;
  padding - left: 10px;
  border - left: 2px solid var(--warm - border - strong);
  font - style: italic;
}

.deltas {
  display: flex;
  flex - wrap: wrap;
  gap: 5px;
  margin - top: 6px;
}

.pill {
  font - size: 10px;
  padding: 2px 7px;
  border - radius: 10px;
  font - weight: 500;
}

.pos {
  background: rgba(110, 158, 110, 0.15);
  color: #3E7A3E;
}

.neg {
  background: rgba(176, 112, 112, 0.15);
  color: #8B3A3A;
}