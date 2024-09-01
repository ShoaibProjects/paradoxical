import React from 'react';
import { FaChevronCircleUp } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";

function AccordionItem({ title, isOpen, onClick, children }) {
  return (
    <div className="border-b border-gray-500">
      <button
        onClick={onClick}
        className="w-full text-left p-4 bg-slate-800 hover:bg-slate-700 hover:text-slate-200 focus:outline-none"
      >
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold pr-1">{title}</span>
          <span className="text-xl">{isOpen ? <FaChevronCircleUp /> : <FaChevronCircleDown />}</span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-xl opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-slate-900">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
