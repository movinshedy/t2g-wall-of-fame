import styled from "styled-components";

export const ContactForm = styled.form`
  width: 40%;
  margin: 4rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  gap: 1rem;
`;
export const FormLabel = styled.label`
  text-transform: capitalize;
  font-weight: 700;
`;

export const FormInput = styled.input`
  padding: 1rem;
  font-size: inherit;
  font-family: inherit;
  font-weight: 500;

  &::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
  }
`;

export const FormButton = styled.button`
  border: none;
  display: block;
  outline: none;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 2rem;
  font-weight: 700;
  font-size: inherit;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 2px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
