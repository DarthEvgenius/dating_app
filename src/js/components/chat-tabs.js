import GraphTabs from 'graph-tabs';


const checkTab = document.querySelector('[data-tabs]').dataset.tabs;


if (checkTab === 'chat-tabs') {
  const tabsChat = new GraphTabs(checkTab);
  console.log(tabsChat);
}
