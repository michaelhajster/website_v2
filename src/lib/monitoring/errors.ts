type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

interface ErrorLog {
  timestamp: Date;
  message: string;
  severity: ErrorSeverity;
  path: string;
  userInput?: string;
  stack?: string;
  metadata?: Record<string, string | number | boolean | null | undefined>;
}

class ErrorMonitor {
  private static instance: ErrorMonitor;
  private logs: ErrorLog[] = [];
  private readonly MAX_LOGS = 1000;

  private constructor() {}

  static getInstance(): ErrorMonitor {
    if (!ErrorMonitor.instance) {
      ErrorMonitor.instance = new ErrorMonitor();
    }
    return ErrorMonitor.instance;
  }

  logError(
    message: string,
    severity: ErrorSeverity,
    path: string,
    metadata?: {
      userInput?: string;
      error?: Error;
      additionalData?: Record<string, string | number | boolean | null | undefined>;
    }
  ) {
    const errorLog: ErrorLog = {
      timestamp: new Date(),
      message,
      severity,
      path,
      userInput: metadata?.userInput,
      stack: metadata?.error?.stack,
      metadata: metadata?.additionalData,
    };

    this.logs.unshift(errorLog);

    // Keep logs under limit
    if (this.logs.length > this.MAX_LOGS) {
      this.logs = this.logs.slice(0, this.MAX_LOGS);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', errorLog);
    }

    // Here you could add external error reporting service integration
    this.reportToExternalService(errorLog);
  }

  private reportToExternalService(errorLog: ErrorLog): void {
    // TODO: Implement external error reporting service
    if (process.env.NODE_ENV === 'development') {
      console.log('Would send to error service:', errorLog);
    }
  }

  getRecentErrors(count: number = 10): ErrorLog[] {
    return this.logs.slice(0, count);
  }

  getErrorsByPath(path: string): ErrorLog[] {
    return this.logs.filter(log => log.path === path);
  }

  getErrorsBySeverity(severity: ErrorSeverity): ErrorLog[] {
    return this.logs.filter(log => log.severity === severity);
  }

  clearLogs() {
    this.logs = [];
  }
}

export const errorMonitor = ErrorMonitor.getInstance();
