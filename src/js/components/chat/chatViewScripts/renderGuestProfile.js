import { guestSwiperInit } from "../../avatar-swiper.js"

export function renderGuestProfile(profileId) {
  const chat = document.querySelector('.chat')
  const isGuestProfile = document.querySelector('.chat-opponent.profile')

  if (!isGuestProfile) {
    const guestProfile = document.createElement('section')
    guestProfile.classList.add('chat-opponent', 'profile')

    guestProfile.innerHTML =
    `
      <h2 class="visually-hidden">Your chat with:</h2>


      <div class="avatar profile__avatar offset-container">
        <div class="avatar__container avatar__container--main">
          <div class="avatar__swiper">

            <div class="swiper avatar__swiper-guest">
              <div class="swiper-wrapper">

                <div class="swiper-slide">
                  <picture>
                    <source srcset="./img/avatar2.webp" type="image/webp">
                    <img loading="lazy" src="./img/avatar2.jpg" class="image" width="360" height="360" alt="Avatar photo">
                  </picture>
                </div>

                <div class="swiper-slide">
                  <picture>
                    <source srcset="./img/avatar3.webp" type="image/webp">
                    <img loading="lazy" src="./img/avatar3.jpg" class="image" width="360" height="360" alt="Avatar photo">
                  </picture>
                </div>

              </div>
            </div>

            <div class="swiper-pagination-guest"></div>

          </div>
        </div>
      </div>



      <div class="offset-container">
        <div class="profile__info profile__info--guest">

          <div class="profile__info-field" id="guest-title">
            <h3 class="profile__info-title" data-field="title">
              <span id="profile-name">Alex Brandt</span>,
              <span id="profile-age">31</span>
            </h3>
          </div>

          <div class="profile__info-field" id="guest-about">
            <h4 class="profile__info-subtitle">About me:</h4>
            <p class="profile__info-content" data-field="about">
              Lorem ipsum dolor sit amet, consecteturis adipiscing elit se
              do eiusmod temporata incididunt ut labore et dolore magna
              aliqu. Ullamcorper malesuada consequat proin.
            </p>
          </div>

          <div class="profile__info-field" id="guest-gender">
            <h4 class="profile__info-subtitle">Gender:</h4>
            <p class="profile__info-content" data-field="gender">
              Male
            </p>
          </div>

          <div class="profile__info-field" id="guest-preferable">
            <h4 class="profile__info-subtitle">Preferable gender:</h4>
            <p class="profile__info-content" data-field="gender">
              Female
            </p>
          </div>

          <div class="profile__info-field" id="guest-motherland">
            <h4 class="profile__info-subtitle">Place of birth:</h4>
            <p class="profile__info-content" data-field="motherland">
              London, UK
            </p>
          </div>

          <div class="profile__info-field" id="guest-occupation">
            <h4 class="profile__info-subtitle">Occupation:</h4>
            <p class="profile__info-content" data-field="motherland">
              Kitchen furniture
            </p>
          </div>

          <div class="profile__info-field" id="guest-income">
            <h4 class="profile__info-subtitle">Income:</h4>
            <p class="profile__info-content" data-field="motherland">
              $19,800
            </p>
          </div>

          <div class="profile__info-field" id="profile-location">
            <h4 class="profile__info-subtitle">Location:</h4>
            <p class="profile__info-content" data-field="location">
              Frankfurt, Germany
            </p>
          </div>

          <div class="profile__info-field" id="profile-languages">
            <h4 class="profile__info-subtitle">Languages:</h4>
            <p class="profile__info-content" data-field="languages">
              English, German, French
            </p>
          </div>
        </div>
      </div>

    `


    chat.appendChild(guestProfile)

    guestSwiperInit()
  } else if (isGuestProfile.classList.contains('hidden')) {
    isGuestProfile.classList.remove('hidden')
  } else {
    isGuestProfile.classList.add('hidden')
  }
}
