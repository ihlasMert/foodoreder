import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
    <Input lable="Amount" input={{
id:"amount",
type:"number",
min:"1",
max:"",
step:"1",
defaultValue:""


    }}
    />

      <button>+ADD</button>
    </form>
  );
};

export default MealItemForm;
