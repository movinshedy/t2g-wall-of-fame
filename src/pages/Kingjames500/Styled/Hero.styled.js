import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 3rem 0;
`;

export const HeroCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 61.785em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroTitle = styled.div`
  padding: 2rem;
  margin: 2rem;
  width: 50%;
  text-align: center;

  @media screen and (max-width: 37.5em) {
    padding: 1rem;
    margin: 1rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 800;
    margin-top: 3rem;
    text-transform: capitalize;
    line-height: 1.2;

    @media screen and (max-width: 37.5em) {
      font-size: ${({ theme }) => theme.fontSizes.normal};
      font-weight: 700;
      margin-top: 1.5rem;
      line-height: 1;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    margin-top: 1rem;
    line-height: 1.5;

    @media screen and (max-width: 37.5em) {
      /* font-size: ${({ theme }) => theme.fontSizes.small}; */
      margin-top: 0.6rem;
      line-height: 1;
    }
  }

  button {
    padding: 1rem 2rem;
    margin-top: 5rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSizes.normal};

    &:hover {
      background: ${({ theme }) => theme.colors.black};
    }

    @media screen and (max-width: 37.5em) {
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 61.785em) {
    width: 100%;
    order: 2;
    text-align: center;
  }
`;

export const Heroimg = styled.img`
  width: 50%;
  padding: 2rem;
  margin: 2rem auto;

  @media screen and (max-width: 61.785em) {
    width: 100%;
    order: 1;
  }
`;
