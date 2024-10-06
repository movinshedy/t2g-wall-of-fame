import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import {
  ContactsContainer,
  ContactCard,
  Title,
  ContactInfo,
  SocialIcons,
} from "../Styled/Contacts";

function Contacts() {
  const handleTwitterLink = () => {
    window.open("https://x.com/mukabi_N", "_blank", "noopener,noreferrer");
  };

  return (
    <ContactsContainer>
      <ContactCard>
        <Title>Contact Me</Title>
        <div>
          <ContactInfo>mosesmukabi9@gmail.com</ContactInfo>
          <ContactInfo>Tell: 0796719615</ContactInfo>
          <SocialIcons>
            <Link onClick={handleTwitterLink}>
              <FaTwitter />
            </Link>
          </SocialIcons>
        </div>
      </ContactCard>
    </ContactsContainer>
  );
}

export default Contacts;
