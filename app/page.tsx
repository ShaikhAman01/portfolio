import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050505",
          color: "#f5f5f5",
          display: "flex",
          padding: 40,
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* subtle scanlines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 4px)",
          }}
        />

        {/* outer frame */}
        <div
          style={{
            border: "1px solid #2a2a2a",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: 30,
            position: "relative",
          }}
        >
          {/* window dots */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 30,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#ef4444",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#60a5fa",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#34d399",
              }}
            />
          </div>

          {/* code block */}
          <div
            style={{
              border: "1px solid #3a3a3a",
              padding: 24,
              marginBottom: 30,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontSize: 20,
            }}
          >
            <span>const Engineer = {"{"}</span>
            <span style={{ color: "#34d399" }}>
              &nbsp;&nbsp;name: 'Shaikh Aman',
            </span>
            <span style={{ color: "#34d399" }}>
              &nbsp;&nbsp;role: 'Fullstack Developer',
            </span>
            <span style={{ color: "#34d399" }}>
              &nbsp;&nbsp;focus: 'Backend-first systems',
            </span>
            <span style={{ color: "#34d399" }}>
              &nbsp;&nbsp;stack: ['Next.js','Node.js','PostgreSQL']
            </span>
            <span>{"};"}</span>
          </div>

          {/* hero */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "65%",
              }}
            >
              <div
                style={{
                  color: "#34d399",
                  fontSize: 18,
                  marginBottom: 20,
                }}
              >
                aman@system:~$
              </div>

              <div
                style={{
                  fontSize: 72,
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: "-0.05em",
                }}
              >
                Building
                <br />
                reliable
                <br />
                web systems<span style={{ color: "#34d399" }}>._</span>
              </div>

              <div
                style={{
                  marginTop: 20,
                  color: "#a1a1aa",
                  fontSize: 22,
                }}
              >
                Backend-first engineer focused on scalable APIs,
                realtime applications, databases and production-ready
                fullstack products.
              </div>
            </div>

            {/* terminal status card */}
            <div
              style={{
                width: 280,
                height: 280,
                border: "1px solid #2a2a2a",
                display: "flex",
                flexDirection: "column",
                padding: 18,
              }}
            >
              <div
                style={{
                  color: "#71717a",
                  fontSize: 14,
                  marginBottom: 10,
                }}
              >
                engineer.render()
              </div>

              <div
                style={{
                  flex: 1,
                  background: "#111",
                  border: "1px solid #2a2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 80,
                }}
              >
                {"</>"}
              </div>

              <div
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  color: "#34d399",
                }}
              >
                STATUS: ONLINE
              </div>

              <div
                style={{
                  fontSize: 14,
                  color: "#f5f5f5",
                }}
              >
                LOCATION: HYDERABAD
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}