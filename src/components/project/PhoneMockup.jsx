import { useRef, useEffect } from 'react'

export default function PhoneMockup({ src }) {
  const videoRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!videoRef.current || !wrapperRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {})
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="flex-shrink-0 mx-auto select-none"
      style={{ width: '260px' }}
      aria-hidden="true"
    >
      {/*
        Phone shell — iPhone 14 Pro proportions
        Outer frame: dark titanium with subtle gradient
      */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '260px',
          aspectRatio: '260 / 536',
          borderRadius: '46px',
          background: 'linear-gradient(160deg, #2e2e2e 0%, #1a1a1a 60%, #111 100%)',
          boxShadow: `
            0 0 0 1.5px #3a3a3a,
            0 0 0 3px #141414,
            8px 20px 60px rgba(0,0,0,0.55),
            -2px -4px 12px rgba(255,255,255,0.04) inset
          `,
          padding: '10px',
        }}
      >
        {/* Volume button left */}
        <div style={{
          position: 'absolute', left: '-3.5px', top: '96px',
          width: '3.5px', height: '28px',
          background: 'linear-gradient(to right, #222, #333)',
          borderRadius: '3px 0 0 3px',
        }} />
        <div style={{
          position: 'absolute', left: '-3.5px', top: '134px',
          width: '3.5px', height: '52px',
          background: 'linear-gradient(to right, #222, #333)',
          borderRadius: '3px 0 0 3px',
        }} />
        {/* Power button right */}
        <div style={{
          position: 'absolute', right: '-3.5px', top: '116px',
          width: '3.5px', height: '68px',
          background: 'linear-gradient(to left, #222, #333)',
          borderRadius: '0 3px 3px 0',
        }} />

        {/* Screen bezel — very thin inner border */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '37px',
            overflow: 'hidden',
            background: '#000',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.06) inset',
          }}
        >
          {/* Status bar – minimal */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '42px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '10px 18px 0',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', fontFamily: 'system-ui' }}>
              9:41
            </span>
            {/* Icons area */}
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center', paddingTop: '1px' }}>
              {/* Signal */}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="rgba(255,255,255,0.85)"/>
                <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="rgba(255,255,255,0.85)"/>
                <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="rgba(255,255,255,0.85)"/>
                <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="rgba(255,255,255,0.85)"/>
              </svg>
              {/* WiFi */}
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M6.5 8.5a1 1 0 1 1 0 .001" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M3.5 5.8C4.3 5 5.35 4.5 6.5 4.5s2.2.5 3 1.3" stroke="rgba(255,255,255,0.85)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                <path d="M1 3C2.6 1.4 4.45.5 6.5.5s3.9.9 5.5 2.5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
              </svg>
              {/* Battery */}
              <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
                <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="rgba(255,255,255,0.55)" strokeWidth="1"/>
                <rect x="2" y="2" width="14" height="7" rx="1.5" fill="rgba(255,255,255,0.85)"/>
                <path d="M19.5 3.5v4a1.5 1.5 0 0 0 0-4z" fill="rgba(255,255,255,0.4)"/>
              </svg>
            </div>
          </div>

          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '96px',
              height: '28px',
              background: '#000',
              borderRadius: '18px',
              zIndex: 20,
            }}
          />

          {/* Video */}
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />

          {/* Home indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: 'rgba(255,255,255,0.35)',
              borderRadius: '3px',
              zIndex: 10,
            }}
          />
        </div>
      </div>
    </div>
  )
}
