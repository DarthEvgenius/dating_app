import { fetchFindMatches } from "./find-section/fetchFindMatches.js"
import { renderFindMatches } from "./find-section/renderFindMatches.js";

const findSection = document.querySelector('.find')

if(findSection) {
  const findMatches = await fetchFindMatches()
  console.log(findMatches);

  let slideCounter = renderFindMatches(findMatches)
  console.log(slideCounter);

}
