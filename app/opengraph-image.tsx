import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0d1b29 0%, #16293b 55%, #26425d 100%)",
          color: "#faf8f4",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c9ad82",
          }}
        >
          Estudio jurídico · Las Condes, Santiago
        </div>
        <div style={{ fontSize: 80, fontWeight: 600, marginTop: 24, lineHeight: 1.05 }}>
          Bravo <span style={{ color: "#c9ad82" }}>&amp;</span> Arismendi
        </div>
        <div style={{ fontSize: 34, marginTop: 8, color: "rgba(250,248,244,0.65)" }}>
          Abogados
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 40,
            maxWidth: 820,
            color: "rgba(250,248,244,0.8)",
          }}
        >
          {siteConfig.slogan}
        </div>
      </div>
    ),
    { ...size }
  );
}
