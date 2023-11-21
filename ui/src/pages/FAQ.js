import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <>
      <h1>FAQ</h1>
      <Link to="Checkout_Hold_Rules">
        Checkout/Hold Rules (style as button)
      </Link>
      <br></br>
      <a href="#">View your account including Fees/Activity/etc</a>
      <br></br>
      <a href="#">Library History</a>
    </>
  );
};

export default FAQ;
