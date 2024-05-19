// build and render chat container and DOM structure
export function renderNewChat() {
  // const chat = createChatContainers()
  const chat = document.createElement('div')
  chat.classList.add('chat')

  const chat__container = document.createElement('div')
  chat__container.classList.add('chat__container')

  chat__container.appendChild(createChatHeader())
  chat__container.appendChild(createChatbox())
  chat__container.appendChild(createChatForm())

  chat.appendChild(chat__container)
  const contentSection = document.querySelector('.content')
  contentSection.appendChild(chat)
}

function createChatContainers() {
  const chat = document.createElement('div')
  chat.classList.add('chat')

  const chat__container = document.createElement('div')
  chat__container.classList.add('chat__container')

  chat.appendChild(chat__container)

  return chat__container
}

function createChatHeader() {
  const chatHeader = document.createElement('div')
  chatHeader.classList.add('chat-header', 'offset-container')

  chatHeader.innerHTML =
  `
    <button class="nav-btn chat-header__close" id="chat-0-close" aria-label="Close chat">
    <svg class="nav-svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M6.64137 16.2753C6.41948 16.0534 6.39931 15.7062 6.58086 15.4615L6.64137 15.3914L12.0325 9.99999L6.64137 4.6086C6.41948 4.38671 6.39931 4.03949 6.58086 3.79482L6.64137 3.72472C6.86326 3.50283 7.21048 3.48266 7.45516 3.6642L7.52525 3.72472L13.3586 9.55805C13.5805 9.77994 13.6006 10.1272 13.4191 10.3718L13.3586 10.4419L7.52525 16.2753C7.28118 16.5193 6.88545 16.5193 6.64137 16.2753Z" />
    </svg>
    </button>

    <p class="chat-header__info">
      You became a friend with <b class="chat__name">Jordan</b> on <time class="chat-header__match-date">26.04.2024</time>
    </p>

    <div class="message-avatar chat__avatar">
      <picture>
        <source srcset="./img/avatar2.webp" type="image/webp">
        <img loading="lazy" src="./img/avatar2.jpg" class="image" width="55" height="55" alt="companion's photo">
      </picture>
    </div>
  `

  return chatHeader
}

function createChatbox() {
  const chatbox = document.createElement('div')
  chatbox.classList.add('chatbox')

  const chatbox__content = document.createElement('div')
  chatbox__content.classList.add('chatbox__content', 'offset-container')

  chatbox.append(chatbox__content)

  return chatbox
}

function createChatForm() {
  const chatForm = document.createElement('form')
  chatForm.classList.add('chat-form', 'offset-container')
  chatForm.innerHTML =
  `
    <textarea
    name="chat-form__input"
    id="chat-form__input"
    class="chat-form__input"
    rows="1"
    placeholder="Write your message here..."></textarea>

    <button class="chat-form__smiles">
      <svg class="chat-form__svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.44 14.3a.9.9 0 0 1 1.26.13c.01.02.2.22.53.43.38.24.97.49 1.77.49a3.3 3.3 0 0 0 1.77-.49c.2-.12.39-.26.53-.43a.9.9 0 0 1 1.4 1.13 4.04 4.04 0 0 1-.97.83 5.1 5.1 0 0 1-2.73.76 5.1 5.1 0 0 1-2.73-.76 3.99 3.99 0 0 1-.97-.83.9.9 0 0 1 .14-1.26Zm1.81-4.05a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15 11.5A1.25 1.25 0 1 0 15 9a1.25 1.25 0 0 0 0 2.5Zm-3-9.4a9.9 9.9 0 1 0 0 19.8 9.9 9.9 0 0 0 0-19.8ZM3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0Z" clip-rule="evenodd">
        </path>
      </svg>
    </button>

    <button type="submit" class="chat-form__submit plan-btn btn" id="chat-submit">Send</button>
  `

  return chatForm
}
