export function renderMatches() {


}


function buildMatchItem(profile) {
  return `
    <li class="matches-tab__item">
      <button class="matches-tab__btn chat-enter" aria-label="Enter chat with ${profile.profile.full_name}" data-chat-id="${0}">

        <div class="matches-tab__image">
          <img loading="lazy" src="${profile.profile.avatars[0]}" class="image" width="110" height="140" alt="Paola photo">
        </div>

        <h3 class="matches-tab__name">${profile.profile.full_name}</h3>

      </button>
    </li>
  `
}
