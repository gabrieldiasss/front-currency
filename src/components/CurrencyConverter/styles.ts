import styled from "styled-components";

export const ConverterContainer = styled.div``;

export const ConvertCurrencyForm = styled.div``;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-white"]};
  display: flex;
  align-items: center;

  padding: 0 1rem;
  border-radius: 8px;

  height: 3.5rem;

  gap: 1rem;

  &:hover {
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors["base-label"]};

  }
`;
