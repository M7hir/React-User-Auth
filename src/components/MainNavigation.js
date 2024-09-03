import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="">Sign_in</Link>
        </li>
        <li>
          <Link to="sign_up">Sign_Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
