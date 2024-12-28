import { useEffect } from "react";
import mythemes from "./theme";

const Navbar = () => {
  const handelTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const defaultTheme = mythemes[0];
      handelTheme(defaultTheme);
    }
  }, []);

  return (
    <div className="navbar bg-base-100 shadow items-center justify-between">
      <div className="flex-1">
        <div className="px-2">
          <a className="btn btn-ghost hover:bg-transparent text-xl">
            InstaPluck
          </a>
        </div>
      </div>
      <ul className="flex">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="px-3 py-1 font-bold">
            Themes
          </div>
          <ul
            tabIndex={0}
            className="max-h-44 overflow-auto dropdown-content menu bg-base-100 rounded z-[1] w-52 p-2 shadow"
          >
            <div className="block">
              {mythemes.map((theme) => (
                <li
                  className="block"
                  key={theme}
                  onClick={() => handelTheme(theme)}
                >
                  <a className="block w-full">{theme}</a>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
