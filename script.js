// bloqueio inspeção
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (["F12"].includes(e.key)) e.preventDefault();
  if (e.ctrlKey && e.shiftKey && ["I","C"].includes(e.key)) e.preventDefault();
  if (e.ctrlKey && ["U","S"].includes(e.key)) e.preventDefault();
});

const correctKey = "2328";
const login = document.getElementById("login");
const app = document.getElementById("app");
const loginBtn = document.getElementById("loginBtn");
const keyInput = document.getElementById("keyInput");
const loginMsg = document.getElementById("loginMsg");

loginBtn.addEventListener("click", () => {
  if (keyInput.value.trim() === correctKey) {
    loginBtn.classList.add("logged-in");
    login.style.opacity = 0;
    setTimeout(() => {
      login.style.display = "none";
      app.style.display = "block";
      document.body.classList.add("app-loaded");
    }, 350);
  } else {
    loginMsg.textContent = "Key incorreta!";
  }
});

const tabNormal = document.getElementById("tabNormal");
const tabMax = document.getElementById("tabMax");
const maxExtra = document.getElementById("maxExtra");
const injetarNormal = document.getElementById("injetarNormal");
const injetarMax = document.getElementById("injetarMax");

const slider = document.getElementById("slider");
const barra = document.getElementById("barra");
const percent = document.getElementById("percent");
const sliderSuav = document.getElementById("slider-suav");
const barraSuav = document.getElementById("barra-suav");
const percentSuav = document.getElementById("percent-suav");

function resetSliders(){
  slider.value = 50; barra.style.width = "50%"; percent.textContent = "50%";
  sliderSuav.value = 50; barraSuav.style.width = "50%"; percentSuav.textContent = "50%";
}

function setTab(normal){
  resetSliders();
  if(normal){
    tabNormal.classList.add("active");
    tabMax.classList.remove("active");
    maxExtra.style.display = "none";
    injetarNormal.style.display = "inline-block";
    injetarMax.style.display = "none";
  } else {
    tabNormal.classList.remove("active");
    tabMax.classList.add("active");
    maxExtra.style.display = "block";
    injetarNormal.style.display = "none";
    injetarMax.style.display = "inline-block";
  }
}
tabNormal.addEventListener("click",()=>setTab(true));
tabMax.addEventListener("click",()=>setTab(false));
setTab(true);

slider.addEventListener("input",()=>{barra.style.width=slider.value+"%";percent.textContent=slider.value+"%";});
sliderSuav.addEventListener("input",()=>{barraSuav.style.width=sliderSuav.value+"%";percentSuav.textContent=sliderSuav.value+"%";});

function toggleInjetar(button, appScheme){
  let injetado = false;
  button.addEventListener("click",()=>{
    if(!injetado){
      button.textContent="INJETADO";
      button.style.background="var(--green)";
      button.style.boxShadow="0 0 16px var(--green)";
      injetado=true;
      window.location.href=appScheme;
    } else {
      button.textContent="INJETAR";
      button.style.background="#555";
      button.style.boxShadow="0 8px 0 rgba(0,0,0,0.35)";
      injetado=false;
    }
  });
}

toggleInjetar(injetarNormal,"freefire://");
toggleInjetar(injetarMax,"freefiremax://");
