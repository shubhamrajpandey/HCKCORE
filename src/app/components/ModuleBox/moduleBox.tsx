type ModuleBoxProps = {
  Title: string;
  SubjectCode: string;
  rating: string;
  Description: string;
  ProfileLink?: React.ReactNode;
  ModuleLeaderName: string;
};

export default function ModuleBox({
  Title,
  SubjectCode,
  rating,
  Description,
  ProfileLink,
  ModuleLeaderName,
}: ModuleBoxProps) {
  return (
    <div className="flex flex-col w-110 px-4 py-3 items-center justify-center rounded-[15px] bg-white hover:shadow-2xl duration-300">
      <div className="w-full h-[210px] flex  rounded overflow-hidden items-center text-center justify-center flex-wrap text-2xl font-extrabold">
        {Title}
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
            {/* For temporary image till backend image modification */}
            {ProfileLink ? (
              ProfileLink
            ) : (
              <svg
                className="ml-1"
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.125 9.42857H26.6667V3.14286H21.125V9.42857ZM12.2083 9.42857H17.75V3.14286H12.2083V9.42857ZM3.33333 9.42857H8.875V3.14286H3.33333V9.42857ZM3.33333 18.8571H8.875V12.5714H3.33333V18.8571ZM12.2083 18.8571H17.75V12.5714H12.2083V18.8571ZM21.125 18.8571H26.6667V12.5714H21.125V18.8571ZM0 18.8571V3.14286C0 2.27857 0.326667 1.53895 0.98 0.924C1.63333 0.309047 2.41778 0.00104762 3.33333 0H26.6667C27.5833 0 28.3683 0.308 29.0217 0.924C29.675 1.54 30.0011 2.27962 30 3.14286V18.8571C30 19.7214 29.6739 20.4616 29.0217 21.0776C28.3694 21.6936 27.5844 22.001 26.6667 22H3.33333C2.41667 22 1.63222 21.6925 0.98 21.0776C0.327778 20.4626 0.00111111 19.7225 0 18.8571Z"
                  fill="white"
                />
              </svg>
            )}
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
