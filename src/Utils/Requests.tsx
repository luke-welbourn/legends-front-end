import { LegendType } from "../Data/Types/Types";

export const getLegendRequest = (legend: LegendType) => {
  const { id, name, lane, role, release_date } = legend;
  return JSON.stringify({ id, name, lane, role, release_date });
};
