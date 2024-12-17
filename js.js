const aids = document.getElementById('aids')
const images = document.getElementById('imagez')
const subdad = document.getElementById('subdad')
const screenSize = [window.screen.availWidth, window.screen.availHeight];

/*

 skulle skape nye elementer på interval men det er jo fuckings umulig å få intervallen til å stoppe.
 skill issue, men gidder ikke fikse det for en shitpost

 */

const liz = ['normal', 'multiply','screen','overlay','darken','lighten','color-burn','difference','hue','saturation','luminosity'];
const ln = liz.length
const spawnFab = () => {
    images.style.mixBlendMode =liz[Math.floor(Math.random()*ln)];
    subdad.style.opacity = Math.floor(Math.random()*ln) >= ln - 3 ? 1 : 0;
    //console.log(images.style.mixBlendMode)

}
window.onload = (e) => {
    const fuc = setInterval(spawnFab, Math.floor(250));
};
