import { themes } from "@/engine/colors";
import { Level } from "../types";

const level: Level = {
  theme: themes.blue,
  data: [
    [
      { type: "null", values: [0, 0, 0, 0] },
      { type: "2-point", values: [1, 1, 0, 0] },
      { type: "2-point", values: [1, 1, 0, 0] },
      { type: "1-point", values: [1, 0, 0, 0] },
    ],
    [
      { type: "2-point", values: [1, 1, 0, 0] },
      { type: "4-point", values: [1, 1, 1, 1] },
      { type: "4-point", values: [1, 1, 1, 1] },
      { type: "2-point", values: [1, 1, 0, 0] },
    ],
    [
      { type: "1-point", values: [1, 0, 0, 0] },
      { type: "line", values: [0, 1, 0, 1] },
      { type: "line", values: [0, 1, 0, 1] },
      { type: "null", values: [0, 0, 0, 0] },
    ],
    [
      { type: "null", values: [0, 0, 0, 0] },
      { type: "1-point", values: [1, 0, 0, 0] },
      { type: "1-point", values: [1, 0, 0, 0] },
      { type: "null", values: [0, 0, 0, 0] },
    ],
  ],
};

export default level;
