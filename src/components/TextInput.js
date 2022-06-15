import classes from "../styles/TextInput.module.css";
export default function TextInput({ name, ...rest }) {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {name} </span>
    </div>
  );
}