import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import { useSelector } from 'react-redux'


// @ts-ignore
const ProductsPagination = ({ products, productsPerPage, setPageNumber, getDisplayRangeNMarginPages }) => {

    
	// @ts-ignore
	const currentTheme = useSelector(state => state.theme.current)

	const pageCount = Math.ceil(products.length / productsPerPage);

	// @ts-ignore
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<>
			<section className="pagination-wrapper">
				<div className="left-side"></div>
				<div className={`product-cards-pagination theme-border-${currentTheme}-light theme-bg-${currentTheme}`}>
					<ReactPaginate
						previousLabel={<AiOutlineCaretLeft />}
						nextLabel={<AiOutlineCaretRight />}
						pageCount={pageCount}
						onPageChange={changePage}
						containerClassName={`paginationButtonsContainer  theme-text-${currentTheme} hover-theme-text-${currentTheme}`}
						pageClassName={`paginationButtons hover-theme-bg-${currentTheme}-darker`}
						previousClassName={`backButton hover-theme-bg-${currentTheme}-darker`}
						nextClassName={`nextButton hover-theme-bg-${currentTheme}-darker`}
						disabledClassName={`paginationDisabledButton theme-text-${currentTheme}-0`}
						activeClassName={`paginationActiveButton theme-bg-${currentTheme}-darker hover-theme-bg-${currentTheme} theme-text-${currentTheme}`}
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
