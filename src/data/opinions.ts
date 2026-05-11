// opinions.ts — structured dataset for the sentence builder

export interface OpinionRow {
  subject: string
  modalVerb: string
  verb: string
  complement: string
}

export interface OpinionFlip {
  subject: string
  modalVerb: string
  verb: string
  complement: string
}

export interface OpinionPair extends OpinionRow {
  flip: OpinionFlip
}

// Individual arrays for control over possibilities
export const SUBJECTS = [
  'gender',
  'children',
  'schools',
  'governments',
  'gender transition',
  'gender affirming care',
  'gender roles',
  'media',
  'language',
  'pronouns',
  'misgendering',
  'gender debates',
  'science',
  'identity',
  'sports',
]

export const MODAL_VERBS = [
  'should',
  'should not',
  'should be',
  'should not be',
]

export const VERBS = [
  'be',
  'exist',
  'teach',
  'promote',
  'recognise',
  'restricted',
  'accessible',
  'preserved',
  'destroyed',
  'represent',
  'normalise',
  'adapt',
  'evolve',
  'chosen',
  'penalised',
  'be',
  'legally punishable',
  'define',
  'override',
  'separated',
  'integrated',
  'irrelevant',
  'determine',
]

export const COMPLEMENTS = [
  'defined strictly by biology',
  'self-defined',
  'exist as a concept',
  'abolished',
  'fluid and ever-changing',
  'limited to two options',
  'questioned publicly',
  'challenged',
  'exposed to gender theory',
  'free to explore gender identity',
  'gender diversity',
  'gender inclusion',
  'biological sex only',
  'all gender identities',
  'removed from legal documents',
  'mandatory on official records',
  'to adults only',
  'to anyone who needs it',
  'publicly funded',
  'in society',
  'completely',
  'nontraditional genders',
  'all gender identities',
  'to gender identity',
  'to reflect gender diversity',
  'biologically determined',
  'chosen freely by individuals',
  'penalised',
  'legally punishable',
  'restricted online',
  'completely uncensored',
  'gender',
  'science',
  'separated by biological sex',
  'integrated regardless of gender',
  'irrelevant in sports',
  'competition categories',
]

