declare module '*.js' {
  export const opinions: Array<{
    subject: string
    opinions: string[]
  }>

  export const antiThesis: Record<string, string>
}
