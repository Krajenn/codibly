import React from "react";
import styles from "./Table.module.sass";

const Table = ({ data, setModalId, setModal, error }) => {
    let display;

    if (error) {
        display = (
            <ul className={styles.ulContainer}>
                <li className={styles.err}>
                    No results found. Error: {error.message}
                </li>
            </ul>
        );
        return display;
    }

    if (data && Array.isArray(data)) {
        display = data.map((item) => {
            let { id, name, year, color } = item;
            return (
                <li
                    key={id}
                    onClick={() => {
                        setModalId(id);
                        setModal(true);
                    }}
                    style={{ backgroundColor: `${color}` }}
                >
                    <p>
                        <span>Id:</span> {id}
                    </p>
                    <p>
                        <span>Name:</span> {name}
                    </p>
                    <p>
                        <span>Year:</span> {year}
                    </p>
                </li>
            );
        });
    } else if (data) {
        display = (
            <li
                onClick={() => {
                    setModalId(data.id);
                    setModal(true);
                }}
                style={{ backgroundColor: `${data.color}` }}
            >
                <p>
                    <span>Id:</span> {data.id}
                </p>
                <p>
                    <span>Name:</span> {data.name}
                </p>
                <p>
                    <span>Year:</span> {data.year}
                </p>
            </li>
        );
    }

    return <ul className={styles.ulContainer}>{display}</ul>;
};

export default Table;
