import Link from "next/link";
import s from "./button.module.css";

function Button({ children, link, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={s.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={s.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
