let current=0
const pages=document.querySelectorAll('.page')
const music=document.getElementById('music')

function show(i){
  pages.forEach(p=>p.classList.remove('active'))
  pages[i].classList.add('active')
}

function next(){current++;show(current)}
function prev(){current--;show(current)}

function openEnvelope(){
  music.play()
  next()
}

/* corazones flotando */
setInterval(()=>{
  const h=document.createElement('span')
  h.innerHTML='❤️'
  h.style.left=Math.random()*100+'vw'
  document.querySelector('.hearts').appendChild(h)
  setTimeout(()=>h.remove(),6000)
},300)

/* confetti final */
function yesLove(){
  next()
  for(let i=0;i<30;i++){
    const c=document.createElement('span')
    c.innerHTML='💖'
    c.style.position='fixed'
    c.style.left=Math.random()*100+'vw'
    c.style.animation='rise 3s linear'
    document.body.appendChild(c)
  }
}
