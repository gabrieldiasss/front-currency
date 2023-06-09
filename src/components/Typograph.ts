import styled, { css } from "styled-components";

interface LabelProps {
  size?: "s" | "m" | "xs"
  color?: "100" | "300" | "500"
}

interface RegularTextProps {
  size?: "s" | "m" | 'xs';
  color?: "100" | "300" | "500";
  weight?: number;
  hasError?: boolean
}

export const Label = styled.label<LabelProps>`
  color: ${({ theme, color }) => theme.colors[`base-text-${color ?? "500"}`]};
  font-size: ${({ theme, size }) => theme.textSize[`text-${size ?? "m"}`]};
  font-weight: 500;
`;

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-text-${color ?? "500"}`]};
  font-size: ${({ theme, size }) => theme.textSize[`text-${size ?? "m"}`]};
  font-weight: ${({ weight }) => weight};
  ${(props ) => props.hasError === true && css`color: ${props.theme.colors['base-error']}`};
`
