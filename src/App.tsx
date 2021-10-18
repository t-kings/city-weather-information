import { ErrorBoundary } from "./containers";
import { PageRoutes } from "./routes";

function App() {
  return (
    <ErrorBoundary>
      <PageRoutes />
    </ErrorBoundary>
  );
}

export default App;
