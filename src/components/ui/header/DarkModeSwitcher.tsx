import useColorMode from "../../../hooks/useColorMode";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <li>
      <label
        className={`relative m-0 block h-[30px] w-14 rounded-full ${
          colorMode === "dark" ? "bg-blue-500" : "bg-slate-400"
        }`}
      >
        <input
          type="checkbox"
          onChange={() => {
            if (typeof setColorMode === "function") {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }
          }}
          className="absolute top-0 z-50 w-full h-full opacity-0 cursor-pointer peer"
        />
        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ease-in-out peer-checked:left-[calc(100%-3px)] peer-checked:translate-x-[-100%]`}
        >
          <span className="dark:hidden">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
          <span className="hidden dark:inline-block">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span>
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;
