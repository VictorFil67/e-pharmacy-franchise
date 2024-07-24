import { useSelector } from "react-redux";
import { selectstatisticsResult } from "../../store/statistics/selectors";
import {
  Indexes,
  IndexItem,
  IndexTitle,
  IndexTitleWrap,
  IndexTotal,
} from "./KeyIndicators.Styled";
import SvgMoney from "../../images/statisticsImg/SvgMoney";
import SvgPeople from "../../images/statisticsImg/SvgPeople";

export const KeyIndicators = () => {
  const keyIndicators = useSelector(selectstatisticsResult);
  console.log(keyIndicators);

  return (
    <Indexes>
      <IndexItem>
        <IndexTitleWrap>
          <SvgMoney />
          <IndexTitle>All products</IndexTitle>
        </IndexTitleWrap>
        <IndexTotal>{keyIndicators?.all_products}</IndexTotal>
      </IndexItem>
      <IndexItem>
        <IndexTitleWrap>
          <SvgPeople />
          <IndexTitle>All suppliers</IndexTitle>
        </IndexTitleWrap>
        <IndexTotal>{keyIndicators?.all_customers}</IndexTotal>
      </IndexItem>
      <IndexItem>
        <IndexTitleWrap>
          <SvgPeople />
          <IndexTitle>All Customers </IndexTitle>
        </IndexTitleWrap>
        <IndexTotal>{keyIndicators?.suppliers}</IndexTotal>
      </IndexItem>
    </Indexes>
  );
};
