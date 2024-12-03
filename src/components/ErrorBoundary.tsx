'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="card p-8 text-center">
          <h3 className="text-lg font-medium mb-2">Etwas ist schiefgelaufen</h3>
          <p className="text-foreground/70">
            Bitte laden Sie die Seite neu oder kontaktieren Sie uns direkt.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
} 