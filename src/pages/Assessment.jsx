import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MarketingFrame from "@/components/exitios/MarketingFrame";
import {
  questions,
  draftStorage,
  readDraft,
  saveDraft,
  trackFunnel,
  STORAGE_KEY,
} from "@/lib/assessment";
export default function Assessment() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [answers, setAnswers] = useState(() => {
    const draft = readDraft(draftStorage());
    const goal = params.get("goal");
    return questions
      .find((q) => q.key === "goal")
      .options.some(([value]) => value === goal)
      ? { ...draft, goal }
      : draft;
  });
  const [step, setStep] = useState(0);
  const [storageOK, setStorageOK] = useState(true);
  const title = useRef(null);
  useEffect(() => {
    title.current?.focus();
  }, [step]);
  useEffect(() => {
    trackFunnel("assessment_started", 0);
  }, []);
  const question = questions[step];
  const select = (value) => {
    const next = { ...answers, [question.key]: value };
    setAnswers(next);
    setStorageOK(saveDraft(draftStorage(), next));
  };
  const next = () => {
    trackFunnel("assessment_step_completed", step + 1);
    if (step === questions.length - 1) {
      trackFunnel("assessment_completed", questions.length);
      navigate("/assessment/result", { state: { answers } });
    } else setStep(step + 1);
  };
  const clear = () => {
    try {
      draftStorage().removeItem(STORAGE_KEY);
    } catch {
      /* Storage may be blocked. */
    }
    setAnswers({});
    setStep(0);
  };
  return (
    <MarketingFrame>
      <main id="main" className="exit-assessment exit-container">
        <Link to="/" className="exit-textlink">
          <ArrowLeft size={16} /> Back to EXITios
        </Link>
        <div className="exit-form">
          <p className="exit-eyebrow">
            YOUR FIRST PRIORITY · {step + 1} OF {questions.length}
          </p>
          <progress
            max={questions.length}
            value={step + 1}
            aria-label="Assessment progress"
          />
          <h1 ref={title} tabIndex={-1}>
            {question.title}
          </h1>
          <p>{question.help}</p>
          <fieldset>
            <legend className="sr-only">{question.title}</legend>
            {question.options.map(([value, label]) => (
              <label
                className={answers[question.key] === value ? "selected" : ""}
                key={value}
              >
                <input
                  type="radio"
                  name={question.key}
                  value={value}
                  checked={answers[question.key] === value}
                  onChange={() => select(value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </fieldset>
          <div className="exit-actions">
            <button
              className="exit-secondary"
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
            <button
              className="exit-button"
              disabled={!answers[question.key]}
              onClick={next}
            >
              {step === questions.length - 1
                ? "See my first priority"
                : "Continue"}
              <ArrowRight size={18} />
            </button>
          </div>
          <p className="exit-note">
            No account or upload required. These answers guide a preliminary
            recommendation, not a verified financial finding.
          </p>
          <p className="exit-note" role="status">
            {storageOK
              ? "Draft kept in this browser tab for up to 24 hours."
              : "Browser storage is unavailable. Your answers will not survive a refresh."}
          </p>
          <button className="exit-textlink" onClick={clear}>
            Clear my answers
          </button>
        </div>
      </main>
    </MarketingFrame>
  );
}
