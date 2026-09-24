import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, ArrowUpRight } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import MarketingFrame from "@/components/exitios/MarketingFrame";
import {
  questions,
  draftStorage,
  readDraft,
  recommend,
  trackFunnel,
  VERSION,
} from "@/lib/assessment";
export default function AssessmentResult() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const answers = location.state?.answers || readDraft(draftStorage());
  const result = recommend(answers);
  const download = () => {
    const text = [
      "EXITios | Preliminary priority brief",
      result.title,
      result.reason,
      "Next action: " + result.action,
      "Evidence needed: " + result.evidence,
      "Measure: " + result.measure,
      "Method: " + VERSION,
      "Source: self-reported answers. No records reviewed. No financial impact estimated.",
      "",
      ...questions.map(
        (q) =>
          q.title + " " + q.options.find(([v]) => v === answers[q.key])?.[1],
      ),
    ].join("\n\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "EXITios-priority-brief.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    trackFunnel("brief_downloaded", 6);
  };
  return (
    <MarketingFrame>
      <main id="main" className="exit-section exit-container">
        {!result ? (
          <div className="exit-form">
            <h1>Let’s find your starting point.</h1>
            <p>
              No complete assessment is available in this tab. Answer six
              questions to generate your preliminary brief.
            </p>
            <Link className="exit-button" to="/assessment">
              Start the priority check
            </Link>
          </div>
        ) : (
          <>
            <p className="exit-eyebrow">YOUR PRELIMINARY PRIORITY</p>
            <h1 className="exit-result-title">{result.title}</h1>
            <p className="exit-lead">{result.reason}</p>
            <div className="exit-result-grid">
              <article>
                <span className="exit-pill">Based on your answers</span>
                <h2>Your next action</h2>
                <p>{result.action}</p>
                <h3>Gather this evidence</h3>
                <p>{result.evidence}</p>
                <h3>Establish a baseline</h3>
                <p>{result.measure}</p>
                <button className="exit-button" onClick={download}>
                  Download my brief <Download size={17} />
                </button>
              </article>
              <aside>
                <p className="exit-eyebrow">WHAT THIS RESULT MEANS</p>
                <h3>A place to investigate.</h3>
                <p>
                  This result uses explicit assessment rules. It is not a
                  finding from your financial records, a business valuation, or
                  a prediction of savings.
                </p>
                <p>
                  {answers.industry === "home"
                    ? "Your selected business model is home and field services."
                    : "You are receiving general operating guidance. A specialist industry model has not been applied."}
                </p>
                <p>No records reviewed. No financial impact estimated.</p>
                <Link className="exit-textlink" to="/assessment">
                  Review my answers
                </Link>
                <hr />
                <h3>Continue to your workspace</h3>
                <p>
                  Your brief stays in this tab for up to 24 hours. After signing
                  in, you return here. Download a copy to keep it. This draft is
                  not saved to your company workspace.
                </p>
                <Link
                  className="exit-secondary"
                  to={
                    isAuthenticated
                      ? "/app"
                      : "/register?returnTo=%2Fassessment%2Fresult"
                  }
                >
                  {isAuthenticated ? "Open my workspace" : "Create an account"}{" "}
                  <ArrowUpRight size={16} />
                </Link>
              </aside>
            </div>
            <details className="exit-answer-review">
              <summary>Review the answers behind this recommendation</summary>
              {questions.map((q) => (
                <p key={q.key}>
                  <strong>{q.title}</strong>
                  <br />
                  {q.options.find(([v]) => v === answers[q.key])?.[1]}
                </p>
              ))}
            </details>
          </>
        )}
      </main>
    </MarketingFrame>
  );
}
