import React from "react";
import styles from "./Search.module.sass";

const Search = ({ query, setQuery, setSearchParams, setPage }) => {
    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.search}
                type="text"
                placeholder="Search by id"
                onChange={(event) => {
                    event.target.value = event.target.value.replace(/\D/g, "");
                    setQuery(event.target.value);
                    setSearchParams({ id: event.target.value, page: 1 });
                    setPage(1);
                }}
                value={query ? query : ""}
            />
        </div>
    );
};

export default Search;
