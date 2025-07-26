type ModuleBoxProps = {
  Image: React.ReactNode;
  SubjectCode: string;
  rating: string;
  Description: string;
  ProfileLink: React.ReactNode;
  ModuleLeaderName: string;
};

export default function ModuleBox({
  Image,
  SubjectCode,
  rating,
  Description,
  ProfileLink,
  ModuleLeaderName,
}: ModuleBoxProps) {
  return (
    <div className="flex flex-col w-full max-w-[440px] px-4 py-3 items-center justify-center rounded-[15px] bg-white hover:shadow-2xl">
      <div className="w-full h-[210px] flex relative rounded overflow-hidden">
        {Image}
      </div>
      <div className="mt-3 flex flex-col w-full gap-4 px-5">
        <div className="flex items-center justify-between">
          <p className="text-green-600 font-medium text-xl">{SubjectCode}</p>
          <div className="flex items-center space-x-1">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M12.1045 3.26161L13.6425 6.36289C13.8522 6.79457 14.4115 7.20877 14.8834 7.28741L17.6702 7.75492C19.4528 8.05465 19.8723 9.35843 18.5877 10.6447L16.4205 12.8293C16.0535 13.199 15.8525 13.9129 15.9661 14.4241L16.5866 17.1287C17.0759 19.2696 15.9486 20.0971 14.0698 18.9786L11.457 17.4188C10.9851 17.1374 10.2073 17.1374 9.72669 17.4188L7.11557 18.9786C5.2455 20.0971 4.10947 19.26 4.59883 17.1287L5.21928 14.4241C5.33288 13.9129 5.13189 13.199 4.76487 12.8293L2.59768 10.6447C1.3227 9.35755 1.73342 8.05465 3.51524 7.75492L6.30288 7.28741C6.76603 7.20877 7.3253 6.79457 7.53503 6.36289L9.07304 3.26161C9.91195 1.57946 11.2752 1.57946 12.1054 3.26161"
                stroke="#FFD621"
                strokeWidth="2.18462"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{Description}</p>
        <div className="flex items-center gap-3">
          <div className="rounded-full overflow-hidden w-10 h-10">
            {ProfileLink}
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm">{ModuleLeaderName}</span>
            <span className="text-xs text-gray-500">Module Leader</span>
          </div>
        </div>
      </div>
    </div>
  );
}
