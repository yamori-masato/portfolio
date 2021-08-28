import p5 from "p5";
import { ComponentType } from "react";

export type P5WrapperComponent = ComponentType<{ sketch: (p: p5) => void }>;
