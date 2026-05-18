import { useEffect, useRef } from "react"
import cursorImg from "../assets/cursor.png"

const CursorGlowTrail = () => {
  const dotRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const glow = glowRef.current
    if (!dot || !glow) return

    let mouseX = -100
    let mouseY = -100
    let dotX = -100
    let dotY = -100
    let glowX = -100
    let glowY = -100

    let isClicked = false
    let isHovering = false
    let time = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseDown = () => {
      isClicked = true
    }

    const onMouseUp = () => {
      isClicked = false
    }

    const onMouseOver = (e) => {
      const target = e.target
      if (!target) return

      const interactive = target.closest("a, button, input, textarea, .interactive, [role='button']")
      isHovering = !!interactive

      if (isHovering) {
        glow.style.backgroundColor = "rgba(6, 182, 212, 0.25)"
        glow.style.borderColor = "rgba(6, 182, 212, 0.6)"
      } else {
        glow.style.backgroundColor = "rgba(6, 182, 212, 0.08)"
        glow.style.borderColor = "rgba(6, 182, 212, 0.3)"
      }
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("mousedown", onMouseDown, { passive: true })
    window.addEventListener("mouseup", onMouseUp, { passive: true })
    window.addEventListener("mouseover", onMouseOver, { passive: true })

    // Ultra high performance render loop
    let animationFrameId
    const tick = () => {
      time += 0.05 // Increment time for custom breathing sine wave

      // Small inner custom pointer follows mouse coordinates
      dotX = mouseX
      dotY = mouseY

      // Outer soft ring lags slightly behind for an organic fluid feel
      glowX += (mouseX - glowX) * 0.16
      glowY += (mouseY - glowY) * 0.16

      // Calculate subtle breathing pulse: ranges between -0.05 and +0.05
      const breathingPulse = Math.sin(time) * 0.05

      // Base scales based on hover
      let dotScale = isHovering ? 1.25 : 1.0
      let glowScale = isHovering ? (1.35 + breathingPulse) : (1.0 + breathingPulse)

      // Contract scales instantly on mouse click for tactile feedback
      if (isClicked) {
        dotScale *= 0.8
        glowScale *= 0.75
      }

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) scale(${dotScale})`
      glow.style.transform = `translate3d(${glowX - 48}px, ${glowY - 48}px, 0) scale(${glowScale})`

      animationFrameId = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mouseup", onMouseUp)
      window.removeEventListener("mouseover", onMouseOver)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] hidden md:block">
      {/* Outer soft volumetric glow circle */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 h-24 w-24 rounded-full border border-cyan-400/30 bg-cyan-400/[0.08] blur-md"
        style={{
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0) scale(1)",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      />
      {/* Inner sharp custom cursor image pointer */}
      <img
        ref={dotRef}
        src={cursorImg}
        alt="custom cursor"
        className="fixed top-0 left-0 h-6 w-6 object-contain pointer-events-none"
        style={{
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0) scale(1)",
        }}
      />
    </div>
  )
}

export default CursorGlowTrail