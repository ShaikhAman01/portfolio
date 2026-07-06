import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { profile, projects } from "@/lib/data";

export const runtime = "nodejs";
export const alt = "Project case study";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function loadFont(file: string) {
  return readFileSync(join(process.cwd(), "assets", "fonts", file));
}

const imageFonts = () => [
  { name: "JetBrains Mono", data: loadFont("JetBrainsMono-Bold.ttf"), weight: 700 as const, style: "normal" as const },
  { name: "JetBrains Mono", data: loadFont("JetBrainsMono-ExtraBold.ttf"), weight: 900 as const, style: "normal" as const },
];

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#fafafa",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "JetBrains Mono",
            fontSize: "48px",
            fontWeight: 900,
            color: "#18181b",
          }}
        >
          {profile.brand}
        </div>
      ),
      { ...size, fonts: imageFonts() }
    );
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
          fontFamily: "JetBrains Mono",
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
              shaikhaman.dev/projects/{project.slug}
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
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <span style={{ fontSize: "22px", fontWeight: 900, color: "#18181b", letterSpacing: "0.05em" }}>
                  {profile.brand}
                </span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#71717a", letterSpacing: "0.1em", marginTop: "2px" }}>
                  PROJECT CASE STUDY
                </span>
              </div>

              <div
                style={{
                  color: "#2563eb",
                  fontSize: "17px",
                  fontWeight: 700,
                  display: "flex",
                  marginBottom: "8px",
                }}
              >
                aman@system:~$ open projects/{project.slug}
              </div>

              <h1
                style={{
                  fontSize: "52px",
                  fontWeight: 900,
                  color: "#18181b",
                  letterSpacing: "-0.03em",
                  margin: 0,
                  lineHeight: 1.1,
                  display: "flex",
                  marginBottom: "16px",
                }}
              >
                {project.title}
              </h1>

              <div style={{ display: "flex", marginBottom: "16px" }}>
                <span
                  style={{
                    border: "1px dashed #2563eb",
                    background: "rgba(37, 99, 235, 0.06)",
                    color: "#2563eb",
                    fontSize: "14px",
                    fontWeight: 900,
                    letterSpacing: "0.12em",
                    padding: "7px 13px",
                  }}
                >
                  STATUS: {project.status}
                </span>
              </div>

              <p
                style={{
                  fontSize: "18px",
                  color: "#4b5563",
                  lineHeight: 1.5,
                  margin: 0,
                  display: "flex",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                {project.description}
              </p>
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
                project.metrics()
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #cbd5e1",
                  background: "#ffffff",
                  padding: "22px",
                  gap: "15px",
                  marginBottom: "18px",
                }}
              >
                {project.metrics.map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "15px",
                      fontWeight: 700,
                    }}
                  >
                    <span style={{ color: "#71717a" }}>{label}</span>
                    <span style={{ color: "#2563eb" }}>{value}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      border: "1px solid #cbd5e1",
                      background: "#ffffff",
                      color: "#4b5563",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      padding: "6px 10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: imageFonts() }
  );
}
