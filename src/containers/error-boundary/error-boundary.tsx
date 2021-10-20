/**
 * Error Boundary to handle uncaught errors
 */
import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";
import Styles from "./style.module.css";
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className={Styles.error}>
          <h1>Something went wrong.</h1>
          <Link to="/">Go Home</Link>
        </section>
      );
    }

    return this.props.children;
  }
}
