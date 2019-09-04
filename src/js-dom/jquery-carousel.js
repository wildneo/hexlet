import $ from 'jquery';

export default () => {
  const process = (i, carousel) => {
    const slides = $(carousel).find('.carousel-item');
    $(carousel).find('[data-slide="prev"]').click(() => {
      const active = $(carousel).find('.active');
      active.removeClass('active');
      if (active.prev().length === 0) {
        slides.last().addClass('active');
        return;
      }
      active.prev().addClass('active');
    });
    $(carousel).find('[data-slide="next"]').click(() => {
      const active = $(carousel).find('.active');
      active.removeClass('active');
      if (active.next().length === 0) {
        slides.first().addClass('active');
        return;
      }
      active.next().addClass('active');
    });
  };
  $('[data-ride="carousel"]').each(process);
};
