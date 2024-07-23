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
import { createPortal } from "react-dom";
import { ClientGoodsModal } from "../ClientGoodsModal/ClientGoodsModal";
import { useEffect, useState } from "react";

export const Customers = () => {
  const customers = useSelector(selectCustomers);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  function getClientGoods(clientId) {
    dispatch(getClientGoodsThunk(clientId))
      .unwrap()
      .then(() => {
        toast.success(`The customer's goods are received`);
        setModal(true);
      })
      .catch(() => toast.error(`Ooops... Something went wrong!`));
  }

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

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
                {modal &&
                  createPortal(
                    <ClientGoodsModal
                      setModal={setModal}
                      email={customer.email}
                      name={customer.name}
                      spent={customer.spent}
                    />,
                    document.body
                  )}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
    </TableContainer>
  );
};
