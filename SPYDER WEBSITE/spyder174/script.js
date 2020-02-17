
	function getObject(object)
{
  valu =object.value;
  $.get('phpfile.php?id=' + valu, function(data)
    {
      $('#resultdiv').html(data);
    }
    );
}

	$(document).ready(function(){
  $('.portfolio-item').isotope(function(){
      itemSelector:'.item'
    });



  $('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');


    var selector = $(this).attr('data-filter');
      $('.portfolio-item').isotope({
        filter: selector
      })
      return false;
  });
});
	$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
      $('#global-nav-top').addClass('scrolled-nav-top');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
      $('#global-nav-top').removeClass('scrolled-nav-top');
    } 
    
  }); 
  
});
	$(document).ready(function() {
	var icon = $(".navbar-toggler-icon");
	var navbar = $(".navbar");
	$(icon).on("click", function() {
		setInterval(function() {
			if ($(".navbar .navbar-collapse").hasClass("show")) {
				var position = navbar.offset();
				navbar.css("position", "absolute");
				navbar.css("top", position.top);
				$(window).on("scroll", function() {
					if ($(document).scrollTop() < navbar.position().top) {
						navbar.css("top", $(document).scrollTop());
					}
				});
			} else {
				navbar.css("position", "fixed");
				navbar.css("top", 0);
			}
		}, 0);
	});
});

$(function() {
  $(".img-w").each(function() {
    $(this).wrap("<div class='img-c'></div>")
    let imgSrc = $(this).find("img").attr("src");
     $(this).css('background-image', 'url(' + imgSrc + ')');
  })
            
  
  $(".img-c").click(function() {
    let w = $(this).outerWidth()
    let h = $(this).outerHeight()
    let x = $(this).offset().left
    let y = $(this).offset().top
    
    
    $(".active").not($(this)).remove()
    let copy = $(this).clone();
    copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active")
    $(".active").css('top', y - 8);
    $(".active").css('left', x - 8);
    
      setTimeout(function() {
    copy.addClass("positioned")
  }, 0)
    
  }) 
  
  

  
})

$(document).on("click", ".img-c.active", function() {
  let copy = $(this)
  copy.removeClass("positioned active").addClass("postactive")
  setTimeout(function() {
    copy.remove();
  }, 500)
})