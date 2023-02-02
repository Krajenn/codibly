import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";
import Search from "../components/Search/Search";
import Table from "../components/Table/Table";
import Pagination from "../components/Pagination/Pagination";
import styles from "./Home.module.sass";
import Modal from "../components/Modal/Modal";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        id: "",
        page: 1,
    });
    const [query, setQuery] = useState(searchParams.get("id"));
    const [page, setPage] = useState(searchParams.get("page"));

    const API = `https://reqres.in/api/products?per_page=5&page=${
        page ? page : 1
    }&id=${query ? query : ""}`;

    const { data, loading, error } = useFetch(API);

    // Modal
    const [modal, setModal] = useState(false);
    const [modalId, setModalId] = useState(5);

    if (loading) return <div>Loading...</div>;

    if (error)
        return (
            <div className={styles.container}>
                <header>
                    <h1
                        onClick={() => {
                            setQuery("");
                            setPage(1);
                            setSearchParams();
                        }}
                    >
                        Codibly task by Konrad Rejentowicz
                    </h1>
                </header>
                <div className={styles.content}>Error: {error.message}</div>
            </div>
        );

    return (
        <div className={styles.container}>
            <header>
                <h1
                    onClick={() => {
                        setQuery("");
                        setPage(1);
                        setSearchParams();
                    }}
                >
                    Codibly task by Konrad Rejentowicz
                </h1>
            </header>
            <div className={styles.content}>
                <Search
                    query={query}
                    setQuery={setQuery}
                    setSearchParams={setSearchParams}
                    setPage={setPage}
                />
                <Table
                    data={data?.data}
                    setModalId={setModalId}
                    setModal={setModal}
                />
                <Pagination
                    setSearchParams={setSearchParams}
                    page={parseInt(page)}
                    setPage={setPage}
                    total_pages={data?.total_pages}
                    query={query}
                />
                {modal && (
                    <Modal
                        data={
                            data?.data.id
                                ? data?.data
                                : data?.data.find((e) => e.id === modalId)
                        }
                        setModal={setModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
