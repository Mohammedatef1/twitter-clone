import useLoginModal from "@/hooks/useLoginModal";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  const loginModal = useLoginModal();
  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);
  return (
    <div onClick={onClick}>
      <div
        className="
      mt-6
      rounded-full
      h-14
      w-14
      p-4
      flex
      justify-center
      items-center
      bg-sky-500
      hover:bg-opacity-90
      transition
      cursor-pointer
      lg:hidden
  ">
        <FaFeather
          size={24}
          color="white"
        />
      </div>
      <div className="hidden lg:flex items-center justify-center bg-sky-500 hover:bg-opacity-90 mt-6 px-4 py-2 rounded-full cursor-pointer transition">
        <p className="hidden lg:block text-xl text-white font-semibold">Tweet</p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
