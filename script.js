
        document.querySelector('.header__menuToggle').addEventListener('click', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
        if(this.classList.contains('is-active')){
            this.classList.remove('is-active');
            document.querySelector('.header__menu').classList.remove('is-active');
        }
        else{
            this.classList.add('is-active');
            document.querySelector('.header__menu').classList.add('is-active');
        }
        })


$('.photo__slider').slick({
    dots: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    nextArrow: '<img class="photo__btn-right" src="img/arrow-right.png" alt=""> ',
    prevArrow: '<img class="photo__btn-left" src="img/arrow-left.png" alt="">',
  });
   
  
$(document).ready(function(){
    $('.books__items').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<img class="books__btn-right" src="img/arrow-right.png" alt="">',
        prevArrow: '<img class="books__btn-left" src="img/arrow-left.png" alt=""> ',
        responsive: [
            {
              breakpoint: 600,
              settings: 'unslick'
            }
          ]
    });

	$(".count_btn").click(function() {
		if(!$(this).hasClass("cannot_btn")) {
			$(this).addClass("cannot_btn");
			if($(this).hasClass("donate")) { var cur_link = 0; } else { var cur_link = 1; }
			if(localStorage.getItem("btn_" + cur_link + "_" + parseInt($(this).attr("data-id"))) == null) {
				var posting = $.post( "/count.php", { 'link': cur_link, 'cur_num': parseInt($(this).attr("data-id")) } );
				localStorage.setItem("btn_" + cur_link + "_" + parseInt($(this).attr("data-id")), 1);
			}
		}
	});
});

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
document.addEventListener('keydown', function(e){
    if(e.key ==  "Escape"){
        const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
    }
})