
// function balletBig(x){
//     x.style.height = '64px';
//     x.style.width = '74px';
// }

// function balletNormal(x){
//     x.style.height = '30px'
//     x.style.width = '40px';
// }



//img  onmouseover="balletBig(this)" onmouseout="balletNormal(this)" class="nav-img" src="images/logo4.png" alt="" width="35px" height="45px"

const src = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
})


src.reveal('.ballet', {origin: 'left'})

