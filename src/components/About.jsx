import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import VanillaTilt from 'vanilla-tilt'

const skills = [
  'React Native', 'Flutter', 'Dart', 'JavaScript', 'TypeScript',
  'React.js', 'Node.js', 'Firebase', 'Firestore', 'REST APIs',
  'Groq API', 'RAG', 'LLM Integration', 'Prompt Engineering',
  'Google Auth', 'Git', 'Tailwind CSS', 'AI SaaS Architecture'
]

const stats = [
  { value: '8+', label: 'Months Experience' },
  { value: '2', label: 'Apps on Stores' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '2026', label: 'MCA Graduate' },
]

export default function About() {
  const cardRef = useRef(null)
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches
    if (!cardRef.current || isTouchDevice()) return

    VanillaTilt.init(cardRef.current, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.15,
      scale: 1.02,
    })

    return () => {
      if (cardRef.current?.vanillaTilt) cardRef.current.vanillaTilt.destroy()
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 900, width: '100%' }}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p style={{ fontFamily: 'Orbitron', fontSize: '0.7rem', color: '#22d3ee', letterSpacing: 6, marginBottom: 12 }}>
            WHO I AM
          </p>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 800,
            color: '#f1f5f9',
          }}>
            About <span className="shimmer-text">Me</span>
          </h2>
          <div className="section-line" style={{ width: 120, margin: '1rem auto 0', borderRadius: 2 }} />
        </motion.div>

        {/* Main tilt card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15, filter: 'blur(10px)' }}
          animate={inView ? { opacity: 1, scale: 1, rotateX: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div
            ref={cardRef}
            className="gradient-border"
            style={{
              borderRadius: 20,
              padding: '2.5rem',
              transformStyle: 'preserve-3d',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {/* Bio */}
              <div>
                {/* Avatar placeholder */}
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(14,165,233,0.3), rgba(34,211,238,0.2))',
                  border: '2px solid rgba(34,211,238,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 0 20px rgba(14,165,233,0.3)',
                  fontFamily: 'Orbitron',
                  fontSize: '1.5rem',
                  color: '#22d3ee',
                  fontWeight: 700,
                }}>
                  TG
                </div>

                <h3 style={{
                  fontFamily: 'Orbitron',
                  fontSize: '1.2rem',
                  color: '#f1f5f9',
                  marginBottom: '1rem',
                  fontWeight: 700,
                }}>
                  Hi, I'm Tejasvi Garg
                </h3>

                <p style={{
                  fontFamily: 'Sora',
                  fontSize: '0.95rem',
                  color: '#94a3b8',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}>
                  An MCA 2026 graduate from SRM University. I build cross-platform mobile apps, responsive web experiences, and full-stack SaaS products. With hands-on experience in React Native, Flutter, and modern web stacks, I turn ideas into polished, production-ready software.
                </p>

                {/* Info rows */}
                {[
                  { icon: '🎓', label: 'Education', value: 'MCA 2026 · SRM University' },
                  { icon: '📍', label: 'Location', value: 'Meerut, Uttar Pradesh' },
                  { icon: '✉️', label: 'Email', value: 'gargtejasvi076@gmail.com' },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                    <span style={{ fontSize: '1rem' }}>{icon}</span>
                    <div>
                      <span style={{ fontFamily: 'Sora', fontSize: '0.7rem', color: '#0ea5e9', letterSpacing: 2, display: 'block' }}>
                        {label.toUpperCase()}
                      </span>
                      <span style={{ fontFamily: 'Sora', fontSize: '0.85rem', color: '#f1f5f9' }}>{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats + Skills */}
              <div>
                {/* Stat grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: '2rem' }}>
                  {stats.map(({ value, label }) => (
                    <div
                      key={label}
                      className="glass-card-hover"
                      style={{ padding: '1rem', textAlign: 'center', borderRadius: 12 }}
                    >
                      <div style={{
                        fontFamily: 'Orbitron',
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        background: 'linear-gradient(90deg, #0ea5e9, #22d3ee)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}>{value}</div>
                      <div style={{ fontFamily: 'Sora', fontSize: '0.7rem', color: '#94a3b8', marginTop: 4, letterSpacing: 1 }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills chips */}
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontFamily: 'Orbitron', fontSize: '0.65rem', color: '#22d3ee', letterSpacing: 4, marginBottom: '0.8rem' }}>
                    TECH STACK
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {skills.map(s => (
                      <span key={s} className="skill-chip" style={{
                        fontFamily: 'Sora',
                        fontSize: '0.72rem',
                        padding: '4px 12px',
                        borderRadius: 999,
                        display: 'inline-block',
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
