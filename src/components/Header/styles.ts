import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  gap: 2rem;
`;

export const HeaderInfos = styled.div`
    p {
        margin-top: 0.25rem;
        color: ${({ theme }) => theme.colors["base-hover"]}
    }
`;

export const HeaderDate = styled.div`
  time {
    color: ${({ theme }) => theme.colors["base-time"]};
    font-weight: 500;
    
  }
`;
