import styled from "styled-components";

export const StyledHero = styled.section`
  margin-top: 5rem;
`;

export const HeroTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;

  @media screen and (max-width: 56.25em) {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const HeroTextBox = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    width: 50%;
    line-height: 1.5;

    @media screen and (max-width: 56.25em) {
      width: 100%;
      margin-bottom: 2rem;
      text-align: center;
    }
  }

  a {
    text-decoration: none;
    display: block;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 2rem 3rem;
    border-radius: 10px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: 56.25em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledHeroImg = styled.img`
  width: 90%;
  display: block;
  margin: 2rem auto;
  height: 50rem;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 56.25em) {
    width: 100%;
  }
`;
