// CONTENT LOADERS

function navLoader(){
  $(function(){
    $("#nav-placeholder").load("nav.html");
  });
  }
  
function footerLoader(){
  $(function(){
    $("#footer-placeholder").load("footer.html");
  });
  }

// SLIDING NAVBAR

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 180) {
    document.getElementById("navbar-block").style.top = "0";
  } else {
    document.getElementById("navbar-block").style.top = "-60px";
  }
}

// COPY FUNCTION

function copiedToClipboardEmail() {
  document.getElementById('alertEmail').innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> Email Copied!';
  setTimeout(function(){document.getElementById('alertEmail').innerHTML = '<i class="fa fa-link" aria-hidden="true"></i> Copy Email Again';}, 5000);
}

function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "absolute",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },400);
}

$(document).ready(function(){
  // Now to start autoTyping just call the autoType function with the 
  // class of outer div
  // The second paramter is the speed between each letter is typed.   
  autoType(".type-js",70);
});