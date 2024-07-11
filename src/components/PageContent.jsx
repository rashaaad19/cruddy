import { TextContainer } from "./Styled-Components/PageContent";

const PageContent = ({ title, message, pageType }) => {
  return (
    <TextContainer>
      <h1>{title}</h1>
      <p>{message}</p>
      {pageType === "error" && <img src="/public/Error.png" />}
    </TextContainer>
  );
};

export default PageContent;
