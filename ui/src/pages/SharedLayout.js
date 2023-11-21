import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import EarthImage from "../img/Earth.png";
import { useNavigate } from "react-router-dom";
import "./SharedLayout.css";

const SharedLayout = () => {
  //   function handleLogoClick() {
  //     useEffect(() => {
  //       const navigate = useNavigate();
  //       navigate("/");
  //     });
  //   }

  const handleLogoClick = () => {
    // alert("Update navigate function to go to home page rather than error page");
    navigate("/");
    {
      /* change navigate("/blah") to navigate(/) to go to home page */
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="subHeading">
        <img
          src={EarthImage}
          alt="Library's Logo aka image of an Earth"
          onClick={() => handleLogoClick()}
          width="52.5"
          height="51.25"
        ></img>
        <p>Hours: 8am - 8pm Every Day</p>

        <button>Placeholder (Not Implemented)</button>
      </div>
      <Outlet />
      <footer>
        <p>Copyright Jon Riemer</p>
      </footer>
    </>
  );
};

export default SharedLayout;
