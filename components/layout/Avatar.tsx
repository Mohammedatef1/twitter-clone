import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();
      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`
        ${isLarge ? "w-32" : "w-12"}
        ${isLarge ? "h-32" : "h-12"}
        ${hasBorder ? "border-4 border-black" : ""}
        rounded-full 
        relative
        cursor-pointer
        hover:opacity-90
        transition
  `}>
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        src={fetchedUser?.profileImage || "/images/placeholder.jpg"}
        onClick={onClick}
      />
    </div>
  );
};

export default Avatar;
