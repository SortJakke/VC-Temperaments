import { Link, useLocation } from "react-router-dom"
import {
  HomeIcon,
  PencilIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"

export default function Header() {
  const location = useLocation()

  const links = [
    { name: "Início", path: "/", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "Teste", path: "/teste", icon: <PencilIcon className="w-5 h-5" /> },
    {
      name: "Temperamentos",
      path: "/temperamentos",
      icon: <UserGroupIcon className="w-5 h-5" />,
    },
    {
      name: "Resultado",
      path: "/resultado",
      icon: <ChartBarIcon className="w-5 h-5" />,
    },
  ]

  return (
    <>
      <header className="hidden md:flex fixed top-0 w-screen bg-white shadow-md z-50">
        <nav className="w-full">
          <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
            <Link to={"/"} className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-gray-500">
                <span className="text-emerald-500">4</span> Temperamentos
              </h1>
            </Link>
            <ul className="flex gap-8">
              {links.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-lg hover:text-emerald-600 transition ${
                      location.pathname === item.path
                        ? "text-emerald-700 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <header className="md:hidden fixed bottom-0 w-full bg-white shadow z-50">
        <nav>
          <ul className="flex justify-around items-center bg-white">
            {links.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex flex-col px-4 py-2 items-center text-xs ${
                    location.pathname === item.path
                      ? "bg-emerald-100 text-emerald-700"
                      : "text-gray-500"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
