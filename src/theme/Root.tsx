import React from "react";
import DeprecationPopup from "@site/src/components/DeprecationPopup";

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <DeprecationPopup />
    </>
  );
}
