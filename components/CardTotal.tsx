import React from "react";
import { IconType } from "react-icons";
import { FaCoins } from "react-icons/fa";

interface CardTotalProps {
  title: string;
  totalItem: string;
  icon?: IconType;
}

const CardTotal: React.FC<CardTotalProps> = ({
  title,
  totalItem,
  icon: Icon = FaCoins,
}) => {
  return (
    <div className="w-full lg:w-full md:w-80 sm:w-1/2 p-2 justify-center">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans font-semibold leading-normal uppercase text-sm">
                  {title}
                </p>
                <h5 className="mb-2 font-bold">{totalItem}</h5>
              </div>
            </div>
            <div className="px-3 text-right basis-1/3">
              <div className="w-12 h-12 bg-gradient-to-tl from-blue-500 to-violet-500 rounded-full flex items-center justify-center">
                <Icon className="text-lg relative top-0.5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTotal;
