fetch('resources/reviews.txt')
    .then((res) => res.text())
    .then((text) => {
        lines = text.split(/\r?\n/);
        review_dates = document.querySelectorAll('.review-date');
        review_texts = document.querySelectorAll('.review-text');
        review_authors = document.querySelectorAll('.review-author');

        for(let i = 0; i < review_dates.length; i++) {
            let line = lines[i].split(',');
            review_dates[i].innerHTML = line[0];
            review_texts[i].innerHTML = line[1];
            review_authors[i].innerHTML = '~ ' + line[2];
        }
    })
    .catch((e) => console.error(e));