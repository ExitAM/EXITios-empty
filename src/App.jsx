import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider, useAuth } from "@/lib/AuthContext";
import UserNotRegisteredError from "@/components/UserNotRegisteredError";
import ScrollToTop from "./components/ScrollToTop";
// Add page imports here
import Home from "@/pages/Home";
import Assessment from "@/pages/Assessment";
import AssessmentResult from "@/pages/AssessmentResult";
import Example from "@/pages/Example";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import ProtectedRoute from "@/components/ProtectedRoute";
import OAuthConsent from "@/pages/OAuthConsent";
import Connect from "@/pages/Connect";
import Shell from "@/components/app/Shell";
import CommandCenter from "@/pages/app/CommandCenter";
import DecisionList from "@/pages/app/DecisionList";
import DecisionDetail from "@/pages/app/DecisionDetail";
import WorkspacePage from "@/pages/app/WorkspacePage";

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } =
    useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === "user_not_registered") {
      return <UserNotRegisteredError />;
    } else if (authError.type === "auth_required") {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/oauth/consent" element={<OAuthConsent />} />

      <Route
        element={
          <ProtectedRoute
            unauthenticatedElement={<Navigate to="/login" replace />}
          />
        }
      >
        <Route element={<Shell />}>
          <Route path="/connect" element={<Connect />} />
          <Route path="/app" element={<CommandCenter />} />
          <Route path="/app/decisions" element={<DecisionList />} />
          <Route path="/app/decisions/:id" element={<DecisionDetail />} />
          <Route path="/app/growth" element={<WorkspacePage kind="growth" />} />
          <Route
            path="/app/sell-side"
            element={<WorkspacePage kind="sell-side" />}
          />
          <Route
            path="/app/acquisition"
            element={<WorkspacePage kind="acquisition" />}
          />
          <Route
            path="/app/advisor"
            element={<WorkspacePage kind="advisor" />}
          />
          <Route
            path="/app/integration"
            element={<WorkspacePage kind="integration" />}
          />
          <Route
            path="/app/evidence"
            element={<WorkspacePage kind="evidence" />}
          />
          <Route
            path="/app/data-sources"
            element={<WorkspacePage kind="data-sources" />}
          />
          <Route
            path="/app/reports"
            element={<WorkspacePage kind="reports" />}
          />
          <Route
            path="/app/reviews"
            element={<WorkspacePage kind="reviews" />}
          />
          <Route path="/app/team" element={<WorkspacePage kind="team" />} />
          <Route
            path="/app/billing"
            element={<WorkspacePage kind="billing" />}
          />
          <Route
            path="/app/settings"
            element={<WorkspacePage kind="settings" />}
          />
          <Route path="/app/help" element={<WorkspacePage kind="help" />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/assessment/result" element={<AssessmentResult />} />
            <Route path="/example" element={<Example />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<AuthenticatedApp />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
