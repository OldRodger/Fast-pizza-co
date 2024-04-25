import React from "react";

function Spinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="aspect-square w-20 animate-spin rounded-full border-8 border-stone-800 border-b-transparent"></div>
    </div>
  );
}

export default Spinner;
