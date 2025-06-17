import { CustomError } from 'ts-custom-error';

export class ReadyProjectTsError extends CustomError {
  cause(error: Error): ReadyProjectTsError {
    if (this.stack && error.stack) {
      this.stack += `\nCaused by: ${error.stack}`;
    }
    return this;
  }
}
