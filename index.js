const modal = document.getElementById('modal')
const closeButton = document.getElementById('modal-close-btn');
const form = document.getElementById("consent-form")
const modalText = document.getElementById('modal-text')


setTimeout(function () {
    modal.style.display = 'inline'
}, 1500)


closeButton.addEventListener("click", function () {
    modal.style.display = 'none'
})


form.addEventListener("submit", function (e){
    e.preventDefault()
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`
})


