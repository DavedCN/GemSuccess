import React from 'react';

const Feature = ({ icon,  title, desc }) => {
  return (
    <div className="flex items-start gap-3 max-w-[400px]">
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full  shrink-0 `}
       
      >
        {icon}
      </span>
      <div>
        <div className="font-semibold text-gray-900 text-[16px]">{title}</div>
        <div className="text-gray-500 text-[14px] mt-0.5">{desc}</div>
      </div>
    </div>
  );
}

export default Feature;
