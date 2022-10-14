export interface AlertPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
