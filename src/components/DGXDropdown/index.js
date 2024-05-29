//libraries
import { useState, useEffect, useRef } from "react";

//context
import { useDropdownContext } from "context";

//style
import styles from "./style.module.css";

const DGXDropdown = ({ list, defaultItem }) => {
  //context
  const { value, setValue } = useDropdownContext();

  //states
  const [showList, setShowList] = useState(false);

  //refs
  const buttonRef = useRef(null);

  //methods
  const handleClickOnPage = (event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target)) {
      console.debug("inside");
      setShowList((prev) => !prev);
    } else {
      console.debug("outside");
      setShowList(false);
    }
  };

  //effects
  useEffect(() => {
    document.addEventListener("click", handleClickOnPage);
    return () => {
      document.removeEventListener("click", handleClickOnPage);
    };
  }, []);

  useEffect(() => {
    const selected = list.find((item) => item.key === defaultItem.dropdown);
    setValue(selected || null);
  }, [defaultItem, setValue]);

  //renderer
  return (
    <section className={styles["drop-down"]}>
      <button
        className={`size text color ${showList && "active"} ${styles.button}`}
        ref={buttonRef}
      >
        {value.name}
      </button>
      {showList && (
        <ul className={`${styles.list} size color`}>
          {list.map((item) => (
            <li
              className={`${styles.item} size text`}
              onClick={() => setValue(item)}
              key={item.key}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default DGXDropdown;
