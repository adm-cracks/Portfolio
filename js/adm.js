/*readmore */
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnText.style.color = "green";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnText.style.color = "blue";

    }
}


/*scroll to top*/

// Get the button:
let mybutton = document.getElementById("myBtn2");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*d-mode */

const checkbox = document.getElementById('checkbox');


checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})


/* view on animations */

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

/*view animation left */

function revealeft() {
    var reveals = document.querySelectorAll(".revealeft");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealeft);



$('#loginModal').on('show.bs.modal', function(e) {
    $('body').addClass('test');
});



/*preload*/





const $el = document.querySelector(".user-card");

setTimeout(() => {
    $el.classList.remove("skeleton");
    $el
        .querySelectorAll(".hide-text")
        .forEach((el) => el.classList.remove("hide-text"));
}, 3000);