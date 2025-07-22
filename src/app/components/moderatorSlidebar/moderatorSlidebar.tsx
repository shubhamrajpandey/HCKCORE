export default function ModeratorSlideBar() {
  return (
    <aside className="flex flex-col gap-5 w-[420px] h-[1036px] bg-black left-0 top-0 rounded-xl ml-4 mt-4 pl-[30px] pr-[85px]">
      <div>
        <span>logo</span>
      </div>
      <div className="flex space-x-3 bg-red-900 p-2 rounded-md w-[322px] h-[64px] items-center py-[10px] pl-[11px]">
        <span className="text-white ">Dashboard</span>
      </div>
      <div className="flex space-x-3">
        <span className="text-white">Dashboard</span>
      </div>
      <div className="flex space-x-3">
        <span className="text-white">Dashboard</span>
      </div>
      <div className="flex space-x-3">
        <span className="text-white">Dashboard</span>
      </div>
      <div className="flex space-x-3">
        <span className="text-white">Dashboard</span>
      </div>
    </aside>
  );
}
