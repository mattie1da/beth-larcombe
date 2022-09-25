import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

// @ts-ignore
export const Layout = ({ children, activeSection, sectionContactRef }) => {
  return (
    <>
      <Navigation activeSection={activeSection} />
      {children}
      <Footer ref={sectionContactRef} />
    </>
  );
};
