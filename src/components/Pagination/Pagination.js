import React, { useState } from "react";
import styles from "./Pagination.module.sass";

const Pagination = ({ setSearchParams, page, setPage, total_pages, query }) => {
    const [nextPage, setNextPage] = useState(page + 1);
    const [prevPage, setPrevPage] = useState(page - 1);

    let displayPages = [];
    for (let i = 1; i <= total_pages; i++) {
        displayPages.push(
            <button
                key={i}
                className={page === i ? styles.active : ""}
                onClick={() => {
                    setSearchParams({ page: i });
                    setPage(i);
                    setNextPage(i + 1);
                    setPrevPage(i - 1);
                }}
            >
                {i}
            </button>
        );
    }

    if (!total_pages) return;
    return (
        <div className={styles.pagination}>
            <button
                onClick={() => {
                    if (prevPage < 1) return;
                    setSearchParams({ page: prevPage });
                    setPage(prevPage);
                    setPrevPage(prevPage - 1);
                    setNextPage(nextPage - 1);
                }}
            >
                Prev
            </button>
            {displayPages}
            <button
                onClick={() => {
                    if (nextPage > total_pages) return;
                    setSearchParams({ page: nextPage });
                    setPage(nextPage);
                    setNextPage(nextPage + 1);
                    setPrevPage(prevPage + 1);
                }}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
