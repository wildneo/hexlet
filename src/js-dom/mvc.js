import { watch } from 'melanke-watchjs';

export default () => {
  const state = {
    menu: {
      activeTab: 'list-home-list',
      previousTab: null,
      activeTabContent: 'list-home',
      previousTabContent: null,
    },
  };

  watch(state, 'menu', () => {
    document.getElementById(state.menu.previousTab).classList.remove('active');
    document.getElementById(state.menu.previousTabContent).classList.remove('active', 'show');
    document.getElementById(state.menu.activeTab).classList.add('active');
    document.getElementById(state.menu.activeTabContent).classList.add('active', 'show');
  });

  document.querySelector('#list-tab')
    .addEventListener('click', ({ target }) => {
      state.menu.previousTab = state.menu.activeTab;
      state.menu.previousTabContent = state.menu.activeTabContent;
      state.menu.activeTab = target.id;
      state.menu.activeTabContent = target.hash.slice(1);
    });
};
