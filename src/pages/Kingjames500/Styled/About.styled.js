import styled from "styled-components";

export const AboutMeContainer = styled.div`
  margin-top: 4rem;
`;

export const AboutMeCard = styled.div`
  margin: 2rem;
  /* border: 2px solid blue; */
  display: flex;
  justify-content: center;
  text-align: center;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 56.25em) {
    flex-direction: column;
    align-items: center;
    margin: 2px;
  }

  img {
    /* border: 2px solid red; */
    width: 45%;
    padding: 2rem;
    margin: 1rem;
    object-fit: cover;

    @media screen and (max-width: 56.25em) {
      width: 100%;
    }
  }
  p {
    width: 50%;
    padding: 2rem;
    /* border: 3px solid green; */
    font-size: ${({ theme }) => theme.fontSizes.normal};
    text-align: justify;
    line-height: 1.6;
    font-weight: 600;
    padding: 2rem;
    margin: 2rem;

    @media screen and (max-width: 56.25em) {
      width: 100%;
      padding: 1.2rem;
      line-height: 1.2;
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
`;
