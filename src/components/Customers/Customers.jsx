import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableContainer,
  TableWrap,
  Title,
  TitleWrap,
} from "./Customers.styled";
import { selectCustomers } from "../../store/statistics/selectors";
import { getClientGoodsThunk } from "../../store/statistics/operations";
import { toast } from "react-toastify";

export const Customers = () => {
  const customers = useSelector(selectCustomers);

  const dispatch = useDispatch();
  function getClientGoods(clientId) {
    dispatch(getClientGoodsThunk(clientId))
      .unwrap()
      .then(() => {
        toast.success(`The customer's goods are received`);
      })
      .catch(() => toast.error(`Ooops... Something went wrong!`));
  }

  return (
    <TableContainer
    //    class="table-container"
    >
      {" "}
      <TitleWrap>
        <Title>Recent Customers</Title>
      </TitleWrap>
      <TableWrap>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Spent</th>
              <th>Medicine</th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((customer) => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.spent}</td>
                <td>
                  <button onClick={() => getClientGoods(customer._id)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
    </TableContainer>
  );
};
