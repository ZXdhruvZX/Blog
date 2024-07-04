import React, { useContext } from "react";
import { MyContext } from "../../context/data/MyContext";

function Footer() {
  const context = useContext(MyContext);
  const { mode } = context;

  return (
    <footer
      className="body-font"
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#30336b" }}
    >
      {/* Left Content */}
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        {/* Blog Logo */}
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* Logo */}
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png"
            alt="logo"
          />
          {/* Logo Text */}
          <span className="ml-3 text-xl text-white">DHRUV</span>
        </div>

        {/* Items */}
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Dhruv Sharma —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @DHRUV
          </a>
        </p>

        {/* Right Item */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

          {/* Icon 4 */}
          <a href="https://www.linkedin.com/in/dhruv-sharma-665875219" className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
