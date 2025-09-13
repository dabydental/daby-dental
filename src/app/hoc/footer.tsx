import { Footer } from "../../components/Packages/footer/footer";
import footerData from "../../contents/common/footerData.json";

const FooterHoc = () => {
  return <Footer {...footerData} />;
};

export { FooterHoc };
