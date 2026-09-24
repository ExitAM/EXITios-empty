import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import "./marketing.css";
export default function MarketingFrame({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="exit-marketing">
      <a className="exit-skip" href="#main">
        Skip to content
      </a>
      <header className="exit-header">
        <Link to="/" aria-label="EXITios home">
          <Logo className="exit-logo" />
        </Link>
        <button
          className="exit-mobile"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "is-open" : ""} aria-label="Main navigation">
          <a href="/#approach" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="/#industries" onClick={() => setOpen(false)}>
            Who it’s for
          </a>
          <Link to="/example">See an example</Link>
          <a href="/#access" onClick={() => setOpen(false)}>
            Access
          </a>
          <Link to="/login">Log in</Link>
          <Link className="exit-button" to="/assessment">
            Find my first priority <ArrowUpRight size={16} />
          </Link>
        </nav>
      </header>
      {children}
      <footer className="exit-footer">
        <Link to="/" className="exit-wordmark">
          EXITios
        </Link>
        <p>Build a stronger business. Keep your options open.</p>
        <div>
          <Link to="/assessment">Priority check</Link>
          <Link to="/example">Sample analysis</Link>
          <Link to="/login">Log in</Link>
        </div>
        <small>
          © {new Date().getFullYear()} EXITios. Assessment results are
          preliminary guidance, not a valuation or verified financial analysis.
        </small>
      </footer>
    </div>
  );
}
