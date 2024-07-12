import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShop } from "../../store/shops/selectors";
import { getShopThunk } from "../../store/shops/operations";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { shopId } = useSelector(selectShop);

  useEffect(() => {
    dispatch(getShopThunk(shopId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>ShopPage</div>;
};

export default ShopPage;
