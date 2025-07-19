import LevelDropdown from "@/app/components/Dropdown/LevelDropdown";
import SubjectDropdown from "@/app/components/Dropdown/SubjectDropdown";

export default function Programs() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-white">
      <div className="w-[78%] h-[80vh] flex flex-col gap-10">
        <div className="flex space-x-10">
          <SubjectDropdown/> <LevelDropdown/>
        </div>
      </div>
    </div>
  );
}
