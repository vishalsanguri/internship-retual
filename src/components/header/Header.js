import React, { useEffect, useState } from "react";
import "./Header.css";
export default function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <div className={scroll ? "header-container scroll" : "header-container"}>
      <ul className="unordered-list">
        <li className="hover-item">Menu</li>
        <li className="list-item">Ritual</li>
        <li className="hover-item1">
          <span className="who-are-we">Who We Are</span>
          <svg
            class="path"
            width="24"
            height="24"
            version="1.1"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
              <g>
                <rect
                  width="24"
                  height="24"
                  x="0"
                  y="0"
                  fill="#FFF"
                  fill-opacity="0"
                ></rect>
                <path
                  stroke="#142B6F"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.5,6.5 L20.5,23 L4,23 L4,6.5 L20.5,6.5 Z M12.25,1 C14.5281746,1 16.375,2.84682541 16.375,5.125 C16.375,5.43937389 16.3000569,5.88826911 16.1501708,6.47168566 C11.4355784,6.44324758 8.85377775,6.42767434 8.40476894,6.42496595 L8.33387282,6.42453831 C8.33387282,6.42453831 8.125,5.57904881 8.125,5.125 C8.125,2.84682541 9.97182541,1 12.25,1 Z"
                ></path>
              </g>
            </g>
          </svg>
        </li>
      </ul>
    </div>
  );
}
