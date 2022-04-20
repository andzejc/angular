export interface Car {
  brand?: string;
  model?: string;
  maxSpeed?: number;
  options?: string[];
  colors: Colors;
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}

