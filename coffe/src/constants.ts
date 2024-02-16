export type TSize = "TALL" | "GRANDE" | "VENTI";

export const enum ESize {
  "TALL",
  "GRANDE",
  "VENTI",
}
export const sizeCosts: Record<TSize, number> = {
  TALL: 0.1,
  GRANDE: 0.15,
  VENTI: 0.2,
};
