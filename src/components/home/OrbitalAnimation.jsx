import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function OrbitalAnimation() {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className="relative w-80 h-80 mx-auto"
      aria-hidden="true"
    >
      {/* Glow background */}
      <div
        className="absolute rounded-full"
        style={{
          width: 384,
          height: 384,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(190,138,132,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Gradient blur behind moon */}
      <div
        className="absolute rounded-full"
        style={{
          width: 280,
          height: 280,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(135deg, #be8a84 0%, #a4a174 100%)',
          filter: 'blur(80px)',
          opacity: 0.4,
        }}
      />

      {/* Moon ring */}
      <div
        className="absolute rounded-full border border-rose-accent-original"
        style={{
          width: 220,
          height: 220,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
        }}
      />

      {/* Orbiting dot 1 — peach, fast */}
      <div
        className="absolute"
        style={{
          width: 220,
          height: 220,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: reducedMotion ? 'none' : 'orbit 8s linear infinite',
        }}
      >
        <div
          className="absolute rounded-full bg-peach"
          style={{
            width: 12,
            height: 12,
            top: -6,
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 12px 2px rgba(232,176,140,0.6)',
          }}
        />
      </div>

      {/* Orbiting dot 2 — olive, medium */}
      <div
        className="absolute"
        style={{
          width: 260,
          height: 260,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: reducedMotion ? 'none' : 'orbit 14s linear infinite reverse',
        }}
      >
        <div
          className="absolute rounded-full bg-olive"
          style={{
            width: 8,
            height: 8,
            bottom: -4,
            left: '15%',
            boxShadow: '0 0 8px 2px rgba(181,178,133,0.5)',
          }}
        />
      </div>

      {/* Orbiting dot 3 — rose, slow */}
      <div
        className="absolute"
        style={{
          width: 300,
          height: 300,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: reducedMotion ? 'none' : 'orbit 20s linear infinite',
        }}
      >
        <div
          className="absolute rounded-full bg-rose-accent-original"
          style={{
            width: 6,
            height: 6,
            top: '50%',
            left: -3,
            boxShadow: '0 0 8px 2px rgba(190,138,132,0.5)',
          }}
        />
      </div>
    </div>
  )
}
