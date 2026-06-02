import { ImageResponse } from "next/og";

export const alt =
  "Adminity Solutions, fractional operations for US businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1100px 600px at 12% -10%, rgba(139,156,255,0.30), transparent 60%), radial-gradient(900px 500px at 100% 110%, rgba(182,156,255,0.22), transparent 60%), #08080a",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
              color: "#08080a",
              background: "linear-gradient(135deg, #8b9cff, #b69cff)",
            }}
          >
            A
          </div>
          <div style={{ fontSize: "30px", fontWeight: 600, letterSpacing: "-0.5px" }}>
            Adminity Solutions
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              maxWidth: "920px",
            }}
          >
            We run your operations so you can run your business.
          </div>
          <div style={{ fontSize: "28px", color: "#a1a1ac", maxWidth: "860px" }}>
            Fractional operations for US founders. Built in Lahore, run with AI.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "24px", color: "#6f6f78" }}>
          adminitysolutions.com
        </div>
      </div>
    ),
    { ...size }
  );
}
