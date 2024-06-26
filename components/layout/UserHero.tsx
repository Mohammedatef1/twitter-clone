import useUser from "@/hooks/useUser";
import Image from "next/image";
import Avatar from "./Avatar";

interface UserHeroProps {
  userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  const { data: fetchedUser } = useUser(userId);
  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {fetchedUser?.coverImage && (
          <Image
            alt="cover image"
            fill
            src={fetchedUser.coverImage}
            style={{
              objectFit: "cover",
            }}
          />
        )}
        <div className="absolute -bottom-16 left-4 ">
          <Avatar
            userId={userId}
            hasBorder
            isLarge
          />
        </div>
      </div>
    </div>
  );
};

export default UserHero;
