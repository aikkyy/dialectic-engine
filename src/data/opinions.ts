// opinions.ts — structured dataset for the sentence builder

export interface OpinionStatement {
  modalVerb: string
  verb: string
  complement: string
}

export interface OpinionRow extends OpinionStatement {
  subject: string
}

export interface OpinionPair {
  left: OpinionStatement
  right: OpinionStatement
}

export interface OpinionGroup {
  subject: string
  pairs: OpinionPair[]
}

// Grouped by subject so related statements live together.
// Each pair stores opposite perspectives in one place.
export const OPINION_GROUPS: OpinionGroup[] = [
  {
    subject: 'gender',
    pairs: [
      {
        left: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'defined strictly by biology',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'self-defined',
        },
      },
      {
        left: {
          modalVerb: 'should not',
          verb: 'exist',
          complement: 'exist as a concept',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'abolished',
        },
      },
      {
        left: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'fluid and ever-changing',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'limited to two options',
        },
      },
      {
        left: {
          modalVerb: 'should not',
          verb: 'be',
          complement: 'questioned publicly',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'challenged',
        },
      },
      {
        left: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'removed from legal documents',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'mandatory on official records',
        },
      },
      {
        left: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'irrelevant in sports',
        },
        right: {
          modalVerb: 'should',
          verb: 'determine',
          complement: 'competition categories',
        },
      },
    ],
  },
  {
    subject: 'children',
    pairs: [
      {
        left: {
          modalVerb: 'should not',
          verb: 'be',
          complement: 'exposed to gender theory',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'free to explore gender identity',
        },
      },
    ],
  },
  {
    subject: 'schools',
    pairs: [
      {
        left: {
          modalVerb: 'should not',
          verb: 'teach',
          complement: 'gender diversity',
        },
        right: {
          modalVerb: 'should',
          verb: 'promote',
          complement: 'gender inclusion',
        },
      },
    ],
  },
  {
    subject: 'governments',
    pairs: [
      {
        left: {
          modalVerb: 'should',
          verb: 'recognise',
          complement: 'biological sex only',
        },
        right: {
          modalVerb: 'should',
          verb: 'recognise',
          complement: 'all gender identities',
        },
      },
    ],
  },
  {
    subject: 'gender transition',
    pairs: [
      {
        left: {
          modalVerb: 'should be',
          verb: 'restricted',
          complement: 'to adults only',
        },
        right: {
          modalVerb: 'should be',
          verb: 'accessible',
          complement: 'to anyone who needs it',
        },
      },
    ],
  },
  {
    subject: 'gender affirming care',
    pairs: [
      {
        left: {
          modalVerb: 'should not',
          verb: 'be',
          complement: 'publicly funded',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'publicly funded',
        },
      },
    ],
  },
  {
    subject: 'gender roles',
    pairs: [
      {
        left: {
          modalVerb: 'should be',
          verb: 'preserved',
          complement: 'in society',
        },
        right: {
          modalVerb: 'should be',
          verb: 'destroyed',
          complement: 'completely',
        },
      },
    ],
  },
  {
    subject: 'media',
    pairs: [
      {
        left: {
          modalVerb: 'should not',
          verb: 'represent',
          complement: 'nontraditional genders',
        },
        right: {
          modalVerb: 'should',
          verb: 'normalise',
          complement: 'all gender identities',
        },
      },
    ],
  },
  {
    subject: 'language',
    pairs: [
      {
        left: {
          modalVerb: 'should not',
          verb: 'adapt',
          complement: 'to gender identity',
        },
        right: {
          modalVerb: 'should',
          verb: 'evolve',
          complement: 'to reflect gender diversity',
        },
      },
    ],
  },
  {
    subject: 'pronouns',
    pairs: [
      {
        left: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'biologically determined',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'chosen freely by individuals',
        },
      },
    ],
  },
  {
    subject: 'misgendering',
    pairs: [
      {
        left: {
          modalVerb: 'should not',
          verb: 'be',
          complement: 'penalised',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'legally punishable',
        },
      },
    ],
  },
  {
    subject: 'gender debates',
    pairs: [
      {
        left: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'restricted online',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'completely uncensored',
        },
      },
    ],
  },
  {
    subject: 'science',
    pairs: [
      {
        left: {
          modalVerb: 'should',
          verb: 'define',
          complement: 'gender',
        },
        right: {
          modalVerb: 'should',
          verb: 'override',
          complement: 'science',
        },
      },
    ],
  },
  {
    subject: 'identity',
    pairs: [
      {
        left: {
          modalVerb: 'should',
          verb: 'override',
          complement: 'science',
        },
        right: {
          modalVerb: 'should',
          verb: 'define',
          complement: 'gender',
        },
      },
    ],
  },
  {
    subject: 'sports',
    pairs: [
      {
        left: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'separated by biological sex',
        },
        right: {
          modalVerb: 'should',
          verb: 'be',
          complement: 'integrated regardless of gender',
        },
      },
    ],
  },
]

