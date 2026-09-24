import React from "react";

const LOGO_URL = "/exitios-logo.png";

export default function Logo({ className = "", mark = false }) {
  if (mark) {
    return (
      <img
        src={LOGO_URL}
        alt="EXITios"
        className={className}
        style={{ objectFit: "contain" }}
      />
    );
  }
  return (
    <img
      src={LOGO_URL}
      alt="EXITios"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}