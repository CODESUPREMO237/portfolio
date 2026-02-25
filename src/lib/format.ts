export function toReadableDate(input: string): string {
  return new Date(`${input}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
