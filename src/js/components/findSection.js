import './find-section/find-swiper.js';
import { fetchFindMatches } from "./find-section/fetchFindMatches.js"
import { renderFindMatches } from "./find-section/renderFindMatches.js";
import { showNoMatches } from './find-section/showNoMatches.js';

const findSection = document.querySelector('.find')

if(findSection) {
  const findMatches = await fetchFindMatches()

  let slideCounter = renderFindMatches(findMatches)

  document.addEventListener('matched', e => {
    slideCounter--
    if(!slideCounter) {
      showNoMatches(findSection)
    } else {
      console.log(slideCounter)
    }

  })
}
