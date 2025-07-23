type DisplayBoxProps = {
  image: React.ReactNode;
  title: string;
  value: number;
};

export default function DisplayBox({ image, title, value }: DisplayBoxProps) {
  return (
    <div className="w-[324px] h-[182px] pt-[16px] pr-[48px] pb-[22px] pl-[20px] hover:scale-99 hover:border-[#74BF44] hover:border-1 shadow-sm rounded-xl shadow-gray-400">
      <div className="flex flex-col p-[5px] gap-[32px]">
        <div className="flex space-x-[8px] items-center justify-start">
          <div className="bg-[#74BF44] rounded-full items-center justify-center p-3 w-fit h-fit">
            {image}
          </div>
          <span className="font-[500] text-[20px]">{title}</span>
        </div>
        <span className="text-[40px] font-[400]">{value}</span>
      </div>
    </div>
  );
}
