const modalBtns = document.querySelectorAll('#modalOpen')
const modals = document.querySelectorAll('#modal')

const body = document.body

function openModal(element) {
    element.classList.add('active')
    body.classList.add('locked')
}

function closeModal(e) {
    if (e.target.classList.contains('modal__close')) {
        e.target.closest('.modal').classList.remove('active')
    }
    body.classList.remove('locked')
}

modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modal

        modals.forEach(modal => {
            if (modal.dataset.modal == data)
                openModal(modal)
        })
    })
})

modals.forEach(modal => {
    modal.addEventListener('click', e => closeModal(e))
})

window.addEventListener('keydown', e => {
    modals.forEach(modal => {
        if (e.key === "Escape" && modal.classList.contains('active')) {
            modal.classList.remove('active')
            body.classList.remove('locked')
        }
    })
})