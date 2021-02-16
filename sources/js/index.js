import '../scss/index.scss';
$(document).ready(function () {
  // Handle settings Checkboxes bold via JS because css [checked] cannot
  // go up the DOM and back down to the parents next sibling
  $('.checkbox-item').change(function (e) {
    $(this.parentElement.nextElementSibling).toggleClass('bold');
  });
  // Handle the ripples when button is clicked
  $('.button').click(function (e) {
    const button = e.currentTarget;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const circle = document.createElement('span');
    const ripple = button.hasChildNodes('.ripple');

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    // console.log('circle.style.top', circle.style.top);

    circle.classList.add('ripple');

    if (ripple) {
      $('.ripple').remove();
    }

    button.append(circle);
  });

  // Handle button events
  $('#close-button').click(function () {
    alert('close button pressed');
  });

  // $('#add-another-plan').click(function () {
  //   alert('Add another plan button pressed');
  // });
});
