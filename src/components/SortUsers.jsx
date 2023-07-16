import removeAllClass from "./removeAllClass";

function SortUsers ( event, {usersData, setUsersData, copyUsersData} ) {
    const copyData = usersData.concat();

    if (event.target) {
        if (event.target.className === '') {
            removeAllClass()
            event.target.classList.add('min-to-max');
            const sortData = copyData.sort((a, b) => {
                if (a[event.target.dataset.name] < b[event.target.dataset.name])
                    return -1;
                if (a[event.target.dataset.name] > b[event.target.dataset.name])
                    return 1;
                return 0;
            });
            setUsersData(sortData)
        } else if (event.target.className === 'min-to-max') {
            event.target.classList.remove('min-to-max');
            event.target.classList.add('max-to-min');
            const sortData = copyData.sort((a, b) => {
                if (b[event.target.dataset.name] < a[event.target.dataset.name])
                    return -1;
                if (b[event.target.dataset.name] > a[event.target.dataset.name])
                    return 1;
                return 0;
            });
            setUsersData(sortData)
        } else {
            event.target.classList.remove('min-to-max');
            event.target.classList.remove('max-to-min');

            setUsersData(copyUsersData)
        }
    }
}

export default SortUsers;