import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./containers";
import { PageRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <PageRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
