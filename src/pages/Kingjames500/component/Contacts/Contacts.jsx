import Title from "../Title/Title";

import {
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
} from "../../Styled/Contact.styled";

function ContactDetails() {
  return (
    <ContactForm>
      <FormGroup>
        <FormLabel htmlFor="first name">first name</FormLabel>
        <FormInput type="text" placeholder="Enter your fullname" />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="last name">last name</FormLabel>
        <FormInput type="text" placeholder="Enter your last name" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="surname">surname</FormLabel>
        <FormInput type="text" placeholder="Enter your surname" />
      </FormGroup>

      <FormGroup className="form-group">
        <FormLabel htmlFor="email"> your email</FormLabel>
        <FormInput type="email" placeholder="Enter your email" />
      </FormGroup>
      <FormButton>submit</FormButton>
    </ContactForm>
  );
}

function Contacts() {
  return (
    <div>
      <Title
        subTitle="If you have a project in mind, or just want to say hi, feel free to get in touch."
        title="Contact Me"
      />
      <div>
        <ContactDetails />
      </div>
    </div>
  );
}

export default Contacts;
