import { themes } from "@/engine/colors";
import { Level } from "../types";

const level: Level = {
  theme: themes.pink,
  data: [
    [
      { type: "1-point", values: [1, 0, 0, 0] },
      { type: "3-point", values: [1, 1, 1, 0] },
      { type: "1-point", values: [1, 0, 0, 0] },
    ],
    [
      { type: "1-point", values: [1, 0, 0, 0] },
      { type: "3-point", values: [1, 1, 1, 0] },
      { type: "1-point", values: [1, 0, 0, 0] },
    ],
    [
      { type: "1-point", values: [1, 0, 0, 0] },
      { type: "line", values: [1, 0, 1, 0] },
      { type: "1-point", values: [1, 0, 0, 0] },
    ],
    [
      { type: "1-point", values: [1, 0, 0, 0] },
      { type: "line", values: [1, 0, 1, 0] },
      { type: "1-point", values: [1, 0, 0, 0] },
    ],
    [
      { type: "1-point", values: [1, 0, 0, 0] },
      { type: "3-point", values: [1, 1, 1, 0] },
      { type: "1-point", values: [1, 0, 0, 0] },
    ],
    [
      { type: "1-point", values: [1, 0, 0, 0] },
      { type: "3-point", values: [1, 1, 1, 0] },
      { type: "1-point", values: [1, 0, 0, 0] },
    ],
  ],
};

export default level;
