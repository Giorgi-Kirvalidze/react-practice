import React, { useEffect, useState } from 'react'
import styles from "./Paginate.module.css";

export default function Paginate({paginateOptions: {perPage, numberOfResults}, pageChange }) {
    const [pages, setPages] = useState([])
    const [activePage, setActivePage] = useState(0)

    useEffect(() => {
        if(numberOfResults && perPage) {
            const numberOfPages = numberOfResults / perPage;
            setPages((pages) => [...pages, ...Array.from({length: numberOfPages}, (_, i) => i + 1)]);
        }
    }, [])

    function setPage(page) {
        setActivePage(page);
    }

    function handlePageChange(page) {
        pageChange(page)
        setPage(page)
    }

    return (
        <div className={styles.pageWrapper}>
             {  pages && pages.length > 0 &&
                pages.map((p,i) => 
                <div key={p}> 
                    <button 
                        className={activePage === i ? styles.active : ''} 
                        onClick={() => handlePageChange(i)} 
                        type='button'>{p}
                    </button>
                </div>)
            }
        </div>
    )
}

