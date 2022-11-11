import { initializeApp } from "firebase/app";
import { getFirestore , collection, getDocs, getDoc} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDDBikA_w9r615SzzLs1Cz1_r0wsGxiEBM",
  authDomain: "personal-website-c93cc.firebaseapp.com",
  projectId: "personal-website-c93cc",
  storageBucket: "personal-website-c93cc.appspot.com",
  messagingSenderId: "1013766712301",
  appId: "1:1013766712301:web:8f1c86eaf7b2836fbe55e4",
  measurementId: "G-JP734W8Q0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const blogCol = collection(db, 'articles');
const snapshot = await getDocs(blogCol)
const articles = snapshot.docs.map(doc => doc.data());
console.log('Article sayısı: ',articles.length);
console.log(articles);


$(document).ready(function(){
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
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
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });