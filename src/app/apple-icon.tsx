import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d10",
          borderRadius: "36px",
          border: "3px solid #28282e",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: "-0.06em",
            color: "#f5f5f5",
            fontFamily: "sans-serif",
          }}
        >
          NK
        </div>
        <div
          style={{
            position: "absolute",
            top: 38,
            right: 34,
            width: 16,
            height: 16,
            borderRadius: "999px",
            background: "#6ee7b7",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
