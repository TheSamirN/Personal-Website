import { useEffect, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'

export default function Waves({
  className = '',
  strokeColor = '#ffffff',
  backgroundColor = '#000000',
}) {
  const containerRef = useRef(null)
  const svgRef = useRef(null)
  const pathsRef = useRef([])
  const linesRef = useRef([])
  const noiseRef = useRef(null)
  const rafRef = useRef(null)
  const boundingRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return

    noiseRef.current = createNoise2D()

    const setSize = () => {
      if (!containerRef.current || !svgRef.current) return
      boundingRef.current = containerRef.current.getBoundingClientRect()
      const { width, height } = boundingRef.current
      svgRef.current.style.width = `${width}px`
      svgRef.current.style.height = `${height}px`
    }

    const setLines = () => {
      if (!svgRef.current || !boundingRef.current) return
      const { width, height } = boundingRef.current
      linesRef.current = []
      pathsRef.current.forEach(path => path.remove())
      pathsRef.current = []

      const xGap = 8
      const yGap = 8
      const oWidth = width + 200
      const oHeight = height + 30
      const totalLines = Math.ceil(oWidth / xGap)
      const totalPoints = Math.ceil(oHeight / yGap)
      const xStart = (width - xGap * totalLines) / 2
      const yStart = (height - yGap * totalPoints) / 2

      for (let i = 0; i < totalLines; i++) {
        const points = []
        for (let j = 0; j < totalPoints; j++) {
          points.push({
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          })
        }
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('fill', 'none')
        path.setAttribute('stroke', strokeColor)
        path.setAttribute('stroke-width', '1')
        svgRef.current.appendChild(path)
        pathsRef.current.push(path)
        linesRef.current.push(points)
      }
    }

    const onResize = () => { setSize(); setLines() }

    const movePoints = (time) => {
      const noise = noiseRef.current
      if (!noise) return

      linesRef.current.forEach((points) => {
        points.forEach((p) => {
          const move = noise(
            (p.x + time * 0.008) * 0.003,
            (p.y + time * 0.003) * 0.002
          ) * 8
          p.wave.x = Math.cos(move) * 12
          p.wave.y = Math.sin(move) * 6
        })
      })
    }

    const moved = (point) => ({
      x: point.x + point.wave.x,
      y: point.y + point.wave.y,
    })

    const drawLines = () => {
      linesRef.current.forEach((points, i) => {
        if (points.length < 2 || !pathsRef.current[i]) return
        const first = moved(points[0])
        let d = `M ${first.x} ${first.y}`
        for (let j = 1; j < points.length; j++) {
          const c = moved(points[j])
          d += `L ${c.x} ${c.y}`
        }
        pathsRef.current[i].setAttribute('d', d)
      })
    }

    const tick = (time) => {
      movePoints(time)
      drawLines()
      rafRef.current = requestAnimationFrame(tick)
    }

    setSize()
    setLines()

    window.addEventListener('resize', onResize)

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [strokeColor])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor,
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        overflow: 'hidden',
      }}
    >
      <svg
        ref={svgRef}
        className="block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      />
    </div>
  )
}
