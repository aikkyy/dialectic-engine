export type SelectionArchiveRecord = {
  key: string
  category: string
  keyword: string
  opinion: string
  antithesis: string
  count: number
  firstSelectedAt: string
  lastSelectedAt: string
}

const STORAGE_KEY = 'dialectic-engine-selection-archives'

function normalize(value: string): string {
  return value.trim().replace(/\s+/g, ' ').toLowerCase()
}

function makeKey(params: {
  category: string
  keyword: string
  opinion: string
  antithesis: string
}): string {
  return [params.category, params.keyword, params.opinion, params.antithesis]
    .map(normalize)
    .join('::')
}

export function loadSelectionArchives(): SelectionArchiveRecord[] {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as SelectionArchiveRecord[]) : []
  } catch {
    return []
  }
}

export function saveSelectionArchive(params: {
  category: string
  keyword: string
  opinion: string
  antithesis: string
}): SelectionArchiveRecord[] {
  if (typeof window === 'undefined') return []

  const archives = loadSelectionArchives()
  const now = new Date().toISOString()
  const key = makeKey(params)
  const existing = archives.find((record) => record.key === key)

  if (existing) {
    existing.count += 1
    existing.lastSelectedAt = now
  } else {
    archives.push({
      key,
      category: params.category.trim(),
      keyword: params.keyword.trim(),
      opinion: params.opinion.trim(),
      antithesis: params.antithesis.trim(),
      count: 1,
      firstSelectedAt: now,
      lastSelectedAt: now,
    })
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(archives))
  return archives
}

export function clearSelectionArchives(): void {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(STORAGE_KEY)
}
