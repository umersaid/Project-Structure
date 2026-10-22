export function formatDate(input: string | Date) {
  const date = input instanceof Date ? input : new Date(input);
  return date.toISOString().slice(0, 10);
}
