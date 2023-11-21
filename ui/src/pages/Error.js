import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page was not found.</p>
      <Link to="/">Home Page</Link>
    </div>
  );
};
export default Error;
