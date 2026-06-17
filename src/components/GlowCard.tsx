import { useState, type MouseEvent, type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { type GlowHoverOptions, useGlowHover, withGlowAlpha } from '../utils/glowHover'

type GlowAmbientConfig = {
  bottomBase?: number
  topBase?: number
  bottomHover?: number
  topHover?: number
}

type GlowAmbientLayersProps = {
  glow: string
  solidBg?: boolean
  isHovered: boolean
  ambient: Required<GlowAmbientConfig>
}

const DEFAULT_AMBIENT: Required<GlowAmbientConfig> = {
  bottomBase: 0,
  topBase: 0,
  bottomHover: 75,
  topHover: 55,
}

function GlowAmbientLayers({ glow, solidBg, isHovered, ambient }: GlowAmbientLayersProps) {
  return (
    <>
      {solidBg && (
        <div
          className={`absolute inset-0 -z-20 bg-[#0e0e16] transition-colors duration-500 ${isHovered ? 'bg-[#151522]' : ''}`}
        />
      )}
      <div
        className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-[80px] transition-opacity duration-700 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle, ${withGlowAlpha(glow, 0.45)}, transparent 70%)`,
          opacity: isHovered ? ambient.bottomHover / 100 : ambient.bottomBase / 100,
        }}
      />
      <div
        className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-[80px] transition-opacity duration-700 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle, ${withGlowAlpha(glow, 0.25)}, transparent 70%)`,
          opacity: isHovered ? ambient.topHover / 100 : ambient.topBase / 100,
        }}
      />
    </>
  )
}

type GlowSurfaceProps = {
  glow: string
  hover: GlowHoverOptions
  solidBg?: boolean
  ambient?: GlowAmbientConfig
  className?: string
  children: ReactNode
  as?: 'div' | 'form'
  motionProps?: HTMLMotionProps<'div'> | HTMLMotionProps<'form'>
}

function GlowSurface({
  glow,
  hover,
  solidBg = true,
  ambient,
  className = '',
  children,
  as = 'div',
  motionProps = {},
}: GlowSurfaceProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { style, onMouseEnter, onMouseLeave } = useGlowHover(hover)
  const ambientConfig = { ...DEFAULT_AMBIENT, ...ambient }

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement | HTMLFormElement>) => {
    onMouseEnter(e as MouseEvent<HTMLElement>)
    setIsHovered(true)
  }

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement | HTMLFormElement>) => {
    onMouseLeave(e as MouseEvent<HTMLElement>)
    setIsHovered(false)
  }

  const sharedProps = {
    className: `relative overflow-hidden ${className}`,
    style,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ...motionProps,
  }

  const layers = (
    <GlowAmbientLayers
      glow={glow}
      solidBg={solidBg}
      isHovered={isHovered}
      ambient={ambientConfig}
    />
  )

  if (as === 'form') {
    return (
      <motion.form {...(sharedProps as HTMLMotionProps<'form'>)}>
        {layers}
        {children}
      </motion.form>
    )
  }

  return (
    <motion.div {...(sharedProps as HTMLMotionProps<'div'>)}>
      {layers}
      {children}
    </motion.div>
  )
}

type GlowCardProps = Omit<GlowSurfaceProps, 'as' | 'motionProps'> &
  HTMLMotionProps<'div'>

export function GlowCard({ className, children, ...props }: GlowCardProps) {
  const { glow, hover, solidBg, ambient, ...motionProps } = props
  return (
    <GlowSurface
      glow={glow}
      hover={hover}
      solidBg={solidBg}
      ambient={ambient}
      className={className}
      as="div"
      motionProps={motionProps}
    >
      {children}
    </GlowSurface>
  )
}

type GlowPanelProps = Omit<GlowSurfaceProps, 'as' | 'motionProps'> &
  HTMLMotionProps<'form'>

export function GlowPanel({ className, children, ...props }: GlowPanelProps) {
  const { glow, hover, ambient, ...motionProps } = props
  return (
    <GlowSurface
      glow={glow}
      hover={hover}
      solidBg={false}
      ambient={{ bottomHover: 70, topHover: 50, ...ambient }}
      className={className}
      as="form"
      motionProps={motionProps}
    >
      {children}
    </GlowSurface>
  )
}

export { GlowAmbientLayers, withGlowAlpha }
