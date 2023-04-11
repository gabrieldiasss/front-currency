import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors["base-black"]};
  color: ${({ theme }) => theme.colors["base-white"]};
  display: flex;
  align-items: center;

  padding: 0 1rem;
  border-radius: 8px;

  margin-top: 0.825rem;

  height: 3.5rem;

  gap: 1rem;

  &:hover {
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }
`;
