declare module 'mixbox' {
    export function lerp(
      color1: [number, number, number], 
      color2: [number, number, number], 
      t: number
    ): [number, number, number];
  }