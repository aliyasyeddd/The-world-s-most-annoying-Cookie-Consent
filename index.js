const modal = document.getElementById('modal')
const closeButton = document.getElementById('modal-close-btn');
const form = document.getElementById("consent-form")


setTimeout(function () {
    modal.style.display = 'inline'
}, 1500)



closeButton.addEventListener("click", function () {
    modal.style.display = 'none'
})



form.addEventListener("submit", function (e) {
    e.preventDefault()
})