import { useMemo } from 'react'

export type GlowHoverOptions = {
  baseBorder: string
  hoverBorder: string
  baseShadow: string
  hoverShadow: string
}

const TRANSITION = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'

export function withGlowAlpha(glow: string, alpha: number): string {
  const rgbaMatch = glow.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (rgbaMatch) {
    return `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, ${alpha})`
  }

  if (glow.startsWith('#')) {
    const hex = glow.replace('#', '')
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  return glow
}

export function createAccentGlow(accent: string, glow: string): GlowHoverOptions {
  return {
    baseBorder: `${accent}40`,
    hoverBorder: `${accent}90`,
    baseShadow: `0 8px 30px -10px ${accent}20, 0 0 15px ${accent}08`,
    hoverShadow: `0 0 35px ${withGlowAlpha(glow, 0.15)}`,
  }
}

export function createCategoryGlow(accent: string): GlowHoverOptions {
  return {
    baseBorder: `${accent}40`,
    hoverBorder: `${accent}90`,
    baseShadow: `0 0 25px ${accent}12`,
    hoverShadow: `0 0 35px ${accent}25`,
  }
}

export function createMutedGlow(glow: string): GlowHoverOptions {
  return {
    baseBorder: 'rgba(255, 255, 255, 0.08)',
    hoverBorder: withGlowAlpha(glow, 0.45),
    baseShadow: 'none',
    hoverShadow: `0 0 35px ${withGlowAlpha(glow, 0.15)}`,
  }
}

export function createIconGlow(color: string): GlowHoverOptions {
  return {
    baseBorder: `${color}35`,
    hoverBorder: `${color}90`,
    baseShadow: `0 0 12px ${color}08`,
    hoverShadow: `0 0 20px ${color}45`,
  }
}

export function useGlowHover(options: GlowHoverOptions) {
  const { baseBorder, hoverBorder, baseShadow, hoverShadow } = options

  const style = useMemo(
    () => ({
      borderColor: baseBorder,
      boxShadow: baseShadow,
      transition: TRANSITION,
    }),
    [baseBorder, baseShadow],
  )

  const onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = hoverBorder
    e.currentTarget.style.boxShadow = hoverShadow
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = baseBorder
    e.currentTarget.style.boxShadow = baseShadow
  }

  return { style, onMouseEnter, onMouseLeave }
}
