'use strict';

module.exports = {
  id: 'kedr-cut-40',
  link: 'кедр-cut-40',
  isHot: false,
  shortName: 'КЕДР CUT-40',
  description: 'Аппарат воздушно-плазменной резки КЕДР CUT-40, 220В предназначен для плазменной резки любых токопроводящих материалов: мягкие стали, нержавеющие стали, оцинкованные стали, алюминий, медь и различные сплавы. Работа с данным аппаратом отличается высоким качеством и высокой скоростью резки. Максимальная толщина разделительного реза конструкционной стали составляет 12 мм. Питается от обычной сети 220В, что обеспечивает возможность работы на данном аппарате практически везде. К аппарату необходимо также подключить компрессор для подачи сжатого воздуха. ',
  specs: [{
    caption: 'Вес',
    value: '9 кг'
  }, {
    caption: 'Диапазон тока резки',
    value: '15-40 А'
  }, {
    caption: 'Толщина реза',
    value: '12 мм'
  }, {
    caption: 'Напряжение сети',
    value: '220 В'
  }, {
    caption: 'Мощность',
    value: '6,6 кВт'
  }, {
    caption: 'Габариты',
    value: '380x152x305 мм'
  }, {
    caption: 'Режим работы',
    value: '60 ПВ%'
  }],
  images: [
    require('rename?[path]kedr-cut-40-[name]_160x120.[ext]!magick?-resize 160x120!./main.jpg').replace(/\\/g, '/')
  ]
};