enum LOG_LEVEL {
  TRACE = 1,
  DEBUG = 2,
  INFO = 3,
  WARN = 4,
  ERROR = 5,
  FATAL = 6,
}

class Logger {
  logLevel: string;
  logFormatter: (level: string, msg: string) => {};
  constructor(log: string = 'info') {
    this.logLevel = log;
    this.logFormatter = (level: string, message: string) => {
      return `${message}`;
    };
  }

  log(level: string, message: string) {
    const type = level.toUpperCase();
    if (
      LOG_LEVEL[type as keyof typeof LOG_LEVEL] >=
      LOG_LEVEL[this.logLevel.toUpperCase() as keyof typeof LOG_LEVEL]
    ) {
      console.log(this.logFormatter(level, message));
    }
  }

  setLogLevel(level: string) {
    this.logLevel = level;
  }

  setLogFormatter(fun: any) {
    this.logFormatter = fun;
  }
}

export default Logger;
