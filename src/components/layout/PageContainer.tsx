import React from "react";

export default function PageContainer({ children, className = "" }) {
  return (
    <div className={`w-full px-6 md:px-10 xl:px-36 ${className}`}>
      {children}
    </div>
  );
}