const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".nextBtn");
const openBtn = document.getElementById("openBtn");
const typing = document.getElementById("typing");

let currentPage = 0;

const message = `Every friendship is a beautiful journey...
Some people come into our lives and become unforgettable.

Tanu, this little surprise is specially made for you. 💖`;

function showPage(index){
    pages.forEach(page => page.classList.remove("active"));
    pages[index].classList.add("active");
}

function nextPage(){
    currentPage++;

    if(currentPage >= pages.length){
        currentPage = pages.length-1;
        return;
    }

    showPage(currentPage);
}

openBtn.addEventListener("click",()=>{
    nextPage();
    typeWriter();
});

nextBtns.forEach(btn=>{
    btn.addEventListener("click",nextPage);
});

let i=0;

function typeWriter(){

typing.innerHTML="";

const timer=setInterval(()=>{

typing.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

}

},35);

}
