//心浮动动画
var heart = anime({
  targets: '.main_heart',
  translateY: '20',
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});
var heart = anime({
  targets: '.main_heart_2',
  translateY: '20',
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

//落叶动画
var path1 = anime.path('.cls-1');
anime({
  targets: '.leaves',
  translateX: path1('x'),
  translateY: path1('y'),
  duration:4000,
  opacity:{
    value:0,
    delay:2800,
    duration:1600
  },
  easing:'easeInCubic'
});

//波浪动画
var move = anime({
  targets: '.move',
  translateY: "-370",
  scaleX:'2',
  sclaeY:'0.8',
  duration: 100000,
  easing: 'linear',
});
var wave = anime({
  targets: '.wave',
  rotate:{
    value: 360,
    duration: 5000,
    direction: 'nomal',
  },
  easing: 'linear',
  loop: true
});
var wave2 = anime({
  targets: '.wave2',
  rotate:{
    value: 360,
    duration: 5000,
    direction: 'nomal',
  },
  easing: 'linear',
  loop: true
});

//阴影动画
 var shadow = anime({
  targets: '.shadow',
  scale: '0.7',
  color: '#333',
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

//小点浮动动画
 var p1 = anime({
    targets: '.point_1',
    translateY: '12',
    duration: 1200,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

  var p2 = anime({
    targets: '.point_2',
    translateY: '8',
    duration: 1800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

  var p3 = anime({
    targets: '.point_3',
    translateY: '6',
    duration: 800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

  var p4 = anime({
    targets: '.point_4',
    translateY: '8',
    duration: 1000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

  var p5 = anime({
    targets: '.point_5',
    translateY: '6',
    duration: 800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

  var p6 = anime({
    targets: '.point_6',
    translateY: '6',
    duration: 1800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

  var p7 = anime({
    targets: '.point_7',
    translateY: '6',
    duration: 1200,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

  var p8 = anime({
    targets: '.point_8',
    translateY: '10',
    duration: 1800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

  var p9 = anime({
    targets: '.point_9',
    translateY: '12',
    duration: 1800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

