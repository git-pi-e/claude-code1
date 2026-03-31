// Stub for color-diff-napi (native addon)
export type SyntaxTheme = any
export class ColorDiff {
  constructor(..._args: any[]) {}
}
export class ColorFile {
  constructor(..._args: any[]) {}
}
export function getSyntaxTheme(..._args: any[]): SyntaxTheme { return {} as any }
export function diff_closest(color: any, palette: any[]) { return palette[0] }
export function diff_sort(color: any, palette: any[]) { return palette }
