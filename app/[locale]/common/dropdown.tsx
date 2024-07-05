// import React from "react";
// import { Link } from "@/navigation";

// type DropdownLocale = "Sale" | "AfterSale";
// enum NavLinksLocale {
//   Home = "Home",
//   Sale = "Sale",
//   CUC = "CUC",
//   Aftersale = "Aftersale",
//   Gallery = "Gallery",
//   Blog = "Blog",
//   Finance = "Finance",
//   Parts = "Parts",
//   Support = "Support",
//   Contact = "Contact",
// }

// type NavLink = {
//   locale: NavLinksLocale;
//   path: string;
//   children?: NavLink[];
// };

// interface DropdownProps {
//   locale: DropdownLocale;
//   path: string;
//   children?: NavLink[];
//   t: any;
// }

// const Dropdown: React.FC<DropdownProps> = ({ locale, children, t }) => {
//   return (
//     <li className="nav-item dropdown">
//       <a
//         className="nav-link dropdown-toggle text-dark"
//         href="#"
//         id={`dropdown-${locale}`}
//         role="button"
//         data-bs-toggle="dropdown"
//         aria-expanded="false"
//       >
//         {t(`nav.${locale}`)}{" "}
//         {/* Assuming your translation function works correctly */}
//       </a>
//       <ul
//         className="dropdown-menu dropdown-animation dropdown-menu-end min-w-auto bg-light"
//         aria-labelledby={`dropdown-${locale}`}
//       >
//         {children?.map((child) => (
//           <li key={child.path}>
//             <Link href={child.path} className="dropdown-item text-dark">
//               {t(`nav.${child.locale}`)}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </li>
//   );
// };

// export default Dropdown;
