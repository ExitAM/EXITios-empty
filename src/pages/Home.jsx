import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Check, MoveUpRight } from "lucide-react";
import MarketingFrame from "@/components/exitios/MarketingFrame";
const decisions = [
  {
    label: "Profit",
    question: "Busy. But is the work paying off?",
    detail:
      "Start with one service or job type. Compare what it earns with the direct costs of delivering it.",
    evidence: "Revenue + direct labor + delivery costs",
    goal: "margin",
    action: "Find my profit starting point",
  },
  {
    label: "Customers",
    question: "Are you growing, or replacing lost customers?",
    detail:
      "Follow the same customer group over time. Separate new sales from the customers you keep.",
    evidence: "Starting customers + departures + time period",
    goal: "retention",
    action: "Find my retention starting point",
  },
  {
    label: "Capacity",
    question: "More work. Can your team deliver?",
    detail:
      "Compare committed work with available productive hours before deciding to hire or increase demand.",
    evidence: "Booked work + staff hours + delivery time",
    goal: "capacity",
    action: "Find my capacity starting point",
  },
];
export default function Home() {
  const [selected, setSelected] = useState(0);
  const decision = decisions[selected];
  return (
    <MarketingFrame>
      <main id="main">
        <section className="exit-hero exit-container">
          <div>
            <p className="exit-eyebrow">
              BUSINESS GROWTH, STARTING WITH YOUR NEXT DECISION
            </p>
            <h1>
              Build a business
              <br />
              <span>that earns its growth.</span>
            </h1>
            <p className="exit-lead">
              Find your starting point for stronger margins, repeat customers,
              and a team that can keep up. EXITios turns what you know today
              into a practical next step, with the evidence to gather next.
            </p>
            <div className="exit-actions">
              <Link className="exit-button" to="/assessment">
                Find my first priority <ArrowUpRight size={18} />
              </Link>
              <Link className="exit-textlink" to="/example">
                Explore a sample analysis <ArrowRight size={17} />
              </Link>
            </div>
            <p className="exit-note">
              <Check size={15} /> No account, CRM connection, or financial
              upload needed to start.
            </p>
          </div>
          <div className="exit-preview">
            <div className="exit-preview-top">
              <span>EXITios / PRIORITY BRIEF</span>
              <span className="exit-pill">Illustrative example</span>
            </div>
            <p className="exit-eyebrow">THE NEXT DECISION</p>
            <h2>
              Before you buy more leads,
              <br />
              check who you’re keeping.
            </h2>
            <p>
              Customer growth can hide losses within your existing customer
              base. Start with a consistent cohort.
            </p>
            <div className="exit-metric">
              <div>
                <small>Starting customers</small>
                <strong>1,000</strong>
              </div>
              <span>→</span>
              <div>
                <small>Retained customers</small>
                <strong>850</strong>
              </div>
              <div className="exit-metric-highlight">
                <small>Cohort retention</small>
                <strong>85%</strong>
              </div>
            </div>
            <div className="exit-preview-action">
              <MoveUpRight />
              <div>
                <strong>Next action</strong>
                <p>Review the reasons behind the 150 departures.</p>
              </div>
            </div>
            <Link to="/example" className="exit-textlink">
              Inspect the inputs and calculation <ArrowRight size={17} />
            </Link>
            <small className="exit-caption">
              Sample numbers. No industry benchmark or customer result implied.
            </small>
          </div>
        </section>
        <div className="exit-principles exit-container">
          <span>YOUR BUSINESS. YOUR STARTING POINT.</span>
          <p>Plain-language questions</p>
          <p>Visible assumptions</p>
          <p>Practical next steps</p>
        </div>
        <section
          className="exit-section exit-container exit-decision-section"
          aria-labelledby="decision-heading"
        >
          <div>
            <p className="exit-eyebrow">START WITH THE PRESSURE YOU FEEL</p>
            <h2 id="decision-heading">What needs to work better?</h2>
            <p>
              You know where the pressure is. Let’s make the next question
              clearer.
            </p>
            <div
              className="exit-decision-choices"
              aria-label="Choose an operating concern"
            >
              {decisions.map((item, index) => (
                <button
                  key={item.label}
                  aria-pressed={selected === index}
                  onClick={() => setSelected(index)}
                >
                  {item.label}
                  <ArrowUpRight size={18} />
                </button>
              ))}
            </div>
          </div>
          <article className="exit-decision-detail" aria-live="polite">
            <span className="exit-eyebrow">
              {decision.label.toUpperCase()} / A QUESTION WORTH ASKING
            </span>
            <h3>{decision.question}</h3>
            <p>{decision.detail}</p>
            <div className="exit-evidence-strip">
              <span>What you’ll need next</span>
              <strong>{decision.evidence}</strong>
            </div>
            <Link
              className="exit-textlink"
              to={"/assessment?goal=" + decision.goal}
            >
              {decision.action}
              <ArrowRight size={17} />
            </Link>
          </article>
        </section>
        <section id="approach" className="exit-section exit-container">
          <p className="exit-eyebrow">LESS GUESSWORK. MORE DIRECTION.</p>
          <div className="exit-section-title">
            <h2>
              Go from “something’s off”
              <br />
              to “here’s where we start.”
            </h2>
            <p>
              You do not need a finance team to ask better questions about your
              business.
            </p>
          </div>
          <div className="exit-steps">
            {[
              [
                "01",
                "Tell us what is happening.",
                "Answer six questions about your business, your goal, and the operating constraints you can see.",
              ],
              [
                "02",
                "Get a useful starting point.",
                "Receive a preliminary priority, the reasoning behind it, and the evidence needed to investigate.",
              ],
              [
                "03",
                "Make the next move concrete.",
                "Download your brief. Choose who will investigate, gather the suggested evidence, and establish a baseline.",
              ],
            ].map(([n, t, p]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="exit-dark">
          <div className="exit-container exit-section">
            <p className="exit-eyebrow">
              BUILD VALUE BEFORE YOU NEED TO PROVE IT
            </p>
            <h2>
              Better operations today.
              <br />
              Better options tomorrow.
            </h2>
            <div className="exit-paths">
              {[
                [
                  "Grow",
                  "Which work should we do more of?",
                  "Understand the inputs behind margin, retention, and delivery capacity.",
                ],
                [
                  "Prepare to sell",
                  "What will a buyer need to understand?",
                  "Begin documenting how the business earns, retains customers, and operates without the owner.",
                ],
                [
                  "Evaluate a purchase",
                  "What must be true for this deal to work?",
                  "Start with investment criteria and the evidence required to assess a target.",
                ],
              ].map(([tag, title, body]) => (
                <article key={tag}>
                  <span className="exit-eyebrow">{tag}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <Link
                    to={
                      "/assessment?goal=" +
                      (tag === "Grow"
                        ? "margin"
                        : tag === "Prepare to sell"
                          ? "sale"
                          : "acquire")
                    }
                  >
                    Explore my starting point <ArrowUpRight size={17} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="industries"
          className="exit-section exit-container exit-split"
        >
          <div>
            <p className="exit-eyebrow">FOCUS FIRST. DEPTH THAT MATTERS.</p>
            <h2>
              Built around the way
              <br />
              your business earns.
            </h2>
            <p className="exit-lead">
              Our first focus is owner-led home and field service businesses
              with repeat customers or maintenance work. Customer retention,
              service economics, team capacity, and owner dependence belong in
              the same conversation.
            </p>
            <Link className="exit-textlink" to="/assessment">
              Start with your business <ArrowRight size={18} />
            </Link>
          </div>
          <div className="exit-industry-panel">
            <p className="exit-eyebrow">HOME & FIELD SERVICES</p>
            {[
              "Are new customers replacing customers we lose?",
              "Can the team deliver the work we are selling?",
              "Which services cover their direct costs?",
              "What still depends on the owner?",
            ].map((t, i) => (
              <div key={t}>
                <span>0{i + 1}</span>
                <p>{t}</p>
              </div>
            ))}
            <small>
              Other industries can use the general diagnostic. Specialized
              benchmarks and industry-specific financial models are not included
              in this initial experience.
            </small>
          </div>
        </section>
        <section
          id="access"
          className="exit-section exit-container exit-access"
        >
          <div>
            <p className="exit-eyebrow">START WITH ONE DECISION</p>
            <h2>
              See the starting point.
              <br />
              Then decide what’s next.
            </h2>
            <p>
              The initial priority check is free. Six questions, a preliminary
              recommendation, and a checklist you can download. No credit card
              required.
            </p>
          </div>
          <div>
            <Link to="/assessment" className="exit-button">
              Find my first priority <ArrowUpRight size={18} />
            </Link>
            <p className="exit-note">
              Paid plans and guided services are not available to purchase in
              this release.
            </p>
          </div>
        </section>
        <section className="exit-section exit-container exit-faq">
          <p className="exit-eyebrow">A FEW STRAIGHT ANSWERS</p>
          {[
            [
              "Do I need a CRM or clean financial reports?",
              "No. The priority check starts with your answers. Detailed financial findings require appropriate records, but you do not need to upload them to begin.",
            ],
            [
              "Is the result an AI valuation or a financial diagnosis?",
              "No. This initial assessment uses explicit rules to suggest where to investigate. It does not calculate business value or claim to have reviewed your records.",
            ],
            [
              "What happens to my answers?",
              "The assessment stores a short-lived draft in this browser tab when browser storage is available. You can clear it at any time. It is not automatically saved to your company workspace.",
            ],
            [
              "Can I use EXITios if I am not planning to sell?",
              "Yes. Start with margins, customer retention, or capacity. Better operating information can support future financing, acquisition, and sale decisions too.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </section>
      </main>
    </MarketingFrame>
  );
}
