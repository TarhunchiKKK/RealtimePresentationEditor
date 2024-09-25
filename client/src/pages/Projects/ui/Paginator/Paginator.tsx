import ReactPaginate from "react-paginate";
import { usePresentations } from "../../hooks";
import {
    paginatorBreakLabel,
    paginatorNextLabel,
    paginatorPreviousLabel,
    paginatorRangeDisplayed,
} from "../../constants";

export function Paginator() {
    const { handlePageChange, pagesCount } = usePresentations();

    return (
        <>
            {pagesCount && (
                <div className="flex flex-row justify-center items-center">
                    <ReactPaginate
                        pageCount={pagesCount}
                        onPageChange={handlePageChange}
                        breakLabel={paginatorBreakLabel}
                        nextLabel={paginatorNextLabel}
                        previousLabel={paginatorPreviousLabel}
                        pageRangeDisplayed={paginatorRangeDisplayed}
                        renderOnZeroPageCount={null}
                        className="flex flex-row justify-between items-center gap-4 mt-16"
                    />
                </div>
            )}
        </>
    );
}
