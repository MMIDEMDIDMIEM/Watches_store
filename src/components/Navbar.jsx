import React from "react";
import ThemeButton from "./Theme";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar bg-base-100  px-10 md:px-40 flex justify-between h-[72px]">
      {/* الشعار على اليسار */}
      <div className="flex flex-col items-start">
        <h3 className="btn btn-ghost text-2xl font-bold px-0 font-serif tracking-widest">K&S</h3>
      </div>

      {/* الأزرار (السلة + البروفايل) */}
      <div className="flex items-center gap-4 z-10">
        <ThemeButton/>

        <div className="card-actions">
                <Link to="/login">
                <button className="btn btn-primary btn-block">Login</button>
                </Link>
              </div>
        {/* Cart Dropdown */}
       

     
      </div>
    </div>
  );
}

export default Navbar;
