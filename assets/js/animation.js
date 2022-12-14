 export default class CardAnimation{
         constructor(){
            $(document).ready(function () {
                var zindex = 10;
                var examples = document.querySelectorAll(".card__image-holder");
                var examples2=document.querySelectorAll(".card-title");
                var i = 1;
                
                examples.forEach(function (example) {
                  $(example).fadeIn(i * 1000).css("display","block");
                  i++;
                  examples2.forEach(function (example2) {
                    $(example2).fadeIn(i * 1000).css("display","block");
              
                  });
                });

                
              
                $(".toggle-info").click(function (e) {
                  e.preventDefault();
                  var isShowing = false;
              
                  if ($(".card").hasClass("show")) {
                    isShowing = true
                  }
              
                  if ($("div.cards").hasClass("showing")) {
                    // a card is already in view
                    $("div.card.show")
                        .removeClass("show");
              
                    if (isShowing) {
                      // this card was showing - reset the grid
                      $("div.cards")
                          .removeClass("showing");
                    } else {
                      // this card isn't showing - get in with it
                      $(".card")
                          .css({ zIndex: zindex });
                          $(".card").addClass("show");
                       
              
                    }
              
                    zindex++;
              
                  } else {
                    // no cards in view
                    $("div.cards")
                        .addClass("showing");
                    $(".card")
                        .css({ zIndex: zindex })
                        .addClass("show");
              
                    zindex++;
                  }
              
                });

            });
             
         }
 }

