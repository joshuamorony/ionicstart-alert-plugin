export interface AlertPlugin {
  present(options: { message: string }): void;
}