// Valid combinations defining the relationship between all fields.
// Each row stores the opposing perspective so the selection can be flipped.
export const COMBINATIONS: OpinionPair[] = [
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'defined strictly by biology',
    flip: {
      subject: 'gender',
      modalVerb: 'should',
      verb: 'be',
      complement: 'self-defined',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'self-defined',
    flip: {
      subject: 'gender',
      modalVerb: 'should',
      verb: 'be',
      complement: 'defined strictly by biology',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should not',
    verb: 'exist',
    complement: 'exist as a concept',
    flip: {
      subject: 'gender',
      modalVerb: 'should',
      verb: 'be',
      complement: 'abolished',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'abolished',
    flip: {
      subject: 'gender',
      modalVerb: 'should not',
      verb: 'exist',
      complement: 'exist as a concept',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'fluid and ever-changing',
    flip: {
      subject: 'gender',
      modalVerb: 'should',
      verb: 'be',
      complement: 'limited to two options',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'limited to two options',
    flip: {
      subject: 'gender',
      modalVerb: 'should',
      verb: 'be',
      complement: 'fluid and ever-changing',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should not',
    verb: 'be',
    complement: 'questioned publicly',
    flip: {
      subject: 'gender',
      modalVerb: 'should',
      verb: 'be',
      complement: 'challenged',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'challenged',
    flip: {
      subject: 'gender',
      modalVerb: 'should not',
      verb: 'be',
      complement: 'questioned publicly',
    },
  },
  {
    subject: 'children',
    modalVerb: 'should not',
    verb: 'be',
    complement: 'exposed to gender theory',
    flip: {
      subject: 'children',
      modalVerb: 'should',
      verb: 'be',
      complement: 'free to explore gender identity',
    },
  },
  {
    subject: 'children',
    modalVerb: 'should',
    verb: 'be',
    complement: 'free to explore gender identity',
    flip: {
      subject: 'children',
      modalVerb: 'should not',
      verb: 'be',
      complement: 'exposed to gender theory',
    },
  },
  {
    subject: 'schools',
    modalVerb: 'should not',
    verb: 'teach',
    complement: 'gender diversity',
    flip: {
      subject: 'schools',
      modalVerb: 'should',
      verb: 'promote',
      complement: 'gender inclusion',
    },
  },
  {
    subject: 'schools',
    modalVerb: 'should',
    verb: 'promote',
    complement: 'gender inclusion',
    flip: {
      subject: 'schools',
      modalVerb: 'should not',
      verb: 'teach',
      complement: 'gender diversity',
    },
  },
  {
    subject: 'governments',
    modalVerb: 'should',
    verb: 'recognise',
    complement: 'biological sex only',
    flip: {
      subject: 'governments',
      modalVerb: 'should',
      verb: 'recognise',
      complement: 'all gender identities',
    },
  },
  {
    subject: 'governments',
    modalVerb: 'should',
    verb: 'recognise',
    complement: 'all gender identities',
    flip: {
      subject: 'governments',
      modalVerb: 'should',
      verb: 'recognise',
      complement: 'biological sex only',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'removed from legal documents',
    flip: {
      subject: 'gender',
      modalVerb: 'should',
      verb: 'be',
      complement: 'mandatory on official records',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'mandatory on official records',
    flip: {
      subject: 'gender',
      modalVerb: 'should',
      verb: 'be',
      complement: 'removed from legal documents',
    },
  },
  {
    subject: 'gender transition',
    modalVerb: 'should be',
    verb: 'restricted',
    complement: 'to adults only',
    flip: {
      subject: 'gender transition',
      modalVerb: 'should be',
      verb: 'accessible',
      complement: 'to anyone who needs it',
    },
  },
  {
    subject: 'gender transition',
    modalVerb: 'should be',
    verb: 'accessible',
    complement: 'to anyone who needs it',
    flip: {
      subject: 'gender transition',
      modalVerb: 'should be',
      verb: 'restricted',
      complement: 'to adults only',
    },
  },
  {
    subject: 'gender affirming care',
    modalVerb: 'should not',
    verb: 'be',
    complement: 'publicly funded',
    flip: {
      subject: 'gender affirming care',
      modalVerb: 'should',
      verb: 'be',
      complement: 'publicly funded',
    },
  },
  {
    subject: 'gender affirming care',
    modalVerb: 'should',
    verb: 'be',
    complement: 'publicly funded',
    flip: {
      subject: 'gender affirming care',
      modalVerb: 'should not',
      verb: 'be',
      complement: 'publicly funded',
    },
  },
  {
    subject: 'gender roles',
    modalVerb: 'should be',
    verb: 'preserved',
    complement: 'in society',
    flip: {
      subject: 'gender roles',
      modalVerb: 'should be',
      verb: 'destroyed',
      complement: 'completely',
    },
  },
  {
    subject: 'gender roles',
    modalVerb: 'should be',
    verb: 'destroyed',
    complement: 'completely',
    flip: {
      subject: 'gender roles',
      modalVerb: 'should be',
      verb: 'preserved',
      complement: 'in society',
    },
  },
  {
    subject: 'media',
    modalVerb: 'should not',
    verb: 'represent',
    complement: 'nontraditional genders',
    flip: {
      subject: 'media',
      modalVerb: 'should',
      verb: 'normalise',
      complement: 'all gender identities',
    },
  },
  {
    subject: 'media',
    modalVerb: 'should',
    verb: 'normalise',
    complement: 'all gender identities',
    flip: {
      subject: 'media',
      modalVerb: 'should not',
      verb: 'represent',
      complement: 'nontraditional genders',
    },
  },
  {
    subject: 'language',
    modalVerb: 'should not',
    verb: 'adapt',
    complement: 'to gender identity',
    flip: {
      subject: 'language',
      modalVerb: 'should',
      verb: 'evolve',
      complement: 'to reflect gender diversity',
    },
  },
  {
    subject: 'language',
    modalVerb: 'should',
    verb: 'evolve',
    complement: 'to reflect gender diversity',
    flip: {
      subject: 'language',
      modalVerb: 'should not',
      verb: 'adapt',
      complement: 'to gender identity',
    },
  },
  {
    subject: 'pronouns',
    modalVerb: 'should',
    verb: 'be',
    complement: 'biologically determined',
    flip: {
      subject: 'pronouns',
      modalVerb: 'should',
      verb: 'be',
      complement: 'chosen freely by individuals',
    },
  },
  {
    subject: 'pronouns',
    modalVerb: 'should',
    verb: 'be',
    complement: 'chosen freely by individuals',
    flip: {
      subject: 'pronouns',
      modalVerb: 'should',
      verb: 'be',
      complement: 'biologically determined',
    },
  },
  {
    subject: 'misgendering',
    modalVerb: 'should not',
    verb: 'be',
    complement: 'penalised',
    flip: {
      subject: 'misgendering',
      modalVerb: 'should',
      verb: 'be',
      complement: 'legally punishable',
    },
  },
  {
    subject: 'misgendering',
    modalVerb: 'should',
    verb: 'be',
    complement: 'legally punishable',
    flip: {
      subject: 'misgendering',
      modalVerb: 'should not',
      verb: 'be',
      complement: 'penalised',
    },
  },
  {
    subject: 'gender debates',
    modalVerb: 'should',
    verb: 'be',
    complement: 'restricted online',
    flip: {
      subject: 'gender debates',
      modalVerb: 'should',
      verb: 'be',
      complement: 'completely uncensored',
    },
  },
  {
    subject: 'gender debates',
    modalVerb: 'should',
    verb: 'be',
    complement: 'completely uncensored',
    flip: {
      subject: 'gender debates',
      modalVerb: 'should',
      verb: 'be',
      complement: 'restricted online',
    },
  },
  {
    subject: 'science',
    modalVerb: 'should',
    verb: 'define',
    complement: 'gender',
    flip: {
      subject: 'identity',
      modalVerb: 'should',
      verb: 'override',
      complement: 'science',
    },
  },
  {
    subject: 'identity',
    modalVerb: 'should',
    verb: 'override',
    complement: 'science',
    flip: {
      subject: 'science',
      modalVerb: 'should',
      verb: 'define',
      complement: 'gender',
    },
  },
  {
    subject: 'sports',
    modalVerb: 'should',
    verb: 'be',
    complement: 'separated by biological sex',
    flip: {
      subject: 'sports',
      modalVerb: 'should',
      verb: 'be',
      complement: 'integrated regardless of gender',
    },
  },
  {
    subject: 'sports',
    modalVerb: 'should',
    verb: 'be',
    complement: 'integrated regardless of gender',
    flip: {
      subject: 'sports',
      modalVerb: 'should',
      verb: 'be',
      complement: 'separated by biological sex',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'be',
    complement: 'irrelevant in sports',
    flip: {
      subject: 'gender',
      modalVerb: 'should',
      verb: 'determine',
      complement: 'competition categories',
    },
  },
  {
    subject: 'gender',
    modalVerb: 'should',
    verb: 'determine',
    complement: 'competition categories',
    flip: {
      subject: 'gender',
      modalVerb: 'should',
      verb: 'be',
      complement: 'irrelevant in sports',
    },
  },
]

/** Given a subject + modal verb, what verbs are valid? */
export function getVerbs(subject: string, modal: string): string[] {
  return [
    ...new Set(
      COMBINATIONS.filter(
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
  return COMBINATIONS.filter(
    (o) => o.subject === subject && o.modalVerb === modal && o.verb === verb,
  ).map((o) => o.complement)
}

/** Try to find the best matching row for a clicked word from the ticker */
export function findRowByWord(word: string): Partial<OpinionRow> | null {
  const lower = word.toLowerCase()
  const match = COMBINATIONS.find(
    (o) =>
      o.subject === lower || o.complement.includes(lower) || o.verb === lower,
  )
  if (!match) return null
  return match
}

export function flipOpinion(opinion: OpinionRow): OpinionFlip | null {
  const match = COMBINATIONS.find(
    (row) =>
      row.subject === opinion.subject &&
      row.modalVerb === opinion.modalVerb &&
      row.verb === opinion.verb &&
      row.complement === opinion.complement,
  )

  return match?.flip ?? null
}

// Backward compatibility alias
export const OPINIONS = COMBINATIONS
