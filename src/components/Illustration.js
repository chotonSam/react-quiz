
import classes from "../styles/Illustration.module.css";

export default function Illustration({signImg, alt}) {
  return (
    <div className={classes.illustration}>
      <img src={signImg} alt={alt} />
    </div>
  );
}
