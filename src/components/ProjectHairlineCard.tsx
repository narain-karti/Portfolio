"use client";

import React from "react";
import HairlineFigure from "./HairlineFigure";
import { getProjectHairlineFigure } from "../data/hairline-figures";

export default function ProjectHairlineCard({
  projectKey,
  label,
}: {
  projectKey: string;
  label?: string;
}) {
  const figure = getProjectHairlineFigure(projectKey);

  return (
    <div
      style={{
        background: "#131314",
        border: "1px solid #242427",
        borderRadius: "14px",
        padding: "1.15rem",
        marginBottom: "2.4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <span className="meta-label meta-label-accent">
          {label || "INTERACTIVE SYSTEM MODEL"}
        </span>
        <span className="meta-label">Hover to inspect</span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HairlineFigure
          figure={figure}
          plateColor="#131314"
          autoTour={true}
          showReadout={false}
          style={{ maxWidth: "380px", aspectRatio: "5 / 4" }}
        />
      </div>
      <p
        style={{
          fontSize: "0.84rem",
          color: "rgba(255,255,255,0.62)",
          textAlign: "center",
          marginTop: "6px",
        }}
      >
        {figure.means}
      </p>
    </div>
  );
}
