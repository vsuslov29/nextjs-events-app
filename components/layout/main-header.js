import Link from "next/link";
import s from './main-header.module.css'

function MainHeader() {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link href="/">Next Events</Link>
      </div>
      <nav className={s.navigation}>
        <ul>
          <li className={s.listItem}>
            <Link href='/events'>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
