import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Miroslav Jurka – Svatební fotograf Olomouc, portréty & IRIS Fotografie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at center, #1A1A1A 0%, #0A0A0A 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background:
              "linear-gradient(90deg, transparent 0%, #C9A961 50%, transparent 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#C9A961",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: 28,
            fontWeight: 400,
          }}
        >
          Profesionální fotograf
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 1,
          }}
        >
          <div
            style={{
              fontSize: 96,
              color: "#FFFFFF",
              fontStyle: "italic",
              fontWeight: 300,
              marginBottom: 8,
            }}
          >
            Miroslav
          </div>
          <div
            style={{
              fontSize: 128,
              color: "#FFFFFF",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Jurka
          </div>
        </div>

        <div
          style={{
            width: 80,
            height: 2,
            background: "#C9A961",
            marginTop: 36,
            marginBottom: 36,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#F5F0E8",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Svatby · Portréty · IRIS · Olomouc
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background:
              "linear-gradient(90deg, transparent 0%, #C9A961 50%, transparent 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
