import { ImageResponse } from "next/og";
import { siteMeta } from "@/cotents";

export const alt = `${siteMeta.legalName} — Modern Web Development Agency`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #030712 0%, #1e1b4b 50%, #0c4a6e 100%)",
          color: "#f9fafb",
          fontFamily: "sans-serif",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            V
          </div>
          <div style={{ fontSize: "44px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            {siteMeta.legalName}
          </div>
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: "1000px",
            display: "flex",
          }}
        >
          Build High-Performance Websites Faster
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "28px",
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: "900px",
            display: "flex",
          }}
        >
          Affordable · Fast Delivery · Professional Quality
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            fontSize: "22px",
            color: "#818cf8",
          }}
        >
          velhu.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
