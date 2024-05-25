import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import { format } from "date-fns";
import { useCallback, useMemo } from "react";
import { BiCalendar } from "react-icons/bi";
import Button from "./Button";

interface UserBioProps {
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currenetUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }
    return format(new Date(fetchedUser?.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);

  const editModal = useEditModal();

  const onClick = useCallback(() => {
    editModal.onOpen();
  }, [editModal]);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currenetUser.id === userId ? (
          <Button
            label="Edit"
            onClick={onClick}
            secondary
          />
        ) : (
          <Button
            label="Follow"
            onClick={() => {}}
            secondary
          />
        )}
      </div>
      <div className="mt-8 px-4">
        <div>
          <p className="text-2xl text-white font-semibold">{fetchedUser?.name}</p>
          <p className="text-neutral-500 text-md">@{fetchedUser?.username}</p>
        </div>
        <div className="mt-4">
          <p className="text-white">{fetchedUser?.bio}</p>
          <div className="flex items-center gap-2 text-neutral-500 mt-4">
            <BiCalendar size={24} />
            <p>Joined {createdAt}</p>
          </div>
          <div className="flex items-center mt-4 gap-6 ">
            <div className="flex items-center gap-1 ">
              <p className="text-white">{fetchedUser?.followingIds.length}</p>
              <p className="text-neutral-500">Following</p>
            </div>
            <div className="flex items-center gap-1 ">
              <p className="text-white">{fetchedUser?.followersCount || 0}</p>
              <p className="text-neutral-500">Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
