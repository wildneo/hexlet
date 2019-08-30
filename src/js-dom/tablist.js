export default () => {
  const handler = ({ target }) => {
    const closestNavTabs = target.closest('.nav-tabs');

    const active = closestNavTabs.querySelector('.active');
    const targetPane = document.querySelector(target.hash);
    const activePane = document.querySelector(active.hash);

    const switcher = ({ classList }) => classList.toggle('active');
    [target, targetPane, active, activePane].map(switcher);
  };

  const tabs = document.querySelectorAll('[data-toggle="tab"]');
  tabs.forEach(tab => tab.addEventListener('click', handler));
};
