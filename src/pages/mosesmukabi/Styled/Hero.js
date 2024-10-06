import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin: 1rem auto;
  padding: 1rem;
`;

export const StyledText = styled.div`
  text-align: center;

  h2 {
    margin-top: 90px;
    line-height: 1.5;
  }

  p {
    line-height: 1.8;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 200px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
`;
