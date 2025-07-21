export function errorHandler(
  err: unknown,
  setError: (message: string) => void
) {
  if (err && typeof err === "object" && "message" in err) {
    setError((err as { message: string }).message);
  } else {
    setError("An error occurred");
  }
}
