import { Outlet, Link, NavLink} from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Mr Habeeb Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
              <NavLink to={`/contacts/1`} className={({isActive, isPending}) =>
              isActive ? "Active" : isPending ? 'pending' : ''}>Your name</NavLink>
              </li>
              <li>
                <Link to={`/contacts/2`}>Your Friend</Link>
              </li>
            </ul>
            
          </nav>
        </div>
        <div id="">
          <Outlet/>
        </div>
      </>
    );
  }
  