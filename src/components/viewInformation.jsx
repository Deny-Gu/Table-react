function viewInformation (user, userDataInformation, setUserDataInformation) {

    const divUserInformation = document.querySelector('.user-information')

    let userInformation = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        description: user.description,
        city: user.address.city,
        streetAddress: user.address.streetAddress,
        zip: user.address.zip

    }

    setUserDataInformation(userInformation);

    if (divUserInformation.style.display !== 'flex') {
        divUserInformation.style.display = 'flex'
    }

};

export default viewInformation;