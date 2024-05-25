import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ImageUpload from "../ImageUpload";
import Input from "../layout/Input";
import Modal from "../layout/Modal";

const EditModal = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { data: currentUser } = useCurrentUser();
  //const { data: currentUser , mutate: mutateFestchedUser } = useCurrentUser();
  const { mutate: mutateFestchedUser } = useUser(currentUser?.id);
  const editModal = useEditModal();

  useEffect(() => {
    setName(currentUser?.name);
    setUsername(currentUser?.username);
    setBio(currentUser?.bio);
    //setName(currentUser.name)
    //setName(currentUser.name)
  }, [currentUser?.name, currentUser?.username, currentUser?.bio]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.patch("/api/edit", {
        name,
        username,
        bio,
        profileImage,
        coverImage,
      });
      mutateFestchedUser();
      toast.success("Updated");
      editModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [editModal, name, username, bio, profileImage, coverImage, mutateFestchedUser]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload
        label="upload profile image"
        onChange={(e) => {
          setProfileImage(e);
        }}
        disabled={isLoading}
      />
      <Input
        onChange={(e) => {
          setName(e.target.value);
        }}
        disabled={isLoading}
        placeolder="Name"
        value={name}
        type="text"
      />
      <Input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        disabled={isLoading}
        placeolder="Username"
        value={username}
        type="text"
      />
      <Input
        onChange={(e) => {
          setBio(e.target.value);
        }}
        disabled={isLoading}
        placeolder="Bio"
        value={bio}
        type="text"
      />
    </div>
  );

  return (
    <Modal
      actionLabel="Save"
      onClose={editModal.onClose}
      onSubmit={onSubmit}
      title="Edit"
      body={bodyContent}
      isOpen={editModal.isOpen}
      disabled={isLoading}
    />
  );
};

export default EditModal;
