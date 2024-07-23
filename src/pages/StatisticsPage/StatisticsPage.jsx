import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStatisticsThunk } from "../../store/statistics/operations";
import { toast } from "react-toastify";
import { Customers } from "../../components/Customers/Customers";
import { PageWrap, Title } from "./StatisticsPage.Styled";
import { KeyIndicators } from "../../components/KeyIndicators/KeyIndicators";
import { Budget } from "../../components/Budget/Budget";

const StatisticsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatisticsThunk())
      .unwrap()
      .then(() => {
        toast.success(`The statistics of your shop are received`);
      })
      .catch(() => toast.error(`Ooops... Something went wrong!`));
  }, [dispatch]);
  return (
    <PageWrap>
      <Title>Statistics</Title>
      <KeyIndicators />
      <Customers />
      <Budget />
    </PageWrap>
  );
};

export default StatisticsPage;
