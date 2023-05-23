import Logger from "../src/index";
describe("Logger", () => {
  console.log = jest.fn();
  const logger = new Logger();
  it("should call log", () => {
    logger.log("info", "Hello logger");
    expect(console.log).toHaveBeenCalledWith("Hello logger");
  });

  it("should call setloglevel and setLogFormatter", () => {
    logger.setLogLevel("error");
    logger.setLogFormatter(
      (level: string, msg: string) => `[${level.toUpperCase()}] ${msg}`
    );
    logger.log("info", "This is an info message");
    logger.log("debug", "This is a debug message");
    logger.log("error", "This is an error message");
    expect(console.log).toHaveBeenCalledWith(
      "[ERROR] This is an error message"
    );
  });

  it("should call setloglevel and setLogFormatter", () => {
    logger.setLogLevel("info");
    logger.setLogFormatter(
      (level: string, msg: string) => `[${level.toUpperCase()}] ${msg}`
    );
    logger.log("info", "This is an info message");
    logger.log("debug", "This is a debug message");
    logger.log("error", "This is an error message");
    expect(console.log).toHaveBeenCalledWith("[INFO] This is an info message");
    expect(console.log).toHaveBeenCalledWith(
      "[ERROR] This is an error message"
    );
  });
});
