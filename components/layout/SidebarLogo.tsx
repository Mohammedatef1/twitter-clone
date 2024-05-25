import { useRouter } from "next/router";
import { BsTwitter, BsTwitterX } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="
  rounded-full
  w-14
  h-14
  p-4
  flex
  justify-center
  items-center
  hover:bg-blue-300
  hover:bg-opacity-10
  cursor-pointer
  transition
  ">
      <BsTwitterX
        size={20}
        color="white"
      />
    </div>
  );
};

export default SidebarLogo;
