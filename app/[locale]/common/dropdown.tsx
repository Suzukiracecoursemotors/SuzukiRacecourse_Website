// Dropdown.tsx
import React from "react";

type DropdownProps = {
  locale: string;
  path: string;
  children: React.ReactNode;
  t: (key: string) => string;
};

const Dropdown: React.FC<DropdownProps> = ({ locale, path, children, t }) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href={path}
        id={`${locale}-dropdown`}
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {t(`nav.${locale}`)}
      </a>
      <div className="dropdown-menu" aria-labelledby={`${locale}-dropdown`}>
        {children}
      </div>
    </li>
  );
};

export default Dropdown;
