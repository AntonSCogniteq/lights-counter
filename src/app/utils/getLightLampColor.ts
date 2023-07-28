import { Colors } from "../models";

export function getLightLampColor(color: Colors) {
  if (color === Colors.Red) return '#ff2727';
  if (color === Colors.Orange) return '#f3a712';
  if (color === Colors.Green) return '#038f03';
  return '#808080';
}
