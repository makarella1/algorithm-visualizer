import React from "react";

export const PageLayout = ({ children }: React.PropsWithChildren) => (
  <div className="h-[92vh] w-screen bg-stone-900 text-white">{children}</div>
);
