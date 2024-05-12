export function createAvatarEl() {
  const avatar = document.createElement('div')

// how to get message's author's avatar ??
    avatar.className = "message-avatar chat__avatar"
    avatar.innerHTML = `
      <picture>
        <source srcset="./img/avatar2.webp" type="image/webp">
        <img loading="lazy" src="./img/avatar2.jpg" class="image" width="55" height="55" alt="companion's photo">
      </picture>
    `

    return avatar
}
