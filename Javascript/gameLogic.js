

let cards = document.querySelectorAll('.card');
let flippedCards = [];

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

function flipCard() {
    if (flippedCards.length < 2) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
                // Pair found
                flippedCards.forEach(card => {
                    card.removeEventListener('click', flipCard);
                });
                flippedCards = [];
            } else {
                // Not a pair
                setTimeout(() => {
                    flippedCards.forEach(card => {
                        card.classList.remove('flipped');
                    });
                    flippedCards = [];
                }, 1000);
            }
        }
    }
}
