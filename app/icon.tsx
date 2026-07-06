import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 19,
          fontFamily: "JetBrains Mono",
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#34d399",
          fontWeight: 900,
          border: "2px solid #34d399",
        }}
      >
        {/* Square terminal prompt: black box, emerald frame, high contrast at 16px */}
        <span style={{ transform: "translateY(-1px)" }}>&gt;_</span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "JetBrains Mono",
          data: readFileSync(join(process.cwd(), "assets", "fonts", "JetBrainsMono-ExtraBold.ttf")),
          weight: 900,
          style: "normal",
        },
      ],
    }
  );
}
