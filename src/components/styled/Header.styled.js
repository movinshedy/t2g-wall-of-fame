import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`;

export const ContactItemsWrapper = styled.div`
  display: flex;
  gap: 3.5rem;

  @media screen and (max-width: 59.375em) {
    gap: 2rem;
  }

  @media screen and (max-width: 40.625em) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledContactItem = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  svg {
    font-size: 2rem;
  }
`;
