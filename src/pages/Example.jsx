import React, { useState } from "react";
import { Link } from "react-router-dom";
import MarketingFrame from "@/components/exitios/MarketingFrame";
export default function Example() {
  const [starting, setStarting] = useState("1000");
  const [retained, setRetained] = useState("850");
  const a = Number(starting),
    b = Number(retained);
  const valid =
    starting !== "" &&
    retained !== "" &&
    Number.isInteger(a) &&
    Number.isInteger(b) &&
    a > 0 &&
    b >= 0 &&
    b <= a;
  return (
    <MarketingFrame>
      <main id="main" className="exit-section exit-container">
        <p className="exit-eyebrow">INTERACTIVE EXAMPLE · SAMPLE INPUTS</p>
        <h1 className="exit-result-title">
          Customer growth can
          <br />
          hide customer losses.
        </h1>
        <p className="exit-lead">
          Inspect one calculation before you trust the conclusion. Change the
          sample inputs to see how cohort retention works.
        </p>
        <div className="exit-result-grid">
          <article>
            <h2>Follow the same customer group.</h2>
            <label className="exit-field">
              Customers at the start of the period
              <input
                type="number"
                min="1"
                step="1"
                value={starting}
                onChange={(e) => setStarting(e.target.value)}
              />
            </label>
            <label className="exit-field">
              Customers from that group still active at the end
              <input
                type="number"
                min="0"
                step="1"
                value={retained}
                onChange={(e) => setRetained(e.target.value)}
              />
            </label>
            <div className="exit-calculation" aria-live="polite">
              {valid ? (
                <>
                  <strong>{((100 * b) / a).toFixed(1)}%</strong>
                  <span>Customer cohort retention</span>
                  <p>
                    {b.toLocaleString()} ÷ {a.toLocaleString()} × 100
                  </p>
                </>
              ) : (
                <p>
                  Enter whole customer counts. Starting customers must be
                  greater than zero, and retained customers cannot exceed the
                  starting group.
                </p>
              )}
            </div>
            <p>
              Exclude newly acquired customers. Use one defined period and a
              consistent definition of “active.” This measures customer count
              retention, not revenue retention.
            </p>
          </article>
          <aside>
            <p className="exit-eyebrow">TURN A NUMBER INTO A QUESTION</p>
            <h3>Why did customers leave?</h3>
            <p>
              A retention rate does not explain the cause. Review cancellation
              reasons, service issues, pricing changes, and cohort age before
              recommending an intervention.
            </p>
            <h3>Evidence needed</h3>
            <p>
              A starting customer list, end-of-period status, and cancellation
              records.
            </p>
            <h3>Limits</h3>
            <p>
              These are illustrative inputs. No industry benchmark, verified
              result, or expected savings is provided.
            </p>
            <Link className="exit-button" to="/assessment">
              Find my own starting point
            </Link>
          </aside>
        </div>
      </main>
    </MarketingFrame>
  );
}
