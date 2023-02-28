import Image from "next/image";
import { useState } from "react";
import IconImage from "../images/logo.png";
import ArrowImage from "../images/control.png";
import DashboardImage from "../images/Chart_fill.png";
import InboxImage from "../images/Chat.png";
// import ArrowImage from "../images/control.png";
// import ArrowImage from "../images/control.png";
// import ArrowImage from "../images/control.png";
// import ArrowImage from "../images/control.png";
// import ArrowImage from "../images/control.png";
// import ArrowImage from "../images/control.png";
// import ArrowImage from "../images/control.png";
// import ArrowImage from "../images/control.png";
// import ArrowImage from "../images/control.png";
// import ArrowImage from "../images/control.png";


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: DashboardImage },
    { title: "Inbox", src: InboxImage },
    { title: "Accounts", src: DashboardImage , gap: true },
    { title: "Schedule ", src: InboxImage},

  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <Image
          alt="icon"
          src={ArrowImage}
          width={5}
          height={5}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4">
          <Image
            alt="icon"
            width={24}
            height={24}
            src={IconImage}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Image
                 width={24}
                 height={24} 
                 alt="icon" 
                 src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
