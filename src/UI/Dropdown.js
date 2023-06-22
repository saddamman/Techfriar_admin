import React from "react";

const Dropdown = () => {
  return (
    <ul class="dropdown-menu" data-popper-placement="bottom-start">
      <li>
        <a class="dropdown-item" href="/">
          Category 1
        </a>
      </li>
      <li>
        <a class="dropdown-item" href="/">
          Category 2
        </a>
      </li>
      <li>
        <a class="dropdown-item" href="/">
          Category 3
        </a>
      </li>
    </ul>
  );
};

export default Dropdown;
