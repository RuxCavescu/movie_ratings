class Widget {
  constructor(headline, rating) {
    this.headline = headline;

    // this.widget = document.createElement('div');
    // this.widgetRating = document.createElement('div');
    // this.widgetRatingStar = document.createElement('div');
    this.rating = rating;
    this.star = '../img/star-white.svg';
    this.createWidget();
  }

  async sendRatings() {
    const payload = {
      rating_subject: this.headline,
      rating_value: this.rating,
    };

    console.log(this.headline);

    const response = await fetch(
      'https://test-api.codingbootcamp.cz/api/2cf2cf35/ratings',
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const myUsableResponse = await response.json();
    console.log(myUsableResponse);
  }

  createWidget() {
    this.elem = document.createElement('div');
    this.elem.classList.add('rating');

    this.elem.innerHTML = `<h3>${this.headline}</h3>
        <div class="rating__value">${this.rating}</div>
        <div class="rating__stars">
            <div class="rating__star"></div>
            <div class="rating__star"></div>
            <div class="rating__star"></div>
            <div class="rating__star"></div>
            <div class="rating__star"></div>
        </div>
        <button>Rate</button>`;

    let textRating = this.elem.querySelector('.rating__value');
    const stars = this.elem.querySelectorAll('.rating__star');

    this.elem
      .querySelector('button')
      .addEventListener('click', this.sendRatings.bind(this));

    stars.forEach((star, starIndex) => {
      star.addEventListener('click', (e) => {
        // console.log(e);
        this.rating = starIndex + 1;
        textRating.textContent = this.rating;
        for (let i = 0; i < stars.length; i++) {
          //   console.log(stars[i]);
          if (i <= starIndex) {
            stars[i].classList.add('rating__star--on');
          } else {
            stars[i].classList.remove('rating__star--on');
          }
        }
      });
    });
    document.querySelector('body').appendChild(this.elem);
  }
}

export { Widget };
