import React from "react";
import PageContainer from "../layouts/PageContainer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { removeAccessToken } from "../utils/localstorage";
import Loading from "../components/common/Loading";
import { useAdmin } from "../contexts/AdminContext";

function Headeradmin() {
  const navigate = useNavigate();
  const { loading } = useAdmin();

  const logOut = () => {
    removeAccessToken();
    navigate(0);
  };
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-button">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-3xl">
              ForAdmin
              <Link to="/">
                <button className="btn mx-4">Back to home</button>
              </Link>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}

                <Link to="/admin/approve">
                  <li>
                    <a>รายการที่รอการตรวจสอบ</a>
                  </li>
                </Link>
                <Link to="/admin/room">
                  <li>
                    <a>แก้ไขห้องพัก</a>
                  </li>
                </Link>
                <li>
                  <a onClick={() => logOut()}>ออกจากระบบ</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          {/* Content */}
        </div>

        {/* <div className="drawer-side ">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            Sidebar content here
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div> */}
      </div>
      <Loading loading={loading} />
    </div>
  );
}

export default Headeradmin;
