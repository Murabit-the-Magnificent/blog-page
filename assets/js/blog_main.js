export default class Blog{
    constructor(url, title, date, content){
        this.url = url;
        this.title = title;
        this.date = date;
        this.content = content;

        var blog_image = document.getElementById('blog-image-id');
        blog_image.src = url;
        const md = content;
        var html = marked.parse(content);
        
        const selector = document.getElementById('blog-post-id');
        const comment = document.createElement('article');
        comment.classList.add();
        comment.innerHTML = `
            <div class="blog-content">
                <summary>
                    <h3>${title}</h3>
                    <div class="blog-date">${date}</div>
                </summary>
                <p>${html}</p>
            </div>`
        selector.appendChild(comment);
    }
}