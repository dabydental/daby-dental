import { Header } from "../../components/Packages/header/header";
import headerData from "../../contents/common/headerData.json";

const HeaderHoc = () => {
  return <Header {...headerData} />;
};

export { HeaderHoc };
