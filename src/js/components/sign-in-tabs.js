import GraphTabs from 'graph-tabs';


const checkTab = document.querySelector('[data-tabs]').dataset.tabs;


if (checkTab === 'sign-in-tabs') {
  const tabSignIn = new GraphTabs(checkTab);
  console.log(tabSignIn);

}
