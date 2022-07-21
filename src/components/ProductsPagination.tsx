import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import ReactPaginate from "react-paginate";



// @ts-ignore
const ProductsPagination = ({ products, productsPerPage, setPageNumber, getDisplayRangeNMarginPages }) => {

    




	const pageCount = Math.ceil(products.length / productsPerPage);

	// @ts-ignore
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<>
			<section className="pagination-wrapper">
				<div className="left-side"></div>
				<div className="product-cards-pagination">
					<ReactPaginate
						previousLabel={<AiOutlineCaretLeft />}
						nextLabel={<AiOutlineCaretRight />}
						pageCount={pageCount}
						onPageChange={changePage}
						containerClassName={"paginationButtonsContainer"}
						pageClassName={"paginationButtons"}
						previousClassName={"backButton"}
						nextClassName={"nextButton"}
						disabledClassName={"paginationDisabledButton"}
						activeClassName={"paginationActiveButton"}
						breakLabel={"..."}
						breakClassName={"breakLabel"}
						pageRangeDisplayed={getDisplayRangeNMarginPages().displayRange}
						marginPagesDisplayed={getDisplayRangeNMarginPages().marginPages}
					/>
				</div>
			</section>
		</>
	);
};

export default ProductsPagination;
