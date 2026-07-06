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
          fontSize: 19,
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
    }
  );
}
