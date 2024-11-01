//import DarkModeSwitcher from "../DarkModeSwitcher";

import DarkModeSwitcher from "./DarkModeSwitcher";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full p-6 transition-colors duration-200 bg-gray-100 shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between flex-grow px-4 py-4 md:px-6 2xl:px-11">
        <div className="container px-4 mx-auto">
          <h1 className="text-2xl font-bold">Produtos</h1>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
          </ul>
        </div>
      </div>
    </header>
  );
};
