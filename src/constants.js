export const AGE_GROUPS = [
  'childhood',
  'teen',
  'young_adult',
  'adult',
  'middle_age',
  'elderly',
]

export const AGE_LABELS = {
  childhood:   'Childhood',
  teen:        'Teenage Years',
  young_adult: 'Young Adulthood',
  adult:       'Adulthood',
  middle_age:  'Middle Age',
  elderly:     'Later Years',
}

export const DEFAULT_STATS = {
  health:    60,
  happiness: 60,
  money:     50,
  stress:    30,
}

export const DEFAULT_SETTINGS = {
  eventsPerAge: 5,
  startingStats: { ...DEFAULT_STATS },
}

export const STAT_COLORS = {
  health:    '#8B6F45',
  happiness: '#B08A5E',
  money:     '#6E9E6E',
  stress:    '#B07070',
}
