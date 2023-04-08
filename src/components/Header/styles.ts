import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  gap: 2rem;

  div {
    p {
      margin-top: 0.25rem;
    }
  }
`;

export const HeaderDate = styled.div`

  gap: 1rem;
  display: flex;
  align-items: center;

  time {
    font-weight: 500;
  }
`;
