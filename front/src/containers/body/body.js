import { Header } from "../header/header";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

export function Body(){

  return(
    <>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
      <h2>Home</h2>
    </>    
  );
}
