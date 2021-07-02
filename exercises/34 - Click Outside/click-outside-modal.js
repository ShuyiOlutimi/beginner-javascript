const cardButtons = document.querySelectorAll('.card button');

const modalInner = document.querySelector('.modal-inner');

modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const imgAlt = card.querySelector('img').alt;
    const desc = card.dataset.description;

    modalInner.innerHTML = `
        <img src=${imgSrc} alt=${imgAlt}>
        <p>${desc}</p>
    `;
    
    modalOuter.classList.add('open')
};

cardButtons.forEach(button =>
    button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
    modalOuter.classList.remove('open');
};

modalOuter.addEventListener('click',
    function(event) {
         const isOutside = event.target.closest('.modal-inner');
        if (!isOutside) {
            closeModal();
        };
    }
);

window.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') {
        closeModal();
    };
}
);