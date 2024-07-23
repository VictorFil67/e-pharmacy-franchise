import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStatisticsThunk } from "../../store/statistics/operations";
import { toast } from "react-toastify";
import { Customers } from "../../components/Customers/Customers";

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
    <div>
      <Customers />
    </div>
  );
};

export default StatisticsPage;
