function removeAllClass () {
    let thAll = document.querySelectorAll('th');

    for (let i = 0; i < thAll.length; i++) {
        thAll[i].classList = ''
    }
};

export default removeAllClass;