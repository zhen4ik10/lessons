const icon = document.querySelector(".icon-menu");
icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('open-menu');
});

const iconSearch = document.querySelector(".form__button")
iconSearch.addEventListener('click', function () {
    document.documentElement.classList.toggle("open-input")
})

// const sections = document.querySelectorAll("section")
// const main = document.querySelector("main")

// const observer = new IntersectionObserver(
//     entries => {
//     entries.forEach(entry => {
//         // console.log("show");
//         if (!entry.isIntersecting) {
//             entry.target.classList.toggle("show")
//             console.log("Done");
//         } else {
//             observer.disconnect(entry.target)   
//             console.log("error");
//         }
//     })
//     },
//     {
//         rootMargin: `-20px`,
//         threshold: 1,
//     }
// ) 

// sections.forEach(section => {
//     observer.observe(section)
// })
// console.log(sections);
window.onload = () => {

    const sections = document.querySelectorAll("section")
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    let showSection = entry.target
                    console.log(entry.target);
                    showSection.classList.toggle("show", entry.isIntersecting)
                    // observer.unobserve(showSection)
                })
            },
            {
                // rootMargin: "100px",
                threshold: .05,
            }
        )
    
    sections.forEach(section => {
        observer.observe(section)
    })
}
