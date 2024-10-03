import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import logoImg from "../../assets/logo.png";
import {
  StyledHeader,
  ContactItemsWrapper,
  StyledContactItem,
} from "../styled/Header.styled";

const ContactItem = ({ icon, label, url }) => {
  return (
    <StyledContactItem to={url}>
      {icon}
      <p>{label}</p>
    </StyledContactItem>
  );
};

function Header() {
  return (
    <StyledHeader>
      <img src={logoImg} alt="logo" />

      <ContactItemsWrapper>
        <ContactItem
          icon={<FaFacebookSquare />}
          label="https://teach2give.com"
          url="https://teach2give.com"
        />
        <ContactItem
          icon={<FaFacebookSquare />}
          label="https://teach2give.com"
          url="https://teach2give.com"
        />
        <ContactItem
          icon={<FaFacebookSquare />}
          label="https://teach2give.com"
          url="https://teach2give.com"
        />
      </ContactItemsWrapper>
    </StyledHeader>
  );
}

export default Header;
