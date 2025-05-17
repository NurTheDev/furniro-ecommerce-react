import React from 'react';

function Pagination({setPage, page, total, itemsPerPage, classname}) {
    const totalPages = Math.ceil((total || 0) / (itemsPerPage || 1));
    return (
        <div className={`join flex justify-center items-center w-full lg:gap-x-5 ${classname}`}>
            <button
                className="join-item btn btn-square !px-8"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                Prev
            </button>
            {[...Array(7)].map((_, i) => (
                <button
                    key={i}
                    className={`join-item btn-square btn ${page === i + 1 ? 'btn-primary' : ''}`}
                    onClick={() => setPage(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
            <button
                className="join-item btn btn-square !px-8"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;