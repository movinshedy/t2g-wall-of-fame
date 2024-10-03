import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 5rem 1rem;
  background-color: ${({ theme }) => theme.colors.black};

  p {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`;
export default StyledFooter;
