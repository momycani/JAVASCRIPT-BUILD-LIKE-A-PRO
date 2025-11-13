// template_s3chdi9
// service_j7pu9xp
// publicKey wsLuRZgJzGaOG0et9
const scaleFactor = 1/20;

function moveBackground(event) {
    const shapes = document.querySelectorAll (".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}
let contrastToggle = false

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add ("dark-theme");
    }
    
    else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList.add("modal__overlay--visible");
    emailjs
        .sendForm(
            "service_j7pu9xp",
            "template_s3chdi9",
           event.target,
            "wsLuRZgJzGaOG0et9"
        ) .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");              
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at bethkenward3@gmail.com");
            }); 
}
let isModalOpen = false;

function toggleModal() {
    const body = document.body;
    const modal = document.querySelector(".modal");

    if (isModalOpen) {
        isModalOpen = false;
        body.classList.remove("modal--open");
        modal.addEventListener("transitionend", () => {
            modal.style.pointerEvents = "none";
        }, { once: true });
    } else {
        isModalOpen = true;
        modal.style.pointerEvents = "all";
        body.classList.add("modal--open");
    }
}