const picture = document.querySelector('.picture');
const nameZ = document.querySelector('.know > h1');
const details = document.querySelector('.details');
const contact = document.querySelector('.contact');
const navLinks = document.querySelectorAll('.navbar_list > li > a');


const showPicture = () => {
    setTimeout(() => {
        picture.style.opacity = "1";
        setTimeout(() => {
            nameZ.style.opacity = "1";
            setTimeout(() => {
                details.style.opacity = "1";
                setTimeout(() => {
                    contact.style.width = 'fit-content';
                    contact.style.opacity = '1';
                    contact.style.padding = '2rem';
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000);
}

window.addEventListener("load", showPicture);


navLinks.forEach(link => {
    link.addEventListener('click', function (e){
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection =   document.getElementById(targetId);

        if(targetSection){
            const scrollMarginTop = 5;
            targetSection.style.scrollMarginTop = `${scrollMarginTop}rem`;

            targetSection.scrollIntoView({
                behavior: "smooth"
            })
        }
    })
})