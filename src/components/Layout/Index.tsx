import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchInput from "../Navbar/SearchInput";

// React ^18 need to implement children like this.
interface InputProps {
  children: React.ReactElement;
}
const Layout: React.FC<InputProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
