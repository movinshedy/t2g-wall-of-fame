import styled from "styled-components";

export const TechnologiesSection = styled.section`
margin: 5rem;
`

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 3rem;
`;

export const TechnologiesCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    text-transform: capitalize;
    margin: 1rem 0;
    font-weight: 700;
    font-size: 3rem;
  }

  p {
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    font-size: 1.9rem;
    margin: 1rem 0;
    font-weight: 600;
    line-height: 1.5;
    padding: 0 1rem;
  }
`;

export const ImgCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    --size: 11rem;
    width: var(--size);
    height: var(--size);
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
  }
`;
