import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
const ErrorPage = () => {
  const error = useRouteError();

  let title = "Something went wrong!";
  let message = "An Error Occured :(";

  console.log(error);

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Page not found!!";
    message = "Could not find your page :(";
  }

  return <PageContent title={title} message={message} pageType="error"/>;
};

export default ErrorPage;
