const modal = document.getElementById('modal')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

const closeButton = document.getElementById('modal-close-btn');

closeButton.addEventListener("click", function() {
    modal.style.display = 'none'
})