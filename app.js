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