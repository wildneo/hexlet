export default () => {
  const tabs = document.querySelectorAll('[data-toggle="tab"]');
  tabs.forEach(tab => tab.addEventListener('click', (event) => {
    const closestNavTabs = event.target.closest('.nav-tabs');
    const activTab = closestNavTabs.querySelector('.active');
  }));
};
