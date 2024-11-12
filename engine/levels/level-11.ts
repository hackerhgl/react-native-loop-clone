import { themes } from '@/engine/config/colors';
import { LevelData } from '../types';

const level: LevelData = {
  theme: themes.pink,
  data: [
    [
      { type: 'null', values: [0, 0, 0, 0] },
      { type: '2-point', values: [1, 1, 0, 0] },
      { type: '2-point', values: [1, 1, 0, 0] },
      { type: 'null', values: [0, 0, 0, 0] },
    ],
    [
      { type: '1-point', values: [1, 0, 0, 0] },
      { type: '3-point', values: [1, 1, 1, 0] },
      { type: '3-point', values: [1, 1, 1, 0] },
      { type: '1-point', values: [1, 0, 0, 0] },
    ],
    [
      { type: '2-point', values: [1, 1, 0, 0] },
      { type: '3-point', values: [1, 1, 1, 0] },
      { type: '3-point', values: [1, 1, 1, 0] },
      { type: '2-point', values: [1, 1, 0, 0] },
    ],
    [
      { type: '2-point', values: [1, 1, 0, 0] },
      { type: '3-point', values: [1, 1, 1, 0] },
      { type: '3-point', values: [1, 1, 1, 0] },
      { type: '2-point', values: [1, 1, 0, 0] },
    ],
    [
      { type: '2-point', values: [1, 1, 0, 0] },
      { type: 'line', values: [1, 0, 1, 0] },
      { type: 'line', values: [1, 0, 1, 0] },
      { type: '2-point', values: [1, 1, 0, 0] },
    ],
  ],
};

export default level;
