//context
import { useDropdownContext } from "context";

//style
import styles from "./style.module.css";

const Result = () => {
  //context
  const { value } = useDropdownContext();

  //render
  return (
    <div className={styles.result}>{!value.key ? "هیچ!" : value.name}</div>
  );
};

export default Result;
