import React from "react";
import Navbar from "../Navbar/Navbar";

// React ^18 need to implement children like this.
interface InputProps {
  children: React.ReactElement;
}
const Layout: React.FC<InputProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
