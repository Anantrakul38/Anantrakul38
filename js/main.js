/*-----------------------------*\    
            - Loading Page
\*-----------------------------*/
/* window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');

  document.querySelector('.loading').classList.add('loading--hidden');

  document.querySelector('.loading').addEventListener('transitionend', () => {
    document.body.removeChild(document.querySelector('.loading'));
  });
}); */



/*-----------------------------*\    
            - Sweetalert
\*-----------------------------*/
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

/*-----------------------------*\    
            - Toggle Menu
\*-----------------------------*/
const btnToggleMenu = document.querySelector('.toggle-menu');
const navHeader = document.querySelector('.header-left');

btnToggleMenu.addEventListener('click', ()=> {
    btnToggleMenu.classList.toggle('active');
    navHeader.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=> {
    btnToggleMenu.classList.remove('active');
    navHeader.classList.remove('menu-open');
}));


/*-----------------------------*\    
            - Active Navbar
\*-----------------------------*/
const sectionEl = document.querySelectorAll('.section');
const navlinkEl = document.querySelectorAll('.nav__link');

let currentSection = 'home';
window.addEventListener('scroll', () => {
  sectionEl.forEach(sectionEl => {
    if(window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 3)) {
      currentSection = sectionEl.id;
    }
  });
  navlinkEl.forEach(navlinkEl => {
    if(navlinkEl.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active');
      navlinkEl.classList.add('active');
    }
  });
});


/*-----------------------------*\    
            - Button Topbar
\*-----------------------------*/
let calcScrollValue = () => {
  let scrollProgress = document.getElementById('backtotop');
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if(pos > 200) {
    scrollProgress.classList.add('active');
  } else {
    scrollProgress.classList.remove('active');
  }

  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#005ed7 ${scrollValue}%, #eaedf2 ${scrollValue}%)`;

};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


/*-----------------------------*\    
            - Swiper Projects
\*-----------------------------*/
const swiper = new Swiper(".projects-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
     autoplay: {
        delay: 10000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,	
      }, 
  });


/*-----------------------------*\    
            - Typed 
\*-----------------------------*/
  const typed = new Typed('.animate', {
    strings: ["Web Developer"],
    typeSpeed: 100,
    backSpeed: 80,
    startDelay: 1000,
    backDelay: 1500,
    loop: true
});


/*-----------------------------*\    
            - SmtpJS
\*-----------------------------*/
function sendEmail() {
  const namebox = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const body = "Name: " + namebox + "<br/> Email: " + email + "<br/> Phone: " + phone + "<br/> Subject: " + subject + "<br/> Message: " + message;

  Email.send({
        SecureToken : "533ea1a6-3d0a-4851-8e9b-6c3153a09f8d", 
        To : 'anantrakul38@gmail.com',
        From : "anantrakul38@gmail.com",
        Subject : subject,
        Body : body 
    }).then(
    message => {
      if(message == "OK") {
        Toast.fire({
          icon: 'success',
          title: 'Send Email Success'
        });
      }else {
        Toast.fire({
          icon: 'error',
          title: 'Send Email Fail!!'
        });
      }
  }); 
  document.getElementById('formbox').reset();
};
