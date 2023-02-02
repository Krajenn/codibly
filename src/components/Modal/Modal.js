import React from "react";
import styles from "./Modal.module.sass";

const Modal = ({ data, setModal }) => {
    return (
        <div
            className={styles.container}
            onClick={() => {
                setModal(false);
            }}
        >
            <div
                className={styles.content}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <button
                    className={styles.closeModal}
                    onClick={() => {
                        setModal(false);
                    }}
                >
                    X
                </button>
                <p>
                    <span>Id:</span> {data.id}
                </p>
                <p>
                    <span>Name:</span> {data.name}
                </p>
                <p>
                    <span>Year:</span> {data.year}
                </p>
                <p>
                    <span>Color:</span> {data.color}
                </p>
                <p>
                    <span>Pantone_value:</span> {data.pantone_value}
                </p>
            </div>
        </div>
    );
};

export default Modal;
