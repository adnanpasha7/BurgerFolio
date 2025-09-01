import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GoBackButton = ({ label = "Go Back ⬅️" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-6 left-6 flex items-center border-4 border-tertiary gap-2 px-4 py-3 bg-secondary text-primary rounded-full shadow-2xl hover:scale-110 transition-transform duration-500 z-50 transform-gpu will-change-transform"
    >
      <ArrowLeft size={20} />
    </button>
  );
};

export default GoBackButton;
