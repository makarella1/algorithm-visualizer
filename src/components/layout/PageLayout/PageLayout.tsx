import React from "react";

export const PageLayout = ({ children }: React.PropsWithChildren) => (
  <main className="mx-auto h-[92vh] px-20 py-14">{children}</main>
);
