import { Link } from "react-router-dom";

export function Header(){

  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addArticle">addArticle</Link>
          </li>
          <li>
            <Link to="/article">article</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
        </ul>
      </nav>

      <hr />
    </div>

  );
};