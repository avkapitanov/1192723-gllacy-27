ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938635, 30.329118],
      zoom: 16,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: 'А вот тут мы и находимся',
      balloonContent: 'ул. Большая Конюшенная<br>19/8, Санкт-Петербург'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/balloon.svg',
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -140]
    });

  myMap.geoObjects
    .add(myPlacemark);
});
