/* on content loaded */
document.addEventListener("DOMContentLoaded", function() {
  // Fullscreen
  var fullscreen = document.createElement('DIV');
  fullscreen.dataset.fullscreen = '';
  fullscreen.addEventListener('click', function() {
    fullscreen.className = '';
  })
  document.body.appendChild(fullscreen);
  var fullscreenImg = document.createElement('IMG');
  fullscreen.appendChild(fullscreenImg)
  // on click
  function setImage(img) {
    img.addEventListener('click', function() {
      fullscreenImg.src = img.src;
      fullscreen.className = 'visible';
    })
  }
  var fscreen = document.querySelectorAll('img.fullscreen');
  for (var i=0; i<fscreen.length; i++) setImage(fscreen[i]);
});

/* Next / previous page */
document.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown': {
      var link = document.body.querySelector('.next-page a')
      if (link && link.innerHTML.trim()) link.click();
      break;
    }
    case 'ArrowLeft':
    case 'ArrowUp': {
      var link = document.body.querySelector('.prev-page a')
      if (link && link.innerHTML.trim()) link.click();
      break;
    }
    default: break;
  }
})