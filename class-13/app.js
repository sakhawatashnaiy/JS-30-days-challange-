function debounce (func , waith = 20 immediate = true){
      var timeout;
        return function(){
              var context = this.args = arguments;
               var later = function(){
                  timeout = null;
                     if(!immediate) func.apply(context,args)
               }
               var callnow = immediate && !timeout;
               clearTimeout(timeout);
               timeout = setTimeout(later, waith);
                if(callnow) func.apply(context,args);
              
        }
};
    const sliderImage = document.querySelectorAll('.slider-in');
    function chekSlide(){
          sliderImage.forEach(sliderImage=>{
              const slideInAt = (window.scrolly+innerHeight)-sliderImage.height/2;
              const imageBottom = sliderImage.offsettop+sliderImage.height;
              const isHalfShown = slideInAt > sliderImage.offsetTop;
              const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
          
          })  
    }
         window.addEventListener('scroll', debounce(chekSlide))
      