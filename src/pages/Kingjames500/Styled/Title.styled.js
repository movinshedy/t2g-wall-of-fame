import styled from "styled-components";

export const SectionTitle = styled.div`
  text-align: center;
  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.8rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    font-weight: 600;
  }
  h2 {
    margin-top: 1rem;
    letter-spacing: 2px;
    font-size: 3rem;
    text-shadow: 0 0 2rem currentColor;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }
`;
