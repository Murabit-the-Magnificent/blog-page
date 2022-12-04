export default class Blog{
    constructor(url, title, content){
        this.url = url;
        this.title = title;
        this.content = content;

        const md = content;
        var html = marked.parse(content);
        
        const selector = document.getElementById('blog-post-id');
        const comment = document.createElement('article');
        comment.classList.add();
        comment.innerHTML = `
            <div class="blog-content">
                <summary>
                    <h3>${title}</h3>
                    <div class="blog-date">23 Dec 2016</div>
                </summary>
                <p>${html}</p>
            </div>`
        selector.appendChild(comment);
    }
}