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
  },800);
}

$(document).ready(function(){
  // Now to start autoTyping just call the autoType function with the 
  // class of outer div
  // The second paramter is the speed between each letter is typed.   
  autoType(".type-js",70);
});

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

// WEB BACKGROUND COLOR

$(document).ready(function(){
	
	$(".imre").hover(function(){
		$(".section-light").addClass("section-light-js-imre");
		$("a").addClass("btn-js");
	},function(){
    $(".section-light").removeClass("section-light-js-imre");
    $("a").removeClass("btn-js");
	})
})

$(document).ready(function(){
	
	$(".learn").hover(function(){
		$(".section-light").addClass("section-light-js-learn");
	},function(){
    $(".section-light").removeClass("section-light-js-learn");
	})
})

$(document).ready(function(){
	
	$(".next").hover(function(){
    $(".section-light").addClass("section-light-js-next");
    $("a").addClass("btn-js");
	},function(){
    $(".section-light").removeClass("section-light-js-next");
    $("a").removeClass("btn-js");
	})
})

$(document).ready(function(){
	
	$(".evalynn").hover(function(){
    $(".section-light").addClass("section-light-js-evalynn");
    $("a").addClass("btn-js");
	},function(){
    $(".section-light").removeClass("section-light-js-evalynn");
    $("a").removeClass("btn-js");
	})
})

// GO BACK

function goBack() {
  window.history.back();
}