import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import Input from "../layout/Input";
import Modal from "../layout/Modal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggle = useCallback(() => {
    if (isLoading) return;
    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("/api/register", {
        name,
        username,
        password,
        email,
      });

      toast.success("Account has been created.");

      signIn("credentials", {
        email,
        password,
      });

      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, name, username, password, email]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeolder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeolder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeolder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeolder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="mt-4 text-neutral-400 text-center">
      <p>
        Already have an account?{" "}
        <span
          onClick={toggle}
          className="hover:underline text-white cursor-pointer">
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      actionLabel="Register"
      title="Register"
      onClose={registerModal.onClose}
      isOpen={registerModal.isOpen}
      onSubmit={onSubmit}
      body={bodyContent}
      disabled={isLoading}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
