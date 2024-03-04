import CustomerNavbar from "../CustomerNavbar/CustomerNavbar";

import Select from "react-select";
import React, { useState } from "react";
import "./../Customers.css";

export default function Customers() {
  const [isSearchable, setIsSearchable] = useState(true);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <CustomerNavbar />
      <div className=" flex ml-auto w-11/12 justify-end items-center md:px-5 px-8">
        <div className="overflow-hidden overflow-x-scroll  flex-col w-full md:mx-auto   mt-8   ">
          <div className="all-customers sm:w-full  flex   ">
            <h4 className="head-table blue-color bg-white ps-4 pe-12  md:pe-20   py-3 font-semibold ">
              <i className="fa-solid fa-list me-3"></i>
              All Customers
              <span
                className="ml-2 text-xs bg-zinc-500 text-white px-3 py-2 rounded-full
              sm:inline-block hidden "
              >
                3
              </span>
            </h4>
            <div className="skew bg-transparent px-16 "></div>
          </div>
          <div className=" flex justify-between w-full  px-8 py-4 bg-white">
            <Select
              className="react-select-container w-80"
              classNamePrefix="react-select"
              options={options}
              isSearchable={isSearchable}
            />
            <button
              className="add-btn py-2 px-5 text-white  items-center rounded-3xl 
            md:flex hidden"
            >
              <span className="text-xl pe-2">+</span>New Customer
            </button>
          </div>
          <table className=" w-full  text-left text-sm font-light  bg-white rounded-md">
            <thead className="border-b font-medium dark:border-neutral-500  ">
              <tr className="text-slate-400	">
                <th scope="col" className="px-6 py-4 ">
                  Code
                </th>
                <th scope="col" className="px-6 py-4">
                  Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Phone
                </th>
                <th scope="col" className="px-6 py-4">
                  Address
                </th>
                <th scope="col" className="px-6 py-4">
                  Car Type - Version
                </th>
                <th scope="col" className="px-6 py-4">
                  Id Car
                </th>
                <th scope="col" className="px-6 py-4">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b transition duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-200 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 ">1</td>
                <td className="whitespace-nowrap px-6 py-4  font-medium">
                  Omar
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-mono">0105</td>
                <td className="whitespace-nowrap px-6 py-4 font-serif ">
                  Shoubra - Abo elhana
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  Kia Serato - 2010
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  108320123129812
                </td>
                <td className="whitespace-nowrap  font-medium ">
                  <span className="text-white  py-2 px-5 rounded-3xl bg-main-color">
                    Under repair
                  </span>
                </td>
              </tr>
              <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 ">2</td>
                <td className="whitespace-nowrap px-6 py-4  font-medium">
                  Omar
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-mono">010</td>
                <td className="whitespace-nowrap px-6 py-4 font-serif ">
                  Shoubra - Abo elhana
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  Kia Serato - 2010
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  108320123129812
                </td>
                <td className="whitespace-nowrap  font-medium ">
                  <span className="text-white bg-perfect py-2 px-5 rounded-3xl">
                    Perfect
                  </span>
                </td>
              </tr>
              <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 ">3</td>
                <td className="whitespace-nowrap px-6 py-4  font-medium">
                  Omar
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-mono">010</td>
                <td className="whitespace-nowrap px-6 py-4 font-serif ">
                  Shoubra - Abo elhana
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  Kia Serato - 2010
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  108320123129812
                </td>
                <td className="whitespace-nowrap  font-medium ">
                  <span className="text-white  py-2 px-5 rounded-3xl bg-pending">
                    Repaired
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
