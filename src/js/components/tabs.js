import GraphTabs from 'graph-tabs';

let tabs = null;

const checkTab = document.querySelector('[data-tabs]')?.dataset.tabs;


if (checkTab === 'sign-in-tabs') {
  tabs = new GraphTabs(checkTab);

}
if (checkTab === 'chat-tabs') {
  const tabs = new GraphTabs(checkTab);
}
