import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const runtime = "edge";
export const alt = "Shaikh Aman | Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const host = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "http://localhost:3000";

  return new ImageResponse(
    (
      // Bounding Canvas Frame with dynamic scanlines
      <div
        style={{
          background: "#09090b",
          backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.8) 50%, rgba(0, 0, 0, 0.2) 50%)",
          backgroundSize: "100% 4px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "monospace",
          padding: "45px",
        }}
      >
        {/* Outer Window Structure Border Frame */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            border: "1px solid #27272a",
            background: "#09090b",
            padding: "35px",
          }}
        >
          {/* Top Window Navigation Controls (Clean & Minimal Now) */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", marginBottom: "30px" }}>
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#60a5fa" }} />
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#10b981" }} />
          </div>

          {/* Dynamic Balanced Split Layout Container */}
          <div style={{ display: "flex", width: "100%", flex: 1, border: "1px solid #27272a" }}>
            
            {/* LEFT PANE: Premium Brutalist Typography Section */}
            <div 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center",
                width: "60%", 
                padding: "45px",
                borderRight: "1px solid #27272a"
              }}
            >
              <div 
                style={{ 
                  color: "#10b981", 
                  fontSize: "20px", 
                  fontWeight: 700,
                  display: "flex",
                  marginBottom: "16px"
                }}
              >
                aman@system:~$
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "24px" }}>
                <h1 
                  style={{ 
                    fontSize: "72px", 
                    fontWeight: 900, 
                    color: "#ffffff", 
                    letterSpacing: "-0.04em",
                    margin: 0,
                    lineHeight: 1.05,
                    display: "flex"
                  }}
                >
                  Building
                </h1>
                <h1 
                  style={{ 
                    fontSize: "72px", 
                    fontWeight: 900, 
                    color: "#ffffff", 
                    letterSpacing: "-0.04em",
                    margin: 0,
                    lineHeight: 1.05,
                    display: "flex"
                  }}
                >
                  reliable
                </h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h1 
                    style={{ 
                      fontSize: "72px", 
                      fontWeight: 900, 
                      color: "#ffffff", 
                      letterSpacing: "-0.04em",
                      margin: 0,
                      lineHeight: 1.05,
                      display: "flex"
                    }}
                  >
                    web systems.
                  </h1>
                  <span style={{ width: "24px", height: "12px", background: "#10b981", marginLeft: "12px", marginTop: "36px" }} />
                </div>
              </div>
              
              <p 
                style={{ 
                  fontSize: "18px", 
                  color: "#a1a1aa", 
                  lineHeight: 1.6,
                  margin: 0,
                  display: "flex",
                }}
              >
                Backend-first engineer focused on scalable APIs, realtime applications, databases, and production-ready fullstack products.
              </p>
            </div>

            {/* RIGHT PANE: Scaled Containment Portrait & Telemetry */}
            <div 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between",
                width: "40%", 
                padding: "35px",
                background: "#0c0c0e"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div 
                  style={{ 
                    marginBottom: "14px", 
                    fontSize: "12px", 
                    color: "#52525b", 
                    fontWeight: 700, 
                    letterSpacing: "0.15em",
                    display: "flex"
                  }}
                >
                  engineer.render()
                </div>

                {/* Portrait Window Frame - Fixed with containment architecture */}
                <div 
                  style={{ 
                    width: "100%", 
                    height: "250px", 
                    border: "1px solid #27272a", 
                    display: "flex", 
                    overflow: "hidden",
                    position: "relative",
                    background: "#18181b",
                  }}
                >
                  <img
                    src={`${host}/images/image1.png`}
                    alt="Shaikh Aman"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      filter: "grayscale(100%) contrast(112%) brightness(95%)",
                    }}
                  />
                  
                  {/* Halftone Retro Matrix Dot Texture */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: "radial-gradient(#000000 20%, transparent 20%)",
                      backgroundSize: "6px 6px",
                      opacity: 0.35,
                    }}
                  />
                </div>
              </div>

              {/* Precise Baseline System Spec Array */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px", fontWeight: 700, width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #27272a", paddingTop: "14px" }}>
                  <span style={{ color: "#52525b" }}>STATUS</span>
                  <span style={{ color: "#10b981" }}>ONLINE</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#52525b" }}>FOCUS</span>
                  <span style={{ color: "#ffffff" }}>BACKEND</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#52525b" }}>LOCATION</span>
                  <span style={{ color: "#ffffff" }}>HYDERABAD</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}