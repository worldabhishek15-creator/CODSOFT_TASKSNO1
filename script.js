const menuBtn=document.querySelector(".menu-btn"),nav=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const form=document.getElementById("contactForm");
form.addEventListener("submit",e=>{
 e.preventDefault();
 const name=document.getElementById("name"),email=document.getElementById("email"),message=document.getElementById("message"),status=document.getElementById("formStatus");
 let ok=true;
 document.querySelectorAll("small").forEach(x=>x.textContent="");
 if(name.value.trim().length<2){name.nextElementSibling.textContent="Please enter your name.";ok=false}
 if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value.trim())){email.nextElementSibling.textContent="Please enter a valid email.";ok=false}
 if(message.value.trim().length<10){message.nextElementSibling.textContent="Message should be at least 10 characters.";ok=false}
 if(ok){status.textContent="Thanks! Your message has been validated. Connect via email/LinkedIn to send it.";form.reset()}
});
