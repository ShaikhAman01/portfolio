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
      // Bounding Canvas: Soft background scanline texture matching your site theme
      <div
        style={{
          background: "#f4f4f5",
          backgroundImage: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 2px, transparent 4px)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "monospace",
          padding: "45px",
        }}
      >
        {/* Main Terminal Window Chassis */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            border: "1px solid #d4d4d8",
            background: "#fafafa",
            padding: "35px",
          }}
        >
          {/* Top Window Navigation Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", marginBottom: "30px" }}>
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#ef4444", display: "flex" }} />
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#60a5fa", display: "flex" }} />
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#34d399", display: "flex" }} />
          </div>

          {/* Balanced Dynamic Split Grid Deck */}
          <div style={{ display: "flex", width: "100%", flex: 1, border: "1px solid #e4e4e7" }}>
            
            {/* LEFT PANE: Premium Brutalist Typography Section */}
            <div 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center",
                width: "60%", 
                padding: "45px",
                borderRight: "1px solid #e4e4e7",
                background: "#ffffff"
              }}
            >
              <div style={{ color: "#2563eb", fontSize: "20px", fontWeight: 700, display: "flex", marginBottom: "16px" }}>
                aman@system:~$
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "24px" }}>
                <h1 style={{ fontSize: "72px", fontWeight: 900, color: "#18181b", letterSpacing: "-0.04em", margin: 0, lineHeight: 1.05, display: "flex", flexDirection: "column" }}>
                  <span>Building reliable</span>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>web systems</span>
                    <span style={{ color: "#2563eb", marginLeft: "6px" }}>._</span>
                  </div>
                </h1>
              </div>
              
              <p style={{ fontSize: "18px", color: "#52525b", lineHeight: 1.6, margin: 0, display: "flex", fontWeight: 500 }}>
                Backend-first engineer focused on scalable APIs, realtime applications, databases, and production-ready fullstack products.
              </p>
            </div>

            {/* RIGHT PANE: Clean Status Card & Profile Containment */}
            <div 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between",
                width: "40%", 
                padding: "35px",
                background: "#fafafa"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{ marginBottom: "14px", fontSize: "12px", color: "#71717a", fontWeight: 700, letterSpacing: "0.15em", display: "flex" }}>
                  engineer.render()
                </div>

                <div 
                  style={{ 
                    width: "100%", 
                    height: "250px", 
                    border: "1px solid #e4e4e7", 
                    display: "flex", 
                    overflow: "hidden",
                    position: "relative",
                    background: "#ffffff",
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
                  
                  {/* Soft Dither Overlay Matrix for classic card depth */}
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
              </div>

              {/* Precise Metric Base Deck */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", fontWeight: 700, width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e4e4e7", paddingTop: "14px" }}>
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
        </div>
      </div>
    ),
    { ...size }
  );
}