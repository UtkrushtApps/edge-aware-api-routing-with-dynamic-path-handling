import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Candidate: Implement logging, show fallback UI, etc.
  }

  render() {
    if (this.state.hasError) {
      return <div>An error occurred while loading the widget. Please try again.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
