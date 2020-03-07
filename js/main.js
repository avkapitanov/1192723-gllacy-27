if ('NodeList' in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
      center: [59.938635, 30.329118],
      zoom: 16,
      controls: []
    }, {
      searchControlProvider: "yandex#search"
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      "<div style=\"color: #FFFFFF; font-weight: bold;\">$[properties.iconContent]</div>"
    ),

    myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: "А вот тут мы и находимся",
      balloonContent: "ул. Большая Конюшенная<br>19/8, Санкт-Петербург"
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/icons/balloon.svg",
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -140]
    });

  myMap.geoObjects
    .add(myPlacemark);
});

document.addEventListener("DOMContentLoaded", function(){
  var sliderNavBtn = document.querySelectorAll(".slider-navigation-item button");
  var sliderNavs = document.querySelectorAll(".slider-navigation-item");
  var sliderItems = document.querySelectorAll(".slider-item");

  sliderNavBtn.forEach(function(sliderBtn) {
    sliderBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      sliderNavs.forEach(function(sliderNav) {
        sliderNav.classList.remove("active");
      });
      evt.target.parentElement.classList.add("active");
      sliderItems.forEach(function(sliderItem) {
        sliderItem.classList.remove("active");
      });
      var activeSlide = document.querySelector(".slider-item:nth-child("+evt.target.dataset.element+")");
      document.body.style["background-color"] = activeSlide.dataset.color;
      activeSlide.classList.add("active");
    })
  });

  var formLink = document.querySelector(".btn-form");
  var popup = document.querySelector(".modal-feedback");
  var formClose = document.querySelector(".feedback-form-close");

  formLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

  formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
});
