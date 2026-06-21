import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs"; 
export const alt = "Shaikh Aman | Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  let base64Image = "";
  
  try {
    const imagePath = join(process.cwd(), "public", "images", "image1.png");
    const imageBuffer = readFileSync(imagePath);
    base64Image = `data:image/png;base64,${imageBuffer.toString("base64")}`;
  } catch (error) {
    console.error("Failed to read profile image from filesystem:", error);
  }

  return new ImageResponse(
    (
      // Bounding Canvas: Pure light background with subtle horizontal scanlines
      <div
        style={{
          background: "#fafafa",
          backgroundImage: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 2px, transparent 4px)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "monospace",
          padding: "80px 100px",
        }}
      >
        {/* LEFT PANE: Premium Branding & Balanced Typography */}
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            width: "55%",
          }}
        >
          {/* Explicit Standalone Identity Header Branding */}
          <div style={{ display: "flex", flexDirection: "column", marginBottom: "40px" }}>
            <span style={{ fontSize: "24px", fontWeight: 900, color: "#18181b", letterSpacing: "0.05em" }}>
              SHAIKH_AMAN
            </span>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#71717a", letterSpacing: "0.1em", marginTop: "2px" }}>
              BACKEND ENGINEER
            </span>
          </div>

          <div 
            style={{ 
              color: "#2563eb", 
              fontSize: "20px", 
              fontWeight: 700,
              display: "flex",
              marginBottom: "12px"
            }}
          >
            aman@system:~$
          </div>
          
          {/* 💎 Refined: Reduced headline size to 68px (~5% scale down) for superior composition weight */}
          <h1 
            style={{ 
              fontSize: "68px", 
              fontWeight: 900, 
              color: "#18181b", 
              letterSpacing: "-0.04em",
              margin: 0,
              lineHeight: 1.1,
              display: "flex",
              flexDirection: "column",
              marginBottom: "24px"
            }}
          >
            <span>Building reliable</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>web systems</span>
              <span style={{ color: "#2563eb", marginLeft: "6px" }}>._</span>
            </div>
          </h1>
          
          <p 
            style={{ 
              fontSize: "18px", 
              color: "#52525b", 
              lineHeight: 1.6,
              margin: 0,
              display: "flex",
              fontWeight: 500
            }}
          >
            Backend-first engineer focused on scalable APIs, realtime applications, databases, and production-ready fullstack products.
          </p>
        </div>

        {/* RIGHT PANE: Sharp Portrait Deck & Telemetry Metrics */}
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            width: "35%",
          }}
        >
          {/* Micro Terminal Identity Hook Above Photo */}
          <div 
            style={{ 
              marginBottom: "12px", 
              fontSize: "13px", 
              color: "#71717a", 
              fontWeight: 700, 
              letterSpacing: "0.05em",
              display: "flex"
            }}
          >
            engineer.render()
          </div>

          {/* 💎 Refined: Profile Container Box with a strengthened intentional border (#cbd5e1) */}
          <div 
            style={{ 
              width: "100%", 
              height: "280px", 
              border: "1px solid #cbd5e1", 
              display: "flex", 
              overflow: "hidden",
              position: "relative",
              background: "#ffffff",
              marginBottom: "16px"
            }}
          >
            {base64Image && (
              <img
                src={base64Image}
                alt="Shaikh Aman"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "grayscale(100%) contrast(106%) brightness(98%)",
                }}
              />
            )}
            
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(#000000 15%, transparent 15%)",
                backgroundSize: "6px 6px",
                opacity: 0.12,
              }}
            />
          </div>

          {/* Minimal Telemetry Array */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: 700, width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#71717a" }}>STATUS</span>
              <span style={{ color: "#2563eb" }}>ONLINE</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#71717a" }}>LOCATION</span>
              <span style={{ color: "#18181b" }}>HYDERABAD</span>
            </div>
          </div>
        </div>

      </div>
    ),
    { ...size }
  );
}