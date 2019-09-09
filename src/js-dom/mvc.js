import { watch } from 'melanke-watchjs';

export default () => {
  const state = {
    activeTabHash: '#list-home',
  };
  watch(state, 'activeTabHash', () => {
    const tabs = document.querySelector('#list-tab').children;
    const content = document.querySelector('#nav-tabContent').children;
    [...tabs, ...content].map(tab => tab.classList.remove('active', 'show'));
    document.querySelector(state.activeTabHash).classList.add('active', 'show');
    document.querySelector(`${state.activeTabHash}-list`).classList.add('active');
  });
  const listTab = document.querySelector('#list-tab');
  listTab.addEventListener('click', ({ target }) => {
    state.activeTabHash = target.hash;
  });
};
