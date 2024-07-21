export function repeatStringNumTimes(string: string, times: number): string {
  if (times < 0) return "";
  if (times === 1) return string;
  else return string + repeatStringNumTimes(string, times - 1);
}
