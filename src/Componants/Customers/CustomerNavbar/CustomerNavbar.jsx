import { useState } from "react";
import Select from "react-select";
import imgLogo from "./../../../assets/Black Pixels Logo (1).png";
import "./../../Sidebar/Sidebar.css";

export default function CustomerNavbar() {
  const [openNotify, setOpenNotify] = useState(false);
  const [openUserSettings, setOpenUserSettings] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [openSideBar, setOpenSideBar] = useState(false);

  document.addEventListener("click", (e) => {
    if (e.target.id === "user-icon" && openNotify === true) {
      setOpenNotify(false);
      return;
    }
    if (e.target.id === "bell-icon" && openUserSettings === true) {
      setOpenUserSettings(false);
      return;
    }
    if (e.target.id != "user-icon" && e.target.id != "bell-icon") {
      if (openNotify) {
        setOpenNotify(false);
      }
      if (openUserSettings) {
        setOpenUserSettings(false);
      }
      return;
    }
  });
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className=" relative">
      <div
        className="customers-header bg-white 
         flex items-center justify-center 
        relative py-3 ps-2 rounded-lg z-20"
      >
        <div
          id="toggle"
          className={`toggle bg-gray-800 rounded-lg flex items-center justify-center flex-col 
          ${openSideBar ? "active" : ""}`}
          onClick={() => setOpenSideBar(!openSideBar)}
        ></div>
        <div
          className="logo flex 
      items-center justify-center gap-5 ms-3"
        >
          <img className="w-20" src={imgLogo} alt="" />
        </div>
        <div
          className="left-side-header
      flex items-center justify-end  gap-7 flex-1 md:me-12 sm:me-4"
        >
          <div className="search-input relative">
            <Select
              className="react-select-container lg:w-80 md:w-48 sm:w-32"
              classNamePrefix="react-select"
              options={options}
              isSearchable={isSearchable}
            />
          </div>
          <div className="icons flex items-center justify-center">
            <div className="  relative bell-notify  flex items-center justify-center ">
              <i
                id="user-icon"
                className="fa-solid fa-user rounded-xl   py-2 px-3 relative cursor-pointer
                hover:bg-gray-200 main-transition icon-color"
                onClick={() => setOpenUserSettings(!openUserSettings)}
              ></i>
              {openUserSettings ? (
                <div className=" absolute top-12 right-0 p-5 min-w-80  bg-white rounded-xl ">
                  <ul>
                    <li className="mb-4   px-1  py-2 flex flex-col rounded-lg hover:bg-gray-100">
                      <div className="flex items-center flex-grow flex-wrap ">
                        <i className="fa-solid fa-user bg-main-color text-white text-lg  px-5 py-2 rounded-3xl mr-2"></i>
                        <div className="detils">
                          <p className="font-semibold">Omar Ahmed elnadey</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <button className="  bg-main-color text-white rounded-lg py-2 px-12 mt-3">
                    Log out
                  </button>
                </div>
              ) : null}
            </div>
            <div className=" px-1 relative bell-notify  flex items-center justify-center ">
              <i
                id="bell-icon"
                className="fa-solid fa-bell  rounded-xl  py-2 px-3 relative cursor-pointer
                 hover:bg-gray-200 main-transition icon-color  "
                onClick={() => setOpenNotify(!openNotify)}
              ></i>
              {openNotify ? (
                <div className=" absolute top-12 right-0 p-5 min-w-80  bg-white rounded-xl ">
                  <ul>
                    <li className="mb-4  pl-1  py-2 flex flex-col rounded-lg hover:bg-gray-100">
                      <div className="flex items-center flex-grow flex-wrap ">
                        <i className="fa-solid fa-screwdriver-wrench  icon-color p-4 rounded-3xl mr-2"></i>
                        <div className="detils">
                          <p className="font-semibold">Omar Ahmed elnadey</p>
                          <span>The car is under repair</span>
                        </div>
                      </div>
                      <div className="flex items-center m-auto w-8/12 gap-2 mt-2 ">
                        <i className="fa-solid fa-clock text-xs text-gray-500"></i>
                        <span className="text-xs text-gray-500">
                          13 minutes age
                        </span>
                      </div>
                    </li>
                    <li className="mb-4  pl-1  py-1 flex flex-col rounded-lg hover:bg-gray-100">
                      <div className="flex items-center flex-grow flex-wrap ">
                        <i className="fa-solid fa-square-check icon-color  p-4 rounded-3xl mr-2"></i>
                        <div className="detils">
                          <p className="font-semibold">Omar Ahmed elnadey</p>
                          <span>Maintenance Finished</span>
                        </div>
                      </div>
                      <div className="flex items-center m-auto w-8/12 gap-2 mt-2 ">
                        <i
                          className="fa-solid fa-clock text-xs icon-color
                         text-gray-500"
                        ></i>
                        <span className="text-xs text-gray-500">1 day age</span>
                      </div>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* Side Bar  */}
      <div
        className={`parent-sidebar absolute  ${
          openSideBar ? "w-80" : "md:w-16"
        } 
        z-10 bg-white top-0 left-0 overflow-hidden h-screen main-transition
        `}
      >
        <div
          className="side-bar mt-36
      h-full	py-2 ease-linear overflow-hidden"
        >
          <ul
            className={` flex flex-col gap-5 
      overflow-hidden px-3  `}
          >
            <li className="">
              <i className="fa-solid fa-warehouse icon-color  relative z-10"></i>{" "}
              <span className={`${openSideBar ? "active" : ""}  overflow-hidden`}>
                Warehouse
              </span>
            </li>
            <li>
              <i className="fa-solid fa-users icon-color"></i>{" "}
              <span className={`${openSideBar ? "active" : ""}  overflow-hidden`}>Customers</span>
            </li>
            <li>
              <i className="fa-solid fa-paper-plane icon-color"></i>
              <span className={`${openSideBar ? "active" : ""}  overflow-hidden`}>Request Spares From Outside</span>
            </li>
            <li>
              <i className="fa-solid fa-pen-to-square icon-color"></i>
              <span className={`${openSideBar ? "active" : ""}  overflow-hidden`}>Send Spares inside</span>
            </li>
            <li>
              <i className="fa-solid fa-users icon-color"></i>{" "}
              <span className={`${openSideBar ? "active" : ""}  overflow-hidden`}>Customers</span>
            </li>
            <li>
              <i className="fa-solid fa-warehouse icon-color"></i>{" "}
              <span className={`${openSideBar ? "active" : ""}  overflow-hidden`}>Warehouse</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
