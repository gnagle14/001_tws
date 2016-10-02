// alert('FUCK YEAH');

// http://stackoverflow.com/questions/641857/javascript-window-resize-event
var addEvent = function(object, type, callback) {
    if (object === null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};


var menu            = document.querySelector('.menu'),
    headLeft        = document.querySelector('.head-left'),
    headLeftContent = document.querySelector('.left-content'),
    leftAnim        = false,
    leftAction      = false,
    animDuration    = 666;


function menuAnimation() {
  if (!leftAction) {
    console.log('open');
    headLeft.classList.add('left-open');
    headLeftContent.classList.add('left-is-open');
    leftAction = true;
  } else if (leftAction) {
    console.log('close');
    headLeft.classList.remove('left-open');
    headLeftContent.classList.remove('left-is-open');
    leftAction = false;
  }
}

function menuClick() {
  //  if animation is happening do nothing
  if (!leftAnim) {
    leftAnim = true;
    menuAnimation();
    setTimeout(function(){
      leftAnim = false;
    }, animDuration);
  } else {
    console.log('no click');
  }
}


addEvent(menu, "click", menuClick);

// var leftHead = document.querySelector('.head-left'),
//     conteent = document.querySelector('.content');
//
// function clickity(){
//   console.log('click');
//   leftHead.classList.toggle('open');
//   // conteent.classList.toggle('left-open');
// }
//
// addEvent(leftHead, "click", clickity);
