import "./Button.scss";

const Button = (props) => {
  const { buttonText, isRound } = props;

  let buttonStyle = "button";
  if (isRound) {
    buttonStyle += " round";
  } else {
    buttonStyle += " regular";
  }

  // This could be simplified using a inline turnery statement.
  // let buttonStyle = isSecondary ? "button secondary" : "button primary";

  return <button className={buttonStyle}>{buttonText}</button>;
};

export default Button;