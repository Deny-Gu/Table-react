function viewAddUserForm () {
    const formAddUser = document.querySelector('.add-user-form');

    if (formAddUser.style.display !== 'flex') {
        formAddUser.style.display = 'flex'
    } else {
        formAddUser.style.display = 'none'
    }
};

export default viewAddUserForm;