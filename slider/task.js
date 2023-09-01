const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
//console.log(sliderItem);
const sliderArrow = document.querySelectorAll('.slider__arrow');
//console.log(sliderArrow);


sliderArrow.forEach((item) => {
  item.addEventListener('click', (event) => {
    if(item.classList.contains('slider__arrow_prev')) {
      let activeIndex = sliderItem.findIndex((value) => value.classList.contains('slider__item_active'));
        sliderItem[activeIndex].classList.remove('slider__item_active');
        //console.log(activeIndex);
        activeIndex = (activeIndex == 0) ? (sliderItem.length - 1) : (activeIndex - 1); //condition ? exprIfTrue : exprIfFalse 
//(Если condition истинно, то возвращается exprIfTrue, иначе возвращается exprIfFalse. 
//Если activeIndex равен 0, то возвращается (sliderItem.length - 1), иначе возвращается (activeIndex - 1))
        sliderItem[activeIndex].classList.add('slider__item_active');
    } else {
      let activeIndex = sliderItem.findIndex((value) => value.classList.contains('slider__item_active'));
        sliderItem[activeIndex].classList.remove('slider__item_active');
        activeIndex = (activeIndex == sliderItem.length - 1) ? 0 : (activeIndex + 1);
        //console.log(activeIndex);
        sliderItem[activeIndex].classList.add('slider__item_active');
    }
  })
})