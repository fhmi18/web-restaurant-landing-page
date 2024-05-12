let items = document.querySelectorAll('.show-animate');

window.onscroll = () => {
    let windowBottom = window.scrollY + window.innerHeight;
    items.forEach(item => {
        let top = window.scrollY;
        let offset = item.offsetTop - 300;
        let height = item.offsetHeight;
        let bottom = offset + height;
        if ((top > offset && top < bottom) || (windowBottom > offset && windowBottom < bottom)) {
            item.classList.add('show-animate');
        } else {
            item.classList.remove('show-animate');
        }
    })
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));