function createKey(row: OpinionRow): string {
  return [row.subject, row.modalVerb, row.verb, row.complement].join(' | ')
}

function toRow(subject: string, statement: OpinionStatement): OpinionRow {
  return { subject, ...statement }
}

export const OPINION_ROWS: OpinionRow[] = OPINION_GROUPS.flatMap((group) =>
  group.pairs.flatMap((pair) => [
    toRow(group.subject, pair.left),
    toRow(group.subject, pair.right),
  ]),
)

const flipByKey = new Map<string, OpinionRow>()
const tokenIndex = new Map<string, OpinionRow[]>()
const verbsBySubject = new Map<string, Set<string>>()
const verbsBySubjectModal = new Map<string, Set<string>>()
const complementsByTriple = new Map<string, Set<string>>()

for (const group of OPINION_GROUPS) {
  for (const pair of group.pairs) {
    const leftRow = toRow(group.subject, pair.left)
    const rightRow = toRow(group.subject, pair.right)

    const leftKey = createKey(leftRow)
    const rightKey = createKey(rightRow)

    flipByKey.set(leftKey, rightRow)
    flipByKey.set(rightKey, leftRow)

    for (const row of [leftRow, rightRow]) {
      for (const token of [row.subject, row.modalVerb, row.verb, row.complement]) {
        const existing = tokenIndex.get(token)
        if (existing) {
          if (!existing.some((item) => createKey(item) === createKey(row))) {
            existing.push(row)
          }
        } else {
          tokenIndex.set(token, [row])
        }
      }

      const verbSet = verbsBySubject.get(row.subject) ?? new Set<string>()
      verbSet.add(row.verb)
      verbsBySubject.set(row.subject, verbSet)

      const subjectModalKey = [row.subject, row.modalVerb].join(' | ')
      const subjectModalVerbSet =
        verbsBySubjectModal.get(subjectModalKey) ?? new Set<string>()
      subjectModalVerbSet.add(row.verb)
      verbsBySubjectModal.set(subjectModalKey, subjectModalVerbSet)

      const tripleKey = [row.subject, row.modalVerb, row.verb].join(' | ')
      const complementSet = complementsByTriple.get(tripleKey) ?? new Set<string>()
      complementSet.add(row.complement)
      complementsByTriple.set(tripleKey, complementSet)
    }
  }
}

export const SUBJECTS = [...new Set(OPINION_ROWS.map((row) => row.subject))]
export const MODAL_VERBS = [...new Set(OPINION_ROWS.map((row) => row.modalVerb))]
export const VERBS = [...new Set(OPINION_ROWS.map((row) => row.verb))]
export const COMPLEMENTS = [...new Set(OPINION_ROWS.map((row) => row.complement))]

/** Given a subject + modal verb, what verbs are valid? */
export function getVerbs(subject: string, modal: string): string[] {
  const key = [subject, modal].join(' | ')
  const verbs = verbsBySubjectModal.get(key)
  if (!verbs) return []

  return [...verbs]
}

/** Given subject + modal + verb, what complements are valid? */
export function getComplements(
  subject: string,
  modal: string,
  verb: string,
): string[] {
  const key = [subject, modal, verb].join(' | ')
  return [...(complementsByTriple.get(key) ?? new Set<string>())]
}

/** Try to find the best matching row for a clicked word from the ticker */
export function findRowByWord(word: string): Partial<OpinionRow> | null {
  const lower = word.toLowerCase().trim()
  const match =
    tokenIndex.get(lower)?.[0] ??
    OPINION_ROWS.find(
      (row) =>
        row.subject === lower ||
        row.complement.includes(lower) ||
        row.verb === lower ||
        row.modalVerb === lower,
    )

  return match ?? null
}

export function flipOpinion(opinion: OpinionRow): OpinionRow | null {
  return flipByKey.get(createKey(opinion)) ?? null
}

// Backward compatibility alias
export const OPINIONS = OPINION_ROWS