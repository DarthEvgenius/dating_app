// import { picker } from "../emoji-picker.js"
import { Picker } from 'emoji-picker-element';
import { setChatElementSizes } from './chatSizes.js';

import * as Popper from '@popperjs/core';


// build and render chat container and DOM structure
export function renderNewChat(chatId) {
  const chat = document.createElement('div')
  chat.classList.add('chat')
  chat.setAttribute('id', `chat-${chatId}`)

  const chat__container = document.createElement('div')
  chat__container.classList.add('chat__container')

  chat__container.appendChild(createChatHeader(chatId))
  chat__container.appendChild(createChatbox())
  chat__container.appendChild(createChatForm())

  chat.appendChild(chat__container)
  const contentSection = document.querySelector('.content')
  contentSection.appendChild(chat)

  const emojiButton = document.querySelector('.chat-form__smiles')
  emojiButton.addEventListener('click', () => {
    emojiPickerLaunch(emojiButton)
  })
}


function createChatHeader(chatId) {
  const chatHeader = document.createElement('div')
  chatHeader.classList.add('chat-header', 'offset-container')

  chatHeader.innerHTML =
  `
    <button class="nav-btn chat-header__close" id="chat-${chatId}-close" aria-label="Close chat">
      <svg class="nav-svg">
        <use xlink:href="img/sprite.svg#arrow-right"></use>
      </svg>
    </button>

    <p class="chat-header__info">
      You became a friend with <b class="chat__name">Jordan</b> on <time class="chat-header__match-date">26.04.2024</time>
    </p>

    <button class="message-avatar chat__avatar" id="show-profile">
      <picture>
        <source srcset="./img/avatar2.webp" type="image/webp">
        <img loading="lazy" src="./img/avatar2.jpg" class="image" width="55" height="55" alt="companion's photo">
      </picture>
    </button>
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

    <div class="chat-form__smiles-container">
      <button type="button" class="chat-form__smiles" aria-describedby="emoji-tooltip">
        <svg class="chat-form__svg">
          <use xlink:href="img/sprite.svg#smile-emoji"></use>
        </svg>
      </button>

      <div class="emoji-tooltip hidden" role="tooltip" id="emoji-tooltip">
        <emoji-picker></emoji-picker>
      </div>
    </div>

    <button type="submit" class="chat-form__submit plan-btn btn" id="chat-submit">Send</button>
  `

  return chatForm
}

// also launch popper.js
function emojiPickerLaunch(emojiButton) {
  const pickerTooltipWrapper = document.querySelector('.emoji-tooltip')
  if (pickerTooltipWrapper.classList.contains('hidden')) {
    pickerTooltipWrapper.classList.remove('hidden')

    Popper.createPopper(emojiButton, pickerTooltipWrapper, {
      placement: 'top-end'
    })

    document.querySelector('emoji-picker').addEventListener('emoji-click', insertEmoji)

  } else {
    pickerTooltipWrapper.classList.add('hidden')
  }
}

function insertEmoji(e) {
  const emoji = e.detail.unicode
  const chatInputElement = document.querySelector('#chat-form__input')
  chatInputElement.value += emoji
}
