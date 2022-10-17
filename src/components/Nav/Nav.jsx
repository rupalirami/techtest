import Button from "../Button/Button";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <h2 className="nav__heading">My ToDos</h2>
      <Button buttonText={"Reset"} isRound={false} />
    </div>
  );
};

export default Nav;
