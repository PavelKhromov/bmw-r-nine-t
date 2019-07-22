
import $ from 'jquery';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.width = "18%";
  } else {
    document.getElementById("header").style.width = "26%";
  }
}


export default HeaderScript;

