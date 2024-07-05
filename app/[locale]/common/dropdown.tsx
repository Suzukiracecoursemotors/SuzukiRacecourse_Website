import React from "react";
import { Link } from "@/navigation";

type DropdownProps = {
  locale: string;
  path: string;
  children: {
    locale: string;
    path: string;
  }[];
  t: (key: string) => string;
};

const Dropdown: React.FC<DropdownProps> = ({ locale, path, children, t }) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle text-dark"
        href="#"
        id={`dropdown-${locale}`}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {t(`nav.${locale}`)}
      </a>
      <ul
        className="dropdown-menu dropdown-animation dropdown-menu-end min-w-auto bg-light"
        aria-labelledby={`dropdown-${locale}`}
      >
        {children.map((child) => (
          <li key={child.path}>
            <Link href={child.path} className="dropdown-item text-dark">
              {t(`nav.${child.locale}`)}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
