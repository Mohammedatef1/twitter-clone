import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import Input from "../layout/Input";
import Modal from "../layout/Modal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      console.log(email, password);

      await signIn("credentials", {
        email,
        password,
      });

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeolder="Email"
        disabled={isLoading}
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeolder="Password"
        disabled={isLoading}
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using twitter?{" "}
        <span
          onClick={toggle}
          className="text-white hover:underline cursor-pointer">
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      actionLabel="Sign in"
      onSubmit={onSubmit}
      onClose={loginModal.onClose}
      body={bodyContent}
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      footer={footerContent}
    />
  );
};

export default LoginModal;
