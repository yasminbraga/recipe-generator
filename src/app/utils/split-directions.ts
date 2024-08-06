export function splitDirections(directions: string) {
  return directions.split("\r\n").filter((item) => item.trim() != "");
}
