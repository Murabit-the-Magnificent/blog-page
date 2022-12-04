import Animation from './animation.js';
export default class BlogCard {
  constructor(url, title, body, id) {
    this.url = url;
    this.title = title;
    this.body = body;
    this.id = id;
    const selector = document.getElementById('cards-id');
    const comment = document.createElement('div');
    comment.classList.add("p-2");
    comment.innerHTML = `
    <div class="card">
    <div class="card__image-holder">
      <img class="card__image" src="${url}" alt="wave" />
    </div>
    <div class="card-title">
      <a href="#" class="toggle-info btn">
        <span class="left"></span>
        <span class="right"></span>
      </a>
      <h2>
          ${title}
      </h2>
    </div>
    <div class="card-flap flap1">
      <div class="card-description">
        ${body}
      </div>
      <div class="card-flap flap2">
        <div class="card-actions">
          <a href="#/${id}" class="btn">Read more</a>
        </div>
      </div>
    </div>
    </div>
    `;

    selector.appendChild(comment);
    const animation = new Animation();
  }
}
