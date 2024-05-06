import GraphTabs from 'graph-tabs';

// const tabs = new GraphTabs('sign-in-tabs');

const checkTab = document.querySelector('[data-tabs]')

if (checkTab) {
  const tabs = new GraphTabs(checkTab.dataset.tabs);
}
