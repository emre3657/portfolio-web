import { ApiStatus } from "../ApiStatus/ApiStatus";
import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#">Emre Ekinci</a>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#about">Hakkımda</a>
          </li>
          <li>
            <a href="#skills">Yetenekler</a>
          </li>
          <li>
            <a href="#projects">Projeler</a>
          </li>
          <li>
            <a href="#experience">Deneyim</a>
          </li>
          <li>
            <a href="#certificates">Sertifikalar</a>
          </li>
          <li>
            <a href="#contact">İletişim</a>
          </li>
        </ul>
      </nav>
      <ApiStatus />
    </header>
  );
}
