import BlogCard from '/blog-page/assets/js/main.js';
import Blog from '/blog-page/assets/js/blog_main.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore , collection, doc, getDocs, getDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
export default class Database{
    constructor(){
        this.firebaseConfig = {
            apiKey: "AIzaSyDDBikA_w9r615SzzLs1Cz1_r0wsGxiEBM",
            authDomain: "personal-website-c93cc.firebaseapp.com",
            projectId: "personal-website-c93cc",
            storageBucket: "personal-website-c93cc.appspot.com",
            messagingSenderId: "1013766712301",
            appId: "1:1013766712301:web:8f1c86eaf7b2836fbe55e4",
            measurementId: "G-JP734W8Q0R"
        };
        this.app = initializeApp(this.firebaseConfig);
        this.db = getFirestore(this.app);
    }
        async getArticles() {
            const articleCol = collection(this.db, 'articles');
            const snapshot = await getDocs(articleCol)
            const articles = snapshot.docs.map(doc => doc.data());
            articles.forEach(article => {
                const blog_page = new BlogCard(article.imageURL, article.title, article.body, article.id);
            });
        }
        async getArticle(id) {
            const docRef = doc(this.db, 'article', id);
            try {
                const docSnap = await getDoc(docRef);
                if(docSnap.exists()) {
                    const article = docSnap.data();
                    const blog = new Blog(article.imageURL, article.title, article.body);
                } else {
                    console.log("Document does not exist")
                }
            
            } catch(error) {
                console.log(error)
            }
        }
    
}
