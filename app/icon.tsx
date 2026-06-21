import { ImageResponse } from "next/og";

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
          fontSize: 22,
          background: "#1e293b", // Slate background matching your right-side pane style
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#2563eb", // Matches your premium cobalt blue link color signature
          fontWeight: 900,
          borderRadius: "6px", // Gives it that modern rounded app look like the others
        }}
      >
        {/* Force typography strings to scale max fill thresholds inside browser tab engines */}
        <span style={{ transform: "translateY(-1px)" }}>&gt;_</span>
      </div>
    ),
    {
      ...size,
    }
  );
}