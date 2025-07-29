import React from "react";

type ButtonType = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

type ExtraBoxProps = {
  title: string;
  description: string;
  buttons?: ButtonType[];
};

const ExtraBox: React.FC<ExtraBoxProps> = ({ title, description, buttons }) => {
  return (
    <div>
      <p className='text-[#686868] font-[500] mb-2'>{title}</p>
      <div className=" w-[1270px] h-[210px] rounded-[15px] border-1 p-4 bg-gray-50 space-y-4">
        <p className="text-[18px] text-gray-700 text-center py-6">{description}</p>
        <div className="flex gap-8 px-30">
          {buttons?.map((btn, idx) => (
            <button
              key={idx}
              onClick={btn.onClick}
              className="inline-flex items-center px-3 py-1.5 bg-white text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              {btn.icon}
              <span className="ml-1">{btn.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraBox;
