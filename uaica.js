const inifr = [
    {tit:'Joueur 1',now:'Le joueur 1 joue un tour.',dep:0,end:'',pic:'inip1.png'},
    {tit:'Joueur 2',now:'Le joueur 2 joue un tour.',dep:0,end:'',pic:'inip2.png'},
    {tit:'Joueur 3',now:'Le joueur 3 joue un tour.',dep:0,end:'',pic:'inip3.png'},
    {tit:'Joueur 4',now:'Le joueur 4 joue un tour.',dep:0,end:'',pic:'inip4.png'},
    {tit:'L\' homme papilon',now:'L\'homme papillon joue un tour.',dep:3,end:'Avancez le marqueur Menace d\'autant de cases que le nombre de jetons Fatalité présents sur le pont de plus faible valeur +1.',pic:'iniboss1.png'},
    {tit:'L\'envahisseur martien',now:'L\'envahisseur martien joue un tour.',dep:0,end:'',pic:'iniboss2.png'},
    {tit:'La grenouille de Loveland',now:'La grenouille de Loveland joue un tour.',dep:3,end:'Infligez 1 dégat à chaque combattant adverse adjacent à la grenouille de Loveland.<br/>Ajoutez 1 carte initiative **La grenouille de Loveland frappe encore** au deck initiative lorsque celui-ci est mélangé',pic:'inisbir1.png'},
    {tit:'Le Blob',now:'Le Blob joue un tour.',dep:3,end:'Placez 1 jeton Acide sur la case du Blob s\'il n\'y en a pas déjà un.',pic:'inisbir2.png'},
    {tit:'La reine fourmi',now:'La reine fourmi joue un tour.',dep:0,end:'',pic:'inisbir3.png'},
    {tit:'Le diable de Jersey',now:'Le diable de Jersey joue un tour.',dep:0,end:'',pic:'inisbir4.png'},
    {tit:'Le gorille des marais',now:'Le gorille des marais joue un tour.',dep:0,end:'',pic:'inisbir5.png'},
    {tit:'Tarantula',now:'Tarantula joue un tour.',dep:0,end:'',pic:'inisbir6.png'},
    {tit:'Vague d\'invasion martienne 1',now:'',dep:0,end:'',pic:'inimarwave.png'},
    {tit:'Vague d\'invasion martienne 2',now:'',dep:0,end:'',pic:'inimarwave.png'},
    {tit:'Vague d\'invasion martienne 3',now:'',dep:0,end:'',pic:'inimarwave.png'},
    {tit:'Vague d\'invasion martienne 4',now:'',dep:0,end:'',pic:'inimarwave.png'},
    {tit:'Etrange phéromone de la reine fourmi',now:'',dep:0,end:'',pic:'inisbir3.png'},
    {tit:'Etrange phéromone de la reine fourmi',now:'',dep:0,end:'',pic:'inisbir3.png'},
    {tit:'Etrange phéromone de la reine fourmi',now:'',dep:0,end:'',pic:'inisbir3.png'},
    {tit:'La grenouille de Loveland frappe encore',now:'',dep:0,end:'',pic:'inisbir1.png'},
    {tit:'La grenouille de Loveland frappe encore',now:'',dep:0,end:'',pic:'inisbir1.png'},
    {tit:'La grenouille de Loveland frappe encore',now:'',dep:0,end:'',pic:'inisbir1.png'}
];


const edgeThreshold = 30, minSwipeDistance = 50; // px to qualify as a swipe
let startX = 0, startY = 0;
document.addEventListener('touchstart', function(e) { if (e.touches.length !== 1) return; startX = e.touches[0].clientX; startY = e.touches[0].clientY; }, { passive: true });
document.addEventListener('touchend', function(e) { if (e.changedTouches.length !== 1) return; const endX = e.changedTouches[0].clientX, endY = e.changedTouches[0].clientY, deltaX = endX - startX, deltaY = endY - startY;
  if (startY <= edgeThreshold && deltaY > minSwipeDistance) {
  //Swipe form top edge
    alert ('Swipe from TOP edge detected');  }
  if (startY >= window.innerHeight - edgeThreshold && deltaY < -minSwipeDistance) {
  //Swipe form bottom edge
    alert ('Swipe from BOTTOM edge detected');  }    
  // Swipe from left edge
  if (startX <= edgeThreshold && deltaX > minSwipeDistance) {
    alert('Swipe from LEFT edge detected'); }
  // Swipe from right edge
  else if (startX >= window.innerWidth - edgeThreshold && deltaX < -minSwipeDistance) {
    alert('Swipe from RIGHT edge detected'); }
  }, { passive: true });


  function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen(); } 
  else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen(); }
  else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen(); }
  document.getElementById("Fullscreen").style.visibility="hidden";}
  if(!((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height))) {
    //Not in fullscreen : display button to switch !
    document.getElementById("Fullscreen").style.visibility="visible"; }
