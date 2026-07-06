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
      <div
        style={{
          background: "#f4f4f5",
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 2px, transparent 4px)",
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "monospace",
          padding: "48px 56px 60px 56px",
        }}
      >
        {/* TERMINAL WINDOW CARD */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#fafafa",
            border: "2px solid #18181b",
            boxShadow: "12px 12px 0 rgba(0,0,0,0.16)",
            padding: "36px 56px 40px 56px",
          }}
        >
          {/* WINDOW TOP BAR */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ width: "14px", height: "14px", borderRadius: "9999px", background: "#ef4444" }} />
              <div style={{ width: "14px", height: "14px", borderRadius: "9999px", background: "#60a5fa" }} />
              <div style={{ width: "14px", height: "14px", borderRadius: "9999px", background: "#34d399" }} />
            </div>
            <span style={{ fontSize: "15px", fontWeight: 700, color: "#71717a", letterSpacing: "0.1em" }}>
              shaikhaman.dev
            </span>
          </div>

          {/* SPLIT PANES */}
          <div style={{ display: "flex", flex: 1 }}>
            {/* LEFT PANE */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "62%",
                paddingRight: "48px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "28px" }}>
                <span style={{ fontSize: "22px", fontWeight: 900, color: "#18181b", letterSpacing: "0.05em" }}>
                  SHAIKH_AMAN
                </span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#71717a", letterSpacing: "0.1em", marginTop: "2px" }}>
                  FULLSTACK DEVELOPER
                </span>
              </div>

              <div
                style={{
                  color: "#2563eb",
                  fontSize: "19px",
                  fontWeight: 700,
                  display: "flex",
                  marginBottom: "10px",
                }}
              >
                aman@system:~$
              </div>

              <h1
                style={{
                  fontSize: "64px",
                  fontWeight: 900,
                  color: "#18181b",
                  letterSpacing: "-0.04em",
                  margin: 0,
                  lineHeight: 1.12,
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "22px",
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
                  fontSize: "21px",
                  color: "#4b5563",
                  lineHeight: 1.5,
                  margin: 0,
                  display: "flex",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginBottom: "26px",
                }}
              >
                Backend-leaning fullstack developer. Clean APIs, production-minded data models, fast interfaces.
              </p>

              {/* STACK CHIPS */}
              <div style={{ display: "flex", gap: "10px" }}>
                {["NEXT.JS", "REACT", "NODE.JS", "POSTGRESQL"].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      border: "1px solid #cbd5e1",
                      background: "#ffffff",
                      color: "#4b5563",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      padding: "7px 12px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT PANE */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "38%",
                borderLeft: "1px solid #cbd5e1",
                paddingLeft: "48px",
              }}
            >
              <div
                style={{
                  marginBottom: "12px",
                  fontSize: "13px",
                  color: "#71717a",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  display: "flex",
                }}
              >
                engineer.render()
              </div>

              <div
                style={{
                  width: "100%",
                  height: "270px",
                  border: "1px solid #cbd5e1",
                  display: "flex",
                  overflow: "hidden",
                  position: "relative",
                  background: "#ffffff",
                  marginBottom: "16px",
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

              <div style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "13px", fontWeight: 700, width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #cbd5e1", paddingTop: "10px" }}>
                  <span style={{ color: "#71717a" }}>STATUS</span>
                  <span style={{ color: "#2563eb" }}>AVAILABLE_FOR_HIRE</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#71717a" }}>FOCUS</span>
                  <span style={{ color: "#18181b" }}>BACKEND</span>
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
