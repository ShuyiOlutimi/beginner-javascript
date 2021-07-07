const terms = document.querySelector('.terms-and-conditions');

const button = document.querySelector('.accept');

// Intersection observer
const ob = new IntersectionObserver(termsScrollFinished ,
    {
        root: terms,
        threshold:  1,
    }
);

ob.observe(terms.lastElementChild);

function termsScrollFinished(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        ob.unobserve(terms.lastElementChild);
    }  
};

