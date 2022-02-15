import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const inputValue = useRef();
  const [IsValid, SetIsValid] = useState(true);
  const SubmitHandler = (event) => {
    event.preventDefault();
    const AmountNumber = +inputValue.current.value;
    if (AmountNumber === 0) {
      SetIsValid(false);
      return;
    }
    props.onAddItem(AmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={inputValue}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!IsValid && <p> Please enter a valid input</p>}
    </form>
  );
};

export default MealItemForm;
