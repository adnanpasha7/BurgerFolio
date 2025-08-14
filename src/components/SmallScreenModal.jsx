import { useEffect, useState } from "react";

const SmallScreenModal = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // example breakpoint for small screens
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isSmallScreen]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-blur flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-4 text-center shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Viewed best on larger devices
        </h2>
        <p className="mb-6 text-gray-600">
          For the best experience, please view this site on a larger screen.
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bg-[#A9070C] text-white rounded hover:bg-[#860705]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SmallScreenModal;