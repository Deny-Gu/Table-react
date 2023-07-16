import removeAllClass from "./removeAllClass";

function Search ( {setUsersData, setCopyUsersData, originalUsersData} ) {
    let searchInput = document.querySelector('#search-input');
    let userDataSearch = [];

    removeAllClass();

    if (searchInput.value === '') {
        setUsersData(originalUsersData)
        setCopyUsersData(originalUsersData)
    } else {
        originalUsersData.forEach((user) => {
            for (let keys in user) {
                if (String(user[keys]).includes(searchInput.value)) {
                    userDataSearch.push(user)
                    break;
                }
            }
        });

        setUsersData(userDataSearch)
        setCopyUsersData(userDataSearch)
    };

        searchInput.value = ''
    }


export default Search;