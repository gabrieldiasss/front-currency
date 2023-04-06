import styled from "styled-components";

interface LabelProps {
  size?: "s" | "m" | "xs";
}

export const Label = styled.label<LabelProps>`
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: ${({ theme, size }) => theme.textSize[`text-${size ?? "m"}`]};
  font-weight: 500;
`;
