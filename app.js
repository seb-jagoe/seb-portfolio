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
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar-block").style.top = "0";
  } else {
    document.getElementById("navbar-block").style.top = "-60px";
  }
}