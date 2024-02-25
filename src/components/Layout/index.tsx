import React from "react";
import Header from "./Header";

function Layout({ children }: any) {
  return (
    <div className="main-content ">
      <Header />
      <main className="mb-8">{children}</main>
    </div>
  );
}

export default Layout;
