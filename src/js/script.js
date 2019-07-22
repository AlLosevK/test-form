function dodajAktywne(elem) {
    var row = document.getElementsByClassName('.form__row')
    for (i = 0; i < row.length; i++) {
        row[i].classList.remove('is-visible');
    }
    elem.classList.add('is-visible');
}
