import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components";
import { queryStrings as qs } from "constants/breakpoints";

export const sp = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media ${qs.sp} {
    ${css(first, ...interpolations)}
  }
`;

export const tab = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media ${qs.tab} {
    ${css(first, ...interpolations)}
  }
`;

export const pc = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media ${qs.pc} {
    ${css(first, ...interpolations)}
  }
`;
