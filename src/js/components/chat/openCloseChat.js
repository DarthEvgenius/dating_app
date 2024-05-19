import { setChatElementSizes } from './chatViewScripts/chatSizes.js'
import { setTextareaSize } from '../textarea-resize.js'
import { chatAutoScroll } from './chatViewScripts/chatAutoScroll.js'
import { viewMessages } from './chatViewScripts/viewMessages.js'
import { renderGuestProfile } from './chatViewScripts/renderGuestProfile.js'

export async function openChat(chatInfo, userId) {
  const senderId = userId
  const recipientId = handleRecipient(chatInfo, senderId)
  chatInfo.recipient = recipientId

  const chatElem = document.querySelector(`.chat`)
  if (chatElem) {
    chatElem.setAttribute('id', `chat-${chatInfo.id}`)
    chatElem.classList.remove('hidden')

    const closeChatBtn = chatElem.querySelector('.chat-header__close')
    if (closeChatBtn) {
      closeChatBtn.setAttribute('id', `chat-${chatInfo.id}-close`)
    }

    const guestProfileButton = chatElem.querySelector('#show-profile')
    guestProfileButton.setAttribute('show-profile-id', recipientId)
    guestProfileButton.addEventListener('click', () => {
      renderGuestProfile(recipientId)
    })

  }

  setChatElementSizes()
  setTextareaSize()
  chatAutoScroll()


  viewMessages(chatInfo, senderId, recipientId)


  return chatInfo

}

export function closeChat(id) {
  const chatElem = document.querySelector(`#chat-${id}`)
  chatElem.classList.add('hidden')
  console.log('close chat id:', id);
}

function handleRecipient(chatObj, senderId) {
  console.log(chatObj);


  for (let user of chatObj.users) {
    if (user.id != senderId) {
      // fullfill chat header info
      const chat__name = document.querySelector('.chat__name')
      chat__name.textContent = user.username

      return user.id
    }
  }
}


