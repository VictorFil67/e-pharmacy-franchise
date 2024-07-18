import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// import { Items } from "./Items";
import { selectShops } from "../../store/shops/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  setPage,
  setPageCount,
  setShopPage,
  setShopPageCount,
  //   setpageCount,
} from "../../store/shops/shopSlise";

export const PaginatedItems = ({ itemsPerPage, activeTab }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();
  const { startPage, endPage, shopStartPage, shopEndPage, total, shopTotal } =
    useSelector(selectShops);

  //   const total = useSelector(selectTotal);
  console.log(total);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const pageCount =
    activeTab === "All medicine"
      ? Math.ceil(total / itemsPerPage)
      : Math.ceil(shopTotal / itemsPerPage);
  useEffect(() => {
    dispatch(setPageCount(pageCount));
    dispatch(setShopPageCount(pageCount));
  }, [dispatch, pageCount]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    let newOffset;
    if (activeTab === "All medicine") {
      newOffset = startPage
        ? 0
        : endPage
        ? pageCount
        : (event.selected * itemsPerPage) % total;
    } else if (activeTab === "Drug store") {
      newOffset = shopStartPage
        ? 0
        : shopEndPage
        ? pageCount
        : (event.selected * itemsPerPage) % shopTotal;
    }

    activeTab === "All medicine"
      ? dispatch(setPage(event.selected + 1))
      : dispatch(setShopPage(event.selected + 1));

    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    console.log(newOffset);
    setItemOffset(newOffset);
  };
  return (
    <>
      {/* <Items currentItems={currentItems} active={active} shopId={shopId} /> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="pagination"
        pageClassName="page"
        activeClassName="activePage"
        previousClassName="previous"
        nextClassName="next"
        previousLinkClassName="previousLink"
        nextLinkClassName="nextLink"
      />
    </>
  );
};
