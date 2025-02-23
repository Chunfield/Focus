import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-custom-dark">
      <div className="flex items-center space-x-8 text-white">
        <a href="#" className="hover:text-gray-300 transition-colors">
          首页
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors">
          文章
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索文章..."
            className="px-4 py-2 bg-transparent border-b border-gray-400 text-white 
                     focus:outline-none focus:border-custom-red 
                     placeholder-gray-400 transition-colors"
          />
        </div>
        <button
          className="px-6 py-2 rounded-md font-medium transition-colors bg-custom-red text-white hover:bg-opacity-90"
        >
          登录
        </button>
      </div>
    </nav>
  );
};

export default Navbar;