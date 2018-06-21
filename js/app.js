var windowScrollOffset; // scroll position
    var windowScrollOffsetBottom; // bottom of browser scroll
    var windowHeight; // height of window
    var thatElement = $("#scrollReveal"); // whatever element
    var thatElementOffset; // where the element is
    var classAddedYet = false; // have we added the class na

    $(document).ready(function(){ // when the DOM has loaded
      thatElementOffset = thatElement.offset().top + thatElement.outerHeight(); // get the scroll position of whatever element
      windowHeight = $(window).height(); // get window height
      // console.log("elem offset",thatElementOffset)
    })

    $(window).scroll(function(){ // when the window is scrolled
      windowScrollOffset = $(window).scrollTop(); // update the scroll position of the window
      windowScrollOffsetBottom = windowScrollOffset + windowHeight; // bottom of window scroll
      // console.log("window scroll", windowScrollOffset);
      if (windowScrollOffsetBottom > thatElementOffset && !classAddedYet) { // if we are past the scroll position of the element, and haven't yet added the class
        thatElement.addClass("fadeSlideLeft-anim"); // add the class
        classAddedYet = true; // ok we're done na, gusto ko na umiiyak

        //pa refactor po
      }
    })

// ANIME.JS


var cssSelector = anime({
      targets: '#anim-01',
      translateX: 120,
      direction: 'reverse',
      opacity: .3,
      duration: 2500,
      easing: 'easeInExpo'});


var cssSelector = anime({
        targets: '#anim-02',
        direction: 'reverse',
        easing: 'easeInExpo',
        delay: 1800,
        duration: 2500,
        translateX: -120
        });
