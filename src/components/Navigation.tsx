import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/about", label: "О нас", icon: "Users" },
    { path: "/projects", label: "Проекты", icon: "Heart" },
    { path: "/donate", label: "Помочь", icon: "HandHeart" },
    { path: "/contact", label: "Контакты", icon: "Mail" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Heart" size={24} className="text-green-600" />
              <span className="text-xl font-bold text-gray-900">
                Добрые лапы
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-green-50 text-green-700"
                    : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
