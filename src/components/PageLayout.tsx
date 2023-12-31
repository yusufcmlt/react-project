import { FC, ReactNode } from "react";

type PagesLayoutProps = {
  children: ReactNode;
};

const PageLayout: FC<PagesLayoutProps> = ({ children }) => {
  return <div className="page-layout">{children}</div>;
};

export default PageLayout;
