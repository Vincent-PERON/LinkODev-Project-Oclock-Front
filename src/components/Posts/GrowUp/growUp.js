function GrowUp() {
  const pickupFrame = document.getElementsByClassName('PostCard__container');
  if (pickupFrame.className === 'PostCard__container') {
    pickupFrame.className = 'PostCard__container--growUp';
  }
  else {
    pickupFrame.className = 'PostCard__container';
  }
}

export default GrowUp;
