import stars from '../assets/img/stars.png';
import mines from '../assets/img/mines.png';

export function getRatingStars(rating) {
  let maxRating = 5;
  let html = [];

  let starFull = stars;
  let noRating = mines;

  for (let i = 1; i <= maxRating && rating - i >= 0; i += 1) {
    html.push(starFull);
  }

  if (rating === 0) {
    html.push(noRating);
  }

  return html;
}
