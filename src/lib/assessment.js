export const VERSION = "priority-check-v1";
export const STORAGE_KEY = "exitios.priority-check.v1";
export const questions = [
  {
    key: "industry",
    title: "What kind of business do you run?",
    help: "We start with your operating model. The first focused playbook covers recurring home services.",
    options: [
      ["home", "Home or field services"],
      ["professional", "Professional or managed services"],
      ["manufacturing", "Manufacturing"],
      ["healthcare", "Healthcare or veterinary"],
      ["retail", "Retail or consumer products"],
      ["other", "Another business"],
    ],
  },
  {
    key: "goal",
    title: "What needs to change first?",
    help: "Choose the decision that is closest to your desk today.",
    options: [
      ["margin", "Keep more of the revenue we earn"],
      ["retention", "Keep more customers"],
      ["capacity", "Grow without overwhelming the team"],
      ["sale", "Prepare for a future sale"],
      ["acquire", "Evaluate an acquisition"],
    ],
  },
  {
    key: "margin",
    title: "Can you see which work is profitable?",
    help: "Think about your service lines, products, locations, or projects.",
    options: [
      ["yes", "Yes, using revenue and the associated costs"],
      ["partial", "Only at the total-business level"],
      ["unknown", "I don’t know yet"],
    ],
  },
  {
    key: "retention",
    title: "Do you know how much repeat business you lose?",
    help: "Use the same customer group and reporting period when comparing retention.",
    options: [
      ["yes", "Yes, and we track why customers leave"],
      ["partial", "We know some cancellations, but not the full picture"],
      ["unknown", "We don’t measure this"],
      ["na", "Repeat business is not central to our model"],
    ],
  },
  {
    key: "capacity",
    title: "What happens when demand increases?",
    help: "This helps distinguish a sales opportunity from a delivery constraint.",
    options: [
      ["spare", "We have capacity to handle more work"],
      ["tight", "Our team is already stretched"],
      ["unknown", "We don’t have a reliable capacity measure"],
    ],
  },
  {
    key: "dependence",
    title: "Could the business run without you for two weeks?",
    help: "Consider pricing, customer relationships, staffing, and approvals.",
    options: [
      ["yes", "Yes, the team has clear ownership"],
      ["partial", "Mostly, with a few decisions waiting for me"],
      ["no", "No, daily operations depend on me"],
    ],
  },
];
export function sanitizeAnswers(value = {}) {
  return Object.fromEntries(
    questions
      .filter((q) => q.options.some(([v]) => v === value[q.key]))
      .map((q) => [q.key, value[q.key]]),
  );
}
export function isComplete(answers) {
  return questions.every((q) => q.options.some(([v]) => v === answers[q.key]));
}
export function readDraft(storage) {
  try {
    const draft = JSON.parse(storage.getItem(STORAGE_KEY));
    if (
      !draft ||
      draft.version !== VERSION ||
      !Number.isFinite(draft.savedAt) ||
      Date.now() - draft.savedAt > 86400000
    )
      return {};
    return sanitizeAnswers(draft.answers);
  } catch {
    return {};
  }
}
export function saveDraft(storage, answers) {
  try {
    storage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: VERSION,
        savedAt: Date.now(),
        answers: sanitizeAnswers(answers),
      }),
    );
    return true;
  } catch {
    return false;
  }
}
export function recommend(answers) {
  if (!isComplete(answers)) return null;
  const themes = {
    margin: {
      title: "Find the work that earns its keep.",
      reason:
        "Your answers point toward understanding profitability before committing more resources.",
      action:
        "Choose one service line, product, or project. Compare its revenue with the direct labor and delivery costs for the same period.",
      evidence: "Revenue breakdown, direct costs, and reporting period.",
      measure: "Contribution margin for the selected work.",
    },
    retention: {
      title: "Understand where repeat revenue is leaving.",
      reason:
        "You want stronger retention or do not yet have a complete view of customer losses.",
      action:
        "Choose a starting customer cohort. Identify who remained, who left, and the documented reasons for leaving.",
      evidence:
        "Starting customer list, cancellation dates, and consistent observation period.",
      measure: "Customer retention within the same starting cohort.",
    },
    capacity: {
      title: "Check delivery capacity before adding demand.",
      reason:
        "You reported a stretched team. More sales could increase delivery pressure.",
      action:
        "Compare available productive hours with committed work for the next four weeks. Identify the bottleneck before adding acquisition spend.",
      evidence:
        "Scheduled work, available staff hours, and typical delivery time.",
      measure: "Committed hours divided by available productive hours.",
    },
    readiness: {
      title: "Make the business less dependent on you.",
      reason:
        "A future transition is easier to evaluate when responsibilities and financial information are documented.",
      action:
        "List the five decisions that depend on the owner. Assign a backup and document the information each person needs.",
      evidence:
        "Responsibility map, current financial reports, and key contract list.",
      measure:
        "Critical decisions with a documented process and accountable backup.",
    },
    acquire: {
      title: "Define the acquisition case before the price.",
      reason:
        "You selected an acquisition objective. The first task is to define what must be true for a target to fit.",
      action:
        "Write the target criteria, funding assumptions, operating rationale, and three conditions that would stop the deal.",
      evidence:
        "Target financials, customer concentration, debt, and investment criteria.",
      measure: "Investment criteria supported by target-specific evidence.",
    },
  };
  const theme =
    answers.goal === "acquire"
      ? "acquire"
      : answers.goal === "sale"
        ? "readiness"
        : answers.capacity === "tight"
          ? "capacity"
          : answers.goal === "retention" && answers.retention !== "na"
            ? "retention"
            : answers.goal === "capacity"
              ? "capacity"
              : "margin";
  const result = { ...themes[theme], theme, version: VERSION };
  if (theme === "capacity" && answers.capacity !== "tight")
    result.reason =
      "You selected capacity as your objective. Establish the baseline before deciding whether to hire or add demand.";
  if (theme === "margin" && answers.goal === "retention")
    result.reason =
      "You indicated repeat business is not central to your model. Start with the economics of the work you sell.";
  return result;
}
// Measurement hook only. No answers, financial data, or identity are emitted.
export function trackFunnel(name, step) {
  window.dispatchEvent(
    new CustomEvent("exitios:funnel", {
      detail: { name, step, version: VERSION },
    }),
  );
}

export function draftStorage() {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}
