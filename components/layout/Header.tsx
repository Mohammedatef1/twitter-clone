import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderPrpos {
  label: string;
  isShowingBackButton?: boolean;
}

const Header: React.FC<HeaderPrpos> = ({ label, isShowingBackButton }) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex gap-5 items-center ">
        {isShowingBackButton && (
          <BiArrowBack
            onClick={handleBack}
            size={20}
            color="white"
            className="cursor-pointer hover:opacity-70 transition"
          />
        )}
        <h2 className="text-white text-xl font-semibold">{label}</h2>
      </div>
    </div>
  );
};

export default Header;
