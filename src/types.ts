import { ACTIONS } from '@/lib/utils';

export type FormPayload = {
  colors: Color[];
  fontSize: FontSize[];
  borderRadius: BorderRadius[];
  boxShadow: BoxShadow[];
};

export type Color = {
  name: string;
  hex_code: string;
};

export type FontSize = {
  name: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: string;
};

export type BorderRadius = {
  name: string;
  size: string;
};

export type BoxShadow = {
  name: string;
  size: string;
};

export type Action = (typeof ACTIONS)[keyof typeof ACTIONS];
