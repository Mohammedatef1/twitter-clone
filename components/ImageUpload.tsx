import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
  onChange: (base64: string) => void;
  label: string;
  disabled?: boolean;
  value?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, label, disabled, value }) => {
  return <div></div>;
};

export default ImageUpload;
