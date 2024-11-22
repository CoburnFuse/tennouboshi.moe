//Fuck yeah, sparkle sparkle sparkle
$(function () {
  var body = $('#starshine'),
    template = $('.template.shine'),
    stars = 15,
    sparkle = 5;


  var size = 'small';
  var createStar = function () {
    template.clone().removeAttr('id').css({
      top: (Math.random() * 100) + '%',
      left: (Math.random() * 100) + '%',
      webkitAnimationDelay: (Math.random() * sparkle) + 's',
      mozAnimationDelay: (Math.random() * sparkle) + 's'
    }).addClass(size).appendTo(body);
  };

  for (var i = 0; i < stars; i++) {
    if (i % 2 === 0) {
      size = 'small';
    } else if (i % 3 === 0) {
      size = 'medium';
    } else {
      size = 'large';
    }

    createStar();
  }
});

//Birthday stuff (Japanese dreamcast release date)
const today = new Date();

if (today.getMonth() === 10 && today.getDate() === 27) {
  //lol piss off with month starting with 0, but day starting at 1 ^
  const shine = document.querySelector(".shine");
  const text = document.querySelector("#mottoText");
  
  //changes the minor stuff
  if (shine && text){
    shine.style.backgroundImage = "url(images/balloon.png)";
    text.style.fontSize = '50px';
    text.textContent = "Happy birthday, Uzume!"
  }

} else {
  //If its not her birthday, Kurume can appear!
  var kurome = Math.floor((Math.random() * 50) + 1);
  if (kurome == 50) {
    $("#uzume").hide();
    $("#kurome").show();
  };
}