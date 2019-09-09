import $ from 'jquery';
import _ from 'lodash';

export default () => {
  const process = (index, item) => {
    const carousel = $(item);
    const slides = carousel.find('.carousel-item');
    const state = {
      activeIndex: _.findIndex(slides, slide => $(slide).hasClass('active')),
      maxIndex: slides.length - 1,
    };
    const handler = next => () => {
      const newIndex = next(state.activeIndex);
      slides.removeClass('active');
      slides.eq(newIndex).addClass('active');
      state.activeIndex = newIndex;
    };
    carousel.find('[data-slide="prev"]').click(handler(i => (i === 0 ? state.maxIndex : i - 1)));
    carousel.find('[data-slide="next"]').click(handler(i => (state.maxIndex === i ? 0 : i + 1)));
  };

  $('[data-ride="carousel"]').each(process);

  // const process = (index, item) => {
  //   const carousel = $(item);
  //   const slides = carousel.find('.carousel-item');
  //   carousel.find('[data-slide="prev"]').click(() => {
  //     const active = carousel.find('.active');
  //     active.removeClass('active');
  //     if (active.prev().length === 0) {
  //       slides.last().addClass('active');
  //       return;
  //     }
  //     active.prev().addClass('active');
  //   });
  //   carousel.find('[data-slide="next"]').click(() => {
  //     const active = carousel.find('.active');
  //     active.removeClass('active');
  //     if (active.next().length === 0) {
  //       slides.first().addClass('active');
  //       return;
  //     }
  //     active.next().addClass('active');
  //   });
  // };
  // $('[data-ride="carousel"]').each(process);
};
