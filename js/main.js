var elModal = document.querySelector('.modal')
var elModShad = document.querySelector('.modal__shadow')

function fnOpen() {
    elModal.classList.add('open__modal')
    elModShad.style.display = 'block'
}
function fnClose() {
    elModal.classList.remove('open__modal')
    elModShad.style.display = 'none'
}