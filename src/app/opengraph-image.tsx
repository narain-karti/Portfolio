import { ImageResponse } from "next/og";

export const alt = "Narain Karti — AI Systems & Data Science";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: "64px 72px",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle isometric corner grid accent */}
        <div
          style={{
            position: "absolute",
            right: 68,
            top: 64,
            width: 220,
            height: 220,
            borderRadius: 24,
            border: "1px solid #242429",
            background: "#111114",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 112,
              height: 112,
              borderRadius: 20,
              border: "2px solid #35353d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              color: "#f5f5f5",
              position: "relative",
            }}
          >
            NK
            <div
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#6ee7b7",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#6ee7b7" }} />
          <span style={{ fontSize: 22, color: "#8e8e93", letterSpacing: "0.08em" }}>
            PORTFOLIO · IIT MADRAS × NIAT
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 820 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Narain Karti
          </div>
          <div style={{ fontSize: 30, color: "#b4b4bc", lineHeight: 1.4 }}>
            AI systems engineer building offline models, zero-copy data tools, and software that holds up outside demos.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #222227",
            paddingTop: 24,
            fontSize: 22,
            color: "#8e8e93",
          }}
        >
          <span style={{ color: "#6ee7b7" }}>DATADOC · MECH-G · Project-MELV · Quorum · AxoWeb</span>
          <span>Chennai, India</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
