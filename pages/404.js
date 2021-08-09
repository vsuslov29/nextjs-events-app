import Button from "../components/ui/button";
import ErrorAlert from "../components/ui/error-alert";

function NotFoundPage() {
  return (
    <div className="center">
      <ErrorAlert>
        <h1>Oooops...page is not found!</h1>
      </ErrorAlert>
      <Button link="/">Go back to the main page!</Button>
    </div>
  );
}

export default NotFoundPage;
