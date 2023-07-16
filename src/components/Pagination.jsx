const Pagination = ({ pages, numCurrentPage }) => {
    return (
        <div>
            {pages.map((page) => {
                return (
                <button key={page} onClick={ () => { numCurrentPage(page) } }>{page}</button>
                )
            })}
        </div>
    )
};

export default Pagination;