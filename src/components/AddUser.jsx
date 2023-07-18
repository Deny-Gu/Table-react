import viewAddUserForm from "./viewAddUserForm";

function AddUser  ({ setUsersData, setCopyUsersData, originalUsersData , setOriginalUsersData }) {
    const inputId = document.querySelector('.add-user-form #user-id');
    const inputFirstname = document.querySelector('.add-user-form #user-first-name');
    const inputLastname = document.querySelector('.add-user-form #user-last-name');
    const inputEmail = document.querySelector('.add-user-form #user-email');
    const inputPhone = document.querySelector('.add-user-form #user-phone');

    let user = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        description: '',
        address: {
            city: '',
            streetAddress: '',
            zip: ''
        }

    }

    user.id = Number(inputId.value);
    user.firstName = inputFirstname.value;
    user.lastName = inputLastname.value;
    user.email = inputEmail.value;
    user.phone = inputPhone.value;

    originalUsersData.unshift(user)
    let newArr = originalUsersData.concat()
    setOriginalUsersData(newArr)
    setUsersData(originalUsersData)
    setCopyUsersData(originalUsersData)

    inputId.value = '';
    inputFirstname.value = '';
    inputLastname.value = '';
    inputEmail.value = '';
    inputPhone.value = '';

    viewAddUserForm();
}

export default AddUser;