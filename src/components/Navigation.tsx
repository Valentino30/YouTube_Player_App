import { routes } from "../consts/routes";
import { Link, useLocation } from "react-router";

export function NavigationMenu() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 p-4 w-full">
      <ul className="flex justify-center gap-8">
        {Object.entries(routes).map(([_, route]) => (
          <li className={`${isActive(route.path) ? "font-bold" : "text-gray-500 hover:text-gray-400"} `}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
