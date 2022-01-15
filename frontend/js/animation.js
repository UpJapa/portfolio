// function typing



const Animation = {

    typing: function() {
        const stringTitle =  document.querySelector("#typing");
        let match = stringTitle.innerHTML.replace(/&amp;/g, '&')
        match = match.split('')
        stringTitle.innerHTML = '';

        match.forEach((e, i) => {
            setTimeout(() => {
                stringTitle.innerHTML += e
            }, i * 100)
        })
        
    },
    show_hide_target: function(){
        
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4 );
        const target = document.querySelectorAll("[data-animation]")
        console.log(windowTop)
        target.forEach(function(element){
            if((windowTop) > element.offsetTop ){
                element.classList.add("animation")
            }else{
                element.classList.remove("animation")
            }
        })
    }
}

// incia a funcão de mostrar apos roda o scroll
window.addEventListener("scroll", Animation.show_hide_target)

// inicia a função digitando
window.addEventListener("load", Animation.typing)


