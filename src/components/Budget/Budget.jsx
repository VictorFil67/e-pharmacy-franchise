import { useSelector } from "react-redux";
import { selectstatisticsResult } from "../../store/statistics/selectors";
import {
  ActionDescription,
  ActionName,
  ActionSum,
  BudgetItem,
  BudgetWrap,
  ContentWrap,
  Title,
  TitleWrap,
  Today,
} from "./Budget.Styled";

export const Budget = () => {
  const statisticsResult = useSelector(selectstatisticsResult);
  console.log(statisticsResult?.income_expenses);

  const budget = statisticsResult?.income_expenses;

  return (
    <BudgetWrap>
      <TitleWrap>
        <Title>Income/Expenses</Title>
      </TitleWrap>
      <ContentWrap>
        <Today>Today</Today>
        <ul>
          {budget &&
            budget.map((item) => (
              <BudgetItem key={item._id}>
                <ActionName $type={item.type}>{item.type}</ActionName>
                <ActionDescription>{item.name}</ActionDescription>
                <ActionSum $type={item.type}>{item.amount}</ActionSum>
              </BudgetItem>
            ))}
        </ul>
      </ContentWrap>
    </BudgetWrap>
  );
};
