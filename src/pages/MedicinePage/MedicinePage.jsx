import { ProductOverview } from "../../components/ProductOverview/ProductOverview";
import { TabsContainer } from "../../components/TabsContainer/TabsContainer";
import { ShopPageWrap } from "./MedicinePage.Styled";

const MedicinePage = () => {
  return (
    <ShopPageWrap>
      <ProductOverview />
      <TabsContainer />
    </ShopPageWrap>
  );
};

export default MedicinePage;
