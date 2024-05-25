import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons/lib";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, href, icon: Icon, onClick, auth }) => {
  const router = useRouter();

  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [href, onClick, router, loginModal, auth, currentUser]);

  return (
    <div
      onClick={handleClick}
      className="flex items-center">
      <div className="relative h-14 w-14 flex items-center justify-center text-white p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer transition rounded-full text-lg lg:hidden">
        <Icon
          size={28}
          color="white"
        />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer ">
        <Icon
          size={24}
          color="white"
        />
        <p className="text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;