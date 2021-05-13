// document.addEventListener(scroll, navBackground)

// function navBackground(e) {
//     e.preventDefault();
//     const nav = document.querySelector('.nav-expand-lg');
//     if(document.scroll >= 50) {
//         nav.className = 'scroll'
//     }
// }

// window.onscroll = () => {
//     const nav = document.querySelector('#navbar');
//     if(this.scrollY <= 50) nav.className = ''; else nav.className = 'scroll';
// };

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        var $color = $(".potato")
        $nav.toggleClass('scrolled', $(this).scrollTop() > $color.height());
    });
});