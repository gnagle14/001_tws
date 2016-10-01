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




//  Menu Action

var
    menu = document.querySelector('.menu'),
    sbLeft = document.querySelector('.sb-l'),
    sbLeftContent = document.querySelector('.sb-l-content'),
    menuAnim = false,
    menuOpen = false;

function menuAction() {
  if (!menuOpen) {
    menuOpen = true;
    sbLeft.classList.add('open-left');
    sbLeftContent.classList.add('open-content-left');
  }else if (menuOpen){
    menuOpen = false;
    sbLeft.classList.remove('open-left');
    sbLeftContent.classList.remove('open-content-left');
  }
}

function menuClickity() {
  // if animation is happening do nothing
  if (!menuAnim) {
    menuAnim = true;
    menuAction();
    setTimeout(function(){
      menuAnim = false;
    }, 333);
  }
}

addEvent(menu, "click", menuClickity);
