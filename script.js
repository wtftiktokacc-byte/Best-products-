/* ==========================================
   BEST PRODUCTS - SCRIPT.JS
   Developed for Shahzaib Abbasi
========================================== */

// ==============================
// Loader
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{
            loader.style.display="none";
        },600);

    }

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ==============================
// Navbar Shadow
// ==============================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector(".navbar");

    if(!nav) return;

    if(window.scrollY>50){

        nav.style.background="rgba(0,0,0,.75)";
        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }else{

        nav.style.background="rgba(0,0,0,.35)";
        nav.style.boxShadow="none";

    }

});

// ==============================
// Back To Top
// ==============================

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

// ==============================
// Reveal Animation
// ==============================

function reveal(){

const reveals=document.querySelectorAll(".card,.feature,.about,.hero");

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

// ==============================
// Product Search
// ==============================

const search=document.querySelector(".search-box input");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

// ==============================
// Theme Toggle
// ==============================

const toggle=document.getElementById("themeToggle");

if(toggle){

const saved=localStorage.getItem("theme");

if(saved==="light"){

document.body.classList.add("light-mode");

toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

}

toggle.onclick=()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

localStorage.setItem("theme","light");

toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","dark");

toggle.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};

}

// ==============================
// Counter Animation
// ==============================

const counters=document.querySelectorAll(".stats h3");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats || started) return;

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight-100){

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=Math.max(10, Math.floor(target/40));

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=count+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

}

});

// ==============================
// Console Message
// ==============================

console.clear();

console.log("%cBest Products","font-size:24px;color:#00bfff;font-weight:bold;");
console.log("%cDeveloped for Shahzaib Abbasi","font-size:16px;color:#22c55e;");
console.log("%cAmazon Product Research Specialist","font-size:14px;color:#ffffff;");
