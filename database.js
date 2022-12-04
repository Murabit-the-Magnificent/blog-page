import BlogCard from './blog_card.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore , collection, getDocs, getDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
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
const articleCol = collection(db, 'articles');
const snapshot = await getDocs(articleCol)
const articles = snapshot.docs.map(doc => doc.data());
articles.forEach(article => {
    const blog = new BlogCard(article.imageURL, article.title, article.body, article.id);
});