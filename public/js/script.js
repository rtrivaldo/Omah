/* the latest like button start */
const like = document.querySelectorAll('.the-latest-swiper span svg.like');

like.forEach(element => {
  element.addEventListener('click', function(){
    element.setAttribute('fill', 'black');
  })
});
/* the latest like button end */

/* the latest swiper start */
new Swiper(".the-latest-swiper", {
    grabCursor: "true",
    /* spaceBetween: "40", */
});
/* the latest swiper end */

/* testimony swiper start */
new Swiper(".testimony-swiper", {
    grabCursor: "true",
    /* spaceBetween: "40", */
});
/* testimony swiper end */


