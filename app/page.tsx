"use client";

import { useState, useEffect } from "react";
import {
  Plane, Share2, Users, Bell, CheckCircle, Clock,
  ArrowRight, Star, Zap, Globe, Shield, ChevronDown
} from "lucide-react";

// ── Animated Flight Card (Hero) ──────────────────────────────────────────────
function FlightCard() {
  const [progress, setProgress] = useState(42);
  const [viewers, setViewers] = useState(17);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => (p >= 96 ? 12 : p + 0.5));
      setViewers(v => Math.max(12, Math.min(23, v + (Math.random() > 0.7 ? 1 : Math.random() > 0.7 ? -1 : 0))));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card animate-float" style={{
      padding: "28px",
      maxWidth: "360px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top-right badge stack */}
      <div style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "8px",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          background: "#fff3e8",
          border: "1px solid #f5d5b8",
          borderRadius: "20px",
          padding: "4px 10px",
          fontSize: "12px",
          fontWeight: 700,
          color: "#c2692a",
        }}>
          <Users size={12} />
          {viewers} watching
        </div>
        <span className="badge badge-blue" style={{ fontSize: "11px" }}>
          In Air
        </span>
      </div>

      {/* Airline + status */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <div style={{
          width: "40px", height: "40px",
          background: "linear-gradient(135deg, #2f86ff, #7c3aed)",
          borderRadius: "12px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "20px",
        }}>✈️</div>
        <div>
          <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "20px", color: "#1a1410" }}>
            AA 171
          </div>
          <div style={{ fontSize: "12px", color: "#6b5b4e" }}>American Airlines</div>
        </div>
      </div>

      {/* Route */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "28px", color: "#1a1410" }}>JFK</div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#2f86ff" }}>06:00</div>
          <div style={{ fontSize: "11px", color: "#a8998d" }}>New York</div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", padding: "0 12px" }}>
          <div style={{ width: "100%", height: "2px", background: "#e8ddd0", borderRadius: "2px", position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute",
              left: 0, top: 0, bottom: 0,
              width: `${progress}%`,
              background: "linear-gradient(90deg, #2f86ff, #7c3aed)",
              borderRadius: "2px",
              transition: "width 1.2s ease",
            }} />
          </div>
          <div style={{ fontSize: "10px", color: "#a8998d", fontWeight: 600 }}>{Math.round(progress)}% complete</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "28px", color: "#1a1410" }}>LAX</div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#2f86ff" }}>09:20</div>
          <div style={{ fontSize: "11px", color: "#a8998d" }}>Los Angeles</div>
        </div>
      </div>

      {/* Gate info */}
      <div style={{
        display: "flex",
        gap: "8px",
        padding: "12px",
        background: "#f7f2ec",
        borderRadius: "12px",
        fontSize: "12px",
        color: "#6b5b4e",
      }}>
        <span>🚪 Gate B22</span>
        <span style={{ margin: "0 4px", color: "#e8ddd0" }}>·</span>
        <span>🏛 Terminal 8</span>
        <span style={{ margin: "0 4px", color: "#e8ddd0" }}>·</span>
        <span>✅ On Time</span>
      </div>

      {/* Last update */}
      <div style={{ marginTop: "12px", fontSize: "11px", color: "#a8998d", textAlign: "center" }}>
        Live · Updated just now
      </div>
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "1200px",
      margin: "0 auto",
      transition: "all 0.3s",
      background: scrolled ? "rgba(253,248,242,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(232,221,208,0.5)" : "none",
    }}>
      <div style={{
        fontFamily: "Nunito, sans-serif",
        fontWeight: 900,
        fontSize: "22px",
        color: "#1a1410",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}>
        ✈️ FlyPal
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <a href="#features" style={{ color: "#6b5b4e", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Features
        </a>
        <a href="#how-it-works" style={{ color: "#6b5b4e", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          How it works
        </a>
        <a
          href="https://flightsync-app-nsit.vercel.app"
          className="btn-primary"
          style={{ padding: "10px 20px", fontSize: "14px", borderRadius: "12px" }}
        >
          Try Free
        </a>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "120px 24px 80px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        width: "100%",
      }}>
        {/* Left — copy */}
        <div>
          <div className="badge badge-coral animate-slide-up" style={{ marginBottom: "24px" }}>
            🚀 Launching March 2026
          </div>
          <h1
            className="font-display animate-slide-up delay-100"
            style={{
              fontSize: "clamp(48px, 6vw, 80px)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#1a1410",
              marginBottom: "24px",
              letterSpacing: "-1px",
            }}
          >
            One link.<br />
            <span style={{ color: "#2f86ff" }}>Everyone</span><br />
            knows.
          </h1>
          <p className="animate-slide-up delay-200" style={{
            fontSize: "18px",
            color: "#6b5b4e",
            lineHeight: 1.7,
            marginBottom: "40px",
            maxWidth: "480px",
          }}>
            Stop the "are you landed yet?" texts. Share your flight with one link —
            your family tracks you in real-time, no app install needed.
          </p>
          <div className="animate-slide-up delay-300" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com" className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "22px" }}>🍎</span>
              <div style={{ textAlign: "left", lineHeight: 1.2 }}>
                <div style={{ fontSize: "10px", fontWeight: 500, opacity: 0.85 }}>Download on the</div>
                <div style={{ fontSize: "15px", fontWeight: 800 }}>App Store</div>
              </div>
            </a>
            <a href="https://play.google.com" className="btn-coral" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "22px" }}>▶️</span>
              <div style={{ textAlign: "left", lineHeight: 1.2 }}>
                <div style={{ fontSize: "10px", fontWeight: 500, opacity: 0.85 }}>Get it on</div>
                <div style={{ fontSize: "15px", fontWeight: 800 }}>Google Play</div>
              </div>
            </a>
          </div>
          <div className="animate-slide-up delay-400" style={{
            marginTop: "28px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "13px",
            color: "#a8998d",
          }}>
            <span>✅ Free forever</span>
            <span>·</span>
            <span>✅ No ads</span>
            <span>·</span>
            <span>✅ No account for viewers</span>
          </div>
        </div>

        {/* Right — animated card */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FlightCard />
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        color: "#a8998d",
        fontSize: "12px",
        animation: "pulse-soft 2s ease-in-out infinite",
      }}>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      number: "01",
      emoji: "✈️",
      title: "Enter your flight",
      desc: "Type your flight number and date. We'll pull live data from aviation databases.",
    },
    {
      number: "02",
      emoji: "🔗",
      title: "Get your link",
      desc: "One tap generates a shareable link with your real-time flight status baked in.",
    },
    {
      number: "03",
      emoji: "💛",
      title: "Family tracks you",
      desc: "Send the link to anyone. They see live updates — no app install, no sign-up.",
    },
  ];

  return (
    <section id="how-it-works" style={{
      padding: "120px 24px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}>
      <div style={{ textAlign: "center", marginBottom: "72px" }}>
        <div className="badge badge-blue" style={{ marginBottom: "16px" }}>
          Dead simple
        </div>
        <h2 className="font-display" style={{
          fontSize: "clamp(36px, 4vw, 56px)",
          fontWeight: 900,
          color: "#1a1410",
          marginBottom: "16px",
          letterSpacing: "-0.5px",
        }}>
          Three taps. Done.
        </h2>
        <p style={{ fontSize: "17px", color: "#6b5b4e", maxWidth: "480px", margin: "0 auto", lineHeight: 1.6 }}>
          The whole experience takes under 60 seconds.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "32px",
      }}>
        {steps.map((step, i) => (
          <div key={i} className="card" style={{ padding: "36px 28px", position: "relative" }}>
            <div style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "40px",
              color: "#f0e8e0",
            }}>
              {step.number}
            </div>
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>{step.emoji}</div>
            <h3 className="font-display" style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "#1a1410",
              marginBottom: "12px",
            }}>
              {step.title}
            </h3>
            <p style={{ fontSize: "15px", color: "#6b5b4e", lineHeight: 1.7 }}>{step.desc}</p>
            {i < steps.length - 1 && (
              <div style={{
                position: "absolute",
                right: "-16px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "24px",
                color: "#e8ddd0",
                zIndex: 1,
                display: "none", // hidden on mobile
              }}>→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: <Globe size={28} color="#2f86ff" />,
      title: "No install for viewers",
      desc: "Mom clicks the link. That's it. No App Store, no account, no friction. Works on every device.",
      highlight: true,
    },
    {
      icon: <Bell size={28} color="#ff6b4a" />,
      title: "Real-time updates",
      desc: "Live aviation data — departure, delays, gate changes, landing time. Refreshes automatically.",
    },
    {
      icon: <Users size={28} color="#7c3aed" />,
      title: "See who's watching",
      desc: "A live viewer count shows how many people are tracking your flight. Your whole family, in one place.",
    },
    {
      icon: <CheckCircle size={28} color="#16a34a" />,
      title: "Safe arrival button",
      desc: "Tap to confirm you've landed safely. Everyone tracking you gets the instant update. No more anxious waiting.",
    },
    {
      icon: <Clock size={28} color="#ff6b4a" />,
      title: "Quick status updates",
      desc: '"At the gate" · "Boarding now" · "Just landed" — one tap updates, pushed to everyone watching.',
    },
    {
      icon: <Shield size={28} color="#6b5b4e" />,
      title: "Private & clean",
      desc: "No ads. No data selling. No spam. Just a simple, honest tool that does one thing well.",
    },
  ];

  return (
    <section id="features" style={{
      padding: "120px 24px",
      background: "linear-gradient(180deg, transparent 0%, rgba(47,134,255,0.04) 50%, transparent 100%)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="badge badge-coral" style={{ marginBottom: "16px" }}>
            Built different
          </div>
          <h2 className="font-display" style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 900,
            color: "#1a1410",
            marginBottom: "16px",
            letterSpacing: "-0.5px",
          }}>
            Everything your family needs.<br />Nothing they don't.
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}>
          {features.map((f, i) => (
            <div key={i} className="card" style={{
              padding: "32px 28px",
              border: f.highlight ? "2px solid rgba(47,134,255,0.25)" : undefined,
              background: f.highlight ? "rgba(47,134,255,0.03)" : undefined,
            }}>
              <div style={{
                width: "52px", height: "52px",
                background: "#f7f2ec",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}>
                {f.icon}
              </div>
              <h3 className="font-display" style={{
                fontSize: "19px",
                fontWeight: 800,
                color: "#1a1410",
                marginBottom: "10px",
              }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#6b5b4e", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Social Proof ──────────────────────────────────────────────────────────────
function SocialProof() {
  const testimonials = [
    {
      quote: "I used to text my son six times every flight. Now I just open the link. I can't believe this didn't exist before.",
      name: "Maria G.",
      role: "Mom of a frequent traveler",
      emoji: "❤️",
    },
    {
      quote: "Shared it with my whole family group chat before boarding. My wife, my parents, my in-laws — everyone tracked the same flight without calling me once.",
      name: "James T.",
      role: "Business traveler",
      emoji: "🙌",
    },
    {
      quote: "I send my clients a FlyPal link the moment their trip is booked. They feel taken care of and I don't get 8 'where's my flight' texts.",
      name: "Sandra R.",
      role: "Independent Travel Advisor",
      emoji: "✈️",
    },
  ];

  return (
    <section style={{ padding: "120px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "72px" }}>
        <div className="badge badge-green" style={{ marginBottom: "16px" }}>
          ⭐ Loved by families
        </div>
        <h2 className="font-display" style={{
          fontSize: "clamp(36px, 4vw, 56px)",
          fontWeight: 900,
          color: "#1a1410",
          letterSpacing: "-0.5px",
        }}>
          "Stop sending 'are you landed yet?' texts."
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
        {testimonials.map((t, i) => (
          <div key={i} className="card" style={{ padding: "32px 28px" }}>
            <div style={{ fontSize: "32px", marginBottom: "16px" }}>{t.emoji}</div>
            <div style={{
              display: "flex",
              gap: "3px",
              marginBottom: "16px",
            }}>
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} fill="#ff6b4a" color="#ff6b4a" />
              ))}
            </div>
            <p style={{
              fontSize: "15px",
              color: "#1a1410",
              lineHeight: 1.75,
              marginBottom: "24px",
              fontStyle: "italic",
            }}>
              "{t.quote}"
            </p>
            <div>
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a1410" }}>{t.name}</div>
              <div style={{ fontSize: "13px", color: "#a8998d" }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Travel Agent CTA ──────────────────────────────────────────────────────────
function TravelAgentSection() {
  return (
    <section style={{
      padding: "80px 24px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}>
      <div style={{
        background: "linear-gradient(135deg, #1a1410 0%, #2d1f15 100%)",
        borderRadius: "32px",
        padding: "64px",
        display: "flex",
        alignItems: "center",
        gap: "80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background decoration */}
        <div style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(47,134,255,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-40px",
          left: "20%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(255,107,74,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />

        <div style={{ flex: 1, position: "relative" }}>
          <div className="badge" style={{
            background: "rgba(255,107,74,0.15)",
            color: "#ff6b4a",
            border: "1px solid rgba(255,107,74,0.3)",
            marginBottom: "20px",
          }}>
            🏢 For Travel Agents
          </div>
          <h2 className="font-display" style={{
            fontSize: "clamp(28px, 3.5vw, 46px)",
            fontWeight: 900,
            color: "#ffffff",
            marginBottom: "16px",
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
          }}>
            Your clients deserve<br />better than a text.
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "32px", maxWidth: "440px" }}>
            Send your clients a FlyPal link the moment their trip is booked.
            They feel taken care of. You stop answering "where's my flight?" calls.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://flightsync-app-nsit.vercel.app" className="btn-primary">
              Try FlyPal Free
            </a>
            <a href="https://studio217.ai" className="btn-outline" style={{
              color: "rgba(255,255,255,0.8)",
              borderColor: "rgba(255,255,255,0.2)",
            }}>
              Meet Studio217 →
            </a>
          </div>
          <p style={{ marginTop: "16px", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            Studio217 automates your entire agency ops — check-ins, CC auth, flight tracking.
          </p>
        </div>

        <div style={{ flex: "0 0 280px", position: "relative" }}>
          <div style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "24px",
            backdropFilter: "blur(10px)",
          }}>
            {[
              { icon: "✅", text: "Auto-send flight links to clients" },
              { icon: "🕐", text: "Stop answering 'where's my flight?'" },
              { icon: "💼", text: "Look more professional instantly" },
              { icon: "📊", text: "See who's tracking in real time" },
              { icon: "🤖", text: "Pair with Studio217 for full automation" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 0",
                borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none",
                fontSize: "14px",
                color: "rgba(255,255,255,0.75)",
                fontWeight: 500,
              }}>
                <span style={{ fontSize: "18px" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Download CTA ──────────────────────────────────────────────────────────────
function DownloadCTA() {
  return (
    <section style={{ padding: "120px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <div style={{ fontSize: "72px", marginBottom: "24px", animation: "float 4s ease-in-out infinite" }}>
          ✈️
        </div>
        <h2 className="font-display" style={{
          fontSize: "clamp(40px, 5vw, 64px)",
          fontWeight: 900,
          color: "#1a1410",
          marginBottom: "20px",
          letterSpacing: "-1px",
          lineHeight: 1.05,
        }}>
          Ready to land stress-free?
        </h2>
        <p style={{
          fontSize: "18px",
          color: "#6b5b4e",
          lineHeight: 1.7,
          marginBottom: "48px",
        }}>
          Download FlyPal and share your next flight before you board.
          Your family will thank you.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://apps.apple.com" className="btn-primary" style={{
            padding: "18px 36px",
            fontSize: "17px",
            gap: "12px",
          }}>
            <span style={{ fontSize: "24px" }}>🍎</span>
            <div style={{ textAlign: "left", lineHeight: 1.2 }}>
              <div style={{ fontSize: "11px", opacity: 0.8 }}>Download on the</div>
              <div style={{ fontSize: "17px", fontWeight: 800 }}>App Store</div>
            </div>
          </a>
          <a href="https://play.google.com" className="btn-coral" style={{
            padding: "18px 36px",
            fontSize: "17px",
            gap: "12px",
          }}>
            <span style={{ fontSize: "24px" }}>▶️</span>
            <div style={{ textAlign: "left", lineHeight: 1.2 }}>
              <div style={{ fontSize: "11px", opacity: 0.8 }}>Get it on</div>
              <div style={{ fontSize: "17px", fontWeight: 800 }}>Google Play</div>
            </div>
          </a>
        </div>
        <div style={{ marginTop: "24px" }}>
          <a href="https://flightsync-app-nsit.vercel.app" style={{
            fontSize: "14px",
            color: "#6b5b4e",
            textDecoration: "underline",
            textDecorationStyle: "dotted",
          }}>
            Or try the web version →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      padding: "48px 24px",
      borderTop: "1px solid #e8ddd0",
      maxWidth: "1200px",
      margin: "0 auto",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "24px",
      }}>
        <div>
          <div className="font-display" style={{ fontWeight: 900, fontSize: "20px", color: "#1a1410", marginBottom: "4px" }}>
            ✈️ FlyPal
          </div>
          <div style={{ fontSize: "13px", color: "#a8998d" }}>
            © 2026 SneaksNYC · Built with ❤️ by{" "}
            <a href="https://studio217.ai" style={{ color: "#2f86ff", textDecoration: "none" }}>Studio217</a>
          </div>
        </div>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Studio217", href: "https://studio217.ai" },
            { label: "Contact", href: "mailto:hello@flypal.app" },
          ].map((link, i) => (
            <a key={i} href={link.href} style={{
              fontSize: "13px",
              color: "#6b5b4e",
              textDecoration: "none",
              fontWeight: 500,
            }}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ── Responsive styles injected ────────────────────────────────────────────────
const responsiveStyles = `
  @media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
    .features-grid { grid-template-columns: 1fr 1fr !important; }
    .steps-grid { grid-template-columns: 1fr !important; }
    .testimonials-grid { grid-template-columns: 1fr !important; }
    .agent-section { flex-direction: column !important; gap: 40px !important; }
    .agent-checklist { flex: unset !important; width: 100% !important; }
  }
  @media (max-width: 600px) {
    .features-grid { grid-template-columns: 1fr !important; }
    .nav-links { display: none !important; }
    .hero-cta { flex-direction: column !important; }
    .download-cta { flex-direction: column !important; }
    .agent-section { padding: 40px 24px !important; }
  }
`;

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <style>{responsiveStyles}</style>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <SocialProof />
        <TravelAgentSection />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
