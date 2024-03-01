//   document.addEventListener('DOMContentLoaded', function() {
//     ScrollReveal().reveal('.scroll-reveal1', {
//       delay: 200,
//       distance: '100px',
//       easing: 'ease-in',
//       origin: 'left'
//     });
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     ScrollReveal().reveal('.scroll-reveal2', {
//       delay: 200,
//       distance: '80px',
//       easing: 'ease-in',
//     //   origin: 'right'
//     });
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     ScrollReveal().reveal('.scroll-reveal3', {
//       delay: 200,
//       distance: '100px',
//       easing: 'ease-in',
//       origin: 'right'
//     });
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     ScrollReveal().reveal('.scroll-reveal4', {
//       delay: 200,
//       distance: '100px',
//       easing: 'ease-in',
//       origin: 'top'
//     });
//   });

window.sr = ScrollReveal({ reset: true});

sr.reveal('.scroll-reveal1', {
    // rotate: { x: 100, y:100, z:100},
    distance: '200px',
    duration: 2000,
    origin: 'left',
})

sr.reveal('.scroll-reveal2', {
    // rotate: { x:100, y:50, z:100},
    distance: '200px',
    duration: 2000,
    origin: 'bottom',
})

sr.reveal('.scroll-reveal3', {
    // rotate: { x:0, y:200, z:0},
    distance: '200px',
    duration: 2000,
    origin: 'right',
})

sr.reveal('.scroll-reveal4', {
    // rotate: { x:200, y:0, z:100},
    distance: '200px',
    duration: 2000,
    origin: 'top',
})