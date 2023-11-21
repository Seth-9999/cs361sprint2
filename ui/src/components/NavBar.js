import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navigation">
      {/* Home  */}
      <NavLink to="/" className={"test"}>
        {" "}
        Home{" "}
      </NavLink>

      {/* Checkout/Hold Rules  */}
      <NavLink to="/Checkout_Hold_Rules" className={"test"}>
        {" "}
        CheckOut/Hold Rules{" "}
      </NavLink>

      {/* LogIn Screen  */}
      <NavLink to="/LogIn" className={"test"}>
        {" "}
        LogIn{" "}
      </NavLink>

      {/* Get Library Card Screen  */}
      <NavLink to="/GetCard" className={"test"}>
        {" "}
        Get Card{" "}
      </NavLink>

      {/* Feedback  */}
      <NavLink to="/Feedback" className={"test"}>
        {" "}
        Feedback{" "}
      </NavLink>

      {/* FAQ  */}
      <NavLink to="/FAQ" className={"test"}>
        {" "}
        FAQ{" "}
      </NavLink>

      {/* Add Comment  */}
      <NavLink to="/Create_Comment" className={"test"}>
        {" "}
        Add Review{" "}
      </NavLink>

      {/* Edit Review  */}
      <NavLink to="/Edit_Comment" className={"test"}>
        {" "}
        Edit Reviews{" "}
      </NavLink>

      {/* Delete Review  */}
      <NavLink to="/Delete_Comment" className={"test"}>
        {" "}
        Delete Review{" "}
      </NavLink>

      {/* See Reviews  */}
      <NavLink to="/Reviews" className={"test"}>
        {" "}
        View Reviews{" "}
      </NavLink>
    </nav>
  );
};

export default NavBar;
