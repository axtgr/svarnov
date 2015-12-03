'use strict';

module.exports = {
  id: 'kedr-cut-160i',
  link: 'кедр-cut-160i',
  isHot: false,
  shortName: 'КЕДР CUT-160I',
  description: 'Аппарат воздушно-плазменной резки КЕДР CUT-160I самый мощный инверторный источник ручной плазменной резки из линейки, предназначен для разделки любых токопроводящих материалов: мягкие стали, нержавеющие стали, оцинкованные стали, алюминий, медь и различные сплавы. Работа с данным аппаратом отличается высоким качеством и высокой скоростью резки. Бесконтактный поджиг дуги с высокочастотным управлением увеличивает срок службы расходных материалов горелки и позволяет без перерывов резать сетку и поверхности с отверстиями. При режущем токе 160А, аппарат способен справляться с конструкционной сталью толщиной до 50мм, а при толщинах до 40 мм, уверенно чувствует себя даже при продолжительных работах. Для удобства перемещения предусмотрены 4 колеса и тельферные кронштейны (рымы). К аппарату необходимо также подключить компрессор для подачи сжатого воздуха. ',
  specs: [{
    caption: 'Вес',
    value: '9 кг'
  }, {
    caption: 'Диапазон тока резки',
    value: '20-160 А'
  }, {
    caption: 'Толщина реза',
    value: '50 мм'
  }, {
    caption: 'Напряжение сети',
    value: '380 В'
  }, {
    caption: 'Мощность',
    value: '29 кВт'
  }, {
    caption: 'Габариты',
    value: '665x320x630 мм'
  }, {
    caption: 'Режим работы',
    value: '60 ПВ%'
  }],
  images: [
    require('rename?[path]kedr-cut-160i-[name]_160x120.[ext]!magick?-resize 160x120!./main.jpg').replace(/\\/g, '/')
  ]
};
