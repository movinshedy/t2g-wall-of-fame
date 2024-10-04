import { SectionTitle } from "../../Styled/Title.styled.js";

function Title({ mainTitle, subTitle }) {
  return (
    <SectionTitle>
      <p>{subTitle}</p>
      <h2>{mainTitle}</h2>
    </SectionTitle>
  );
}

export default Title;