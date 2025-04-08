// src/components/layout/Loading.tsx
import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/lottie/loading.json";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <Lottie
        animationData={loadingAnimation}
        loop
        style={{ width: 200, height: 200, opacity: 1 }}
        className="w-48 h-48"
      />
    </div>
  );
};

export default Loading;
