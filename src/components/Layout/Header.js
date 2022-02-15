import imgMeals from "./../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCratButton from "./HeaderCratButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCratButton onClick={props.onSubmit} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imgMeals} alt="" />
      </div>
    </>
  );
};

export default Header;
