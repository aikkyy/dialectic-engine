// opinions.ts — structured dataset for the sentence builder

export interface OpinionRow {
  subject: string
  modalVerb: string // "should" | "should not" | "should be" | "should not be"
  verb: string // "be" | "teach" | "define" | etc.
  complement: string // the final phrase
}

export const OPINIONS: OpinionRow[] = [
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'defined strictly by biology',
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'self-defined',
  },
  {
    subject: 'gender',
    modalVerb: 'should not',
    verb: 'exist',
    complement: 'exist as a concept',
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'abolished',
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'fluid and ever-changing',
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'limited to two options',
  },
  {
    subject: 'gender',
    modalVerb: 'should not',
    verb: 'be',
    complement: 'questioned publicly',
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'challenged',
  },
  {
    subject: 'children',
    modalVerb: 'should not',
    verb: 'be',
    complement: 'exposed to gender theory',
  },
  {
    subject: 'children',
    modalVerb: 'should',
    verb: 'be',
    complement: 'free to explore gender identity',
  },
  {
    subject: 'schools',
    modalVerb: 'should not',
    verb: 'teach',
    complement: 'gender diversity',
  },
  {
    subject: 'schools',
    modalVerb: 'should',
    verb: 'promote',
    complement: 'gender inclusion',
  },
  {
    subject: 'governments',
    modalVerb: 'should',
    verb: 'recognise',
    complement: 'biological sex only',
  },
  {
    subject: 'governments',
    modalVerb: 'should',
    verb: 'recognise',
    complement: 'all gender identities',
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'removed from legal documents',
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'mandatory on official records',
  },
  {
    subject: 'gender transition',
    modalVerb: 'should be',
    verb: 'restricted',
    complement: 'to adults only',
  },
  {
    subject: 'gender transition',
    modalVerb: 'should be',
    verb: 'accessible',
    complement: 'to anyone who needs it',
  },
  {
    subject: 'gender affirming care',
    modalVerb: 'should not',
    verb: 'be',
    complement: 'publicly funded',
  },
  {
    subject: 'gender affirming care',
    modalVerb: 'should',
    verb: 'be',
    complement: 'publicly funded',
  },
  {
    subject: 'gender roles',
    modalVerb: 'should be',
    verb: 'preserved',
    complement: 'in society',
  },
  {
    subject: 'gender roles',
    modalVerb: 'should be',
    verb: 'destroyed',
    complement: 'completely',
  },
  {
    subject: 'media',
    modalVerb: 'should not',
    verb: 'represent',
    complement: 'nontraditional genders',
  },
  {
    subject: 'media',
    modalVerb: 'should',
    verb: 'normalise',
    complement: 'all gender identities',
  },
  {
    subject: 'language',
    modalVerb: 'should not',
    verb: 'adapt',
    complement: 'to gender identity',
  },
  {
    subject: 'language',
    modalVerb: 'should',
    verb: 'evolve',
    complement: 'to reflect gender diversity',
  },
  {
    subject: 'pronouns',
    modalVerb: 'should',
    verb: 'be',
    complement: 'biologically determined',
  },
  {
    subject: 'pronouns',
    modalVerb: 'should',
    verb: 'be',
    complement: 'chosen freely by individuals',
  },
  {
    subject: 'misgendering',
    modalVerb: 'should not',
    verb: 'be',
    complement: 'penalised',
  },
  {
    subject: 'misgendering',
    modalVerb: 'should',
    verb: 'be',
    complement: 'legally punishable',
  },
  {
    subject: 'gender debates',
    modalVerb: 'should',
    verb: 'be',
    complement: 'restricted online',
  },
  {
    subject: 'gender debates',
    modalVerb: 'should',
    verb: 'be',
    complement: 'completely uncensored',
  },
  {
    subject: 'science',
    modalVerb: 'should',
    verb: 'define',
    complement: 'gender',
  },
  {
    subject: 'identity',
    modalVerb: 'should',
    verb: 'override',
    complement: 'science',
  },
  {
    subject: 'sports',
    modalVerb: 'should',
    verb: 'be',
    complement: 'separated by biological sex',
  },
  {
    subject: 'sports',
    modalVerb: 'should',
    verb: 'be',
    complement: 'integrated regardless of gender',
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'irrelevant in sports',
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'determine',
    complement: 'competition categories',
  },
]

// derive unique option lists for each slot
export const SUBJECTS = [...new Set(OPINIONS.map((o) => o.subject))]
export const MODAL_VERBS = [...new Set(OPINIONS.map((o) => o.modalVerb))]

/** Given a subject + modal verb, what verbs are valid? */
export function getVerbs(subject: string, modal: string): string[] {
  return [
    ...new Set(
      OPINIONS.filter(
        (o) => o.subject === subject && o.modalVerb === modal,
      ).map((o) => o.verb),
    ),
  ]
}

/** Given subject + modal + verb, what complements are valid? */
export function getComplements(
  subject: string,
  modal: string,
  verb: string,
): string[] {
  return OPINIONS.filter(
    (o) => o.subject === subject && o.modalVerb === modal && o.verb === verb,
  ).map((o) => o.complement)
}

/** Try to find the best matching row for a clicked word from the ticker */
export function findRowByWord(word: string): Partial<OpinionRow> | null {
  const lower = word.toLowerCase()
  const match = OPINIONS.find(
    (o) =>
      o.subject === lower || o.complement.includes(lower) || o.verb === lower,
  )
  if (!match) return null
  return match
}
