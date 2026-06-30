<template>
  <section class="photo-story-section">
    <div class="story-bg-text">Ivanna</div>

    <div class="story-header">
      <p>Capítulo especial</p>
      <h2>La historia apenas comienza</h2>
      <span>Un momento para recordar antes de la gran noche</span>
    </div>

    <div class="story-gallery">
      <article class="story-photo story-photo-left">
        <img src="/images/photo31.jpg" alt="Ivanna foto 31" />
        <div class="photo-caption">
          <span>01</span>
          <p>Elegancia</p>
        </div>
      </article>

      <article class="story-photo story-photo-center">
        <img src="/images/photo25.jpg" alt="Ivanna foto 25" />
        <div class="photo-caption">
          <span>02</span>
          <p>Magia</p>
        </div>
      </article>

      <article class="story-photo story-photo-right">
        <img src="/images/photo32.jpg" alt="Ivanna foto 32" />
        <div class="photo-caption">
          <span>03</span>
          <p>Celebración</p>
        </div>
      </article>
    </div>

    <div class="story-message">
      <p>Guarda la fecha</p>
      <h3>16 de octubre de 2026</h3>
    </div>
  </section>
</template>

<style scoped>
.photo-story-section {
  position: relative;
  min-height: 100vh;
  padding: 90px 20px;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 20%, rgba(200, 174, 130, 0.18), transparent 32%),
    radial-gradient(circle at 80% 70%, rgba(141, 151, 137, 0.16), transparent 34%),
    linear-gradient(180deg, #080808 0%, #18130f 50%, #090909 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.photo-story-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 38px 38px;
  opacity: 0.28;
  pointer-events: none;
}

.story-bg-text {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Playfair Display', serif;
  font-size: clamp(6rem, 23vw, 20rem);
  font-weight: 800;
  color: rgba(255, 255, 255, 0.035);
  line-height: 1;
  pointer-events: none;
}

.story-header {
  position: relative;
  z-index: 4;
  text-align: center;
  width: min(920px, 100%);
  margin-bottom: 56px;
}

.story-header p {
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #c8ae82;
  font-size: 0.78rem;
  margin-bottom: 14px;
}

.story-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.7rem, 8vw, 6rem);
  line-height: 0.9;
  color: #f3eadf;
  margin-bottom: 18px;
}

.story-header span {
  display: inline-block;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(243, 234, 223, 0.62);
}

.story-gallery {
  position: relative;
  z-index: 5;
  width: min(1100px, 100%);
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.story-photo {
  position: absolute;
  background: #f3eadf;
  padding: 9px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow:
    0 34px 90px rgba(0, 0, 0, 0.62),
    0 0 60px rgba(200, 174, 130, 0.08);
  overflow: hidden;
}

.story-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.04) saturate(0.92);
}

.story-photo-left {
  width: clamp(190px, 24vw, 310px);
  height: clamp(270px, 36vw, 430px);
  left: 6%;
  top: 12%;
  transform: rotate(-6deg);
  animation: storyLeftIn 1.1s ease both, storyFloat 7s ease-in-out infinite;
}

.story-photo-center {
  width: clamp(240px, 31vw, 390px);
  height: clamp(340px, 46vw, 540px);
  z-index: 6;
  transform: rotate(1deg);
  animation: storyCenterIn 1.1s ease both, storyFloat 8s ease-in-out infinite reverse;
  animation-delay: 0.18s, 1.4s;
}

.story-photo-right {
  width: clamp(190px, 24vw, 310px);
  height: clamp(270px, 36vw, 430px);
  right: 6%;
  bottom: 8%;
  transform: rotate(7deg);
  animation: storyRightIn 1.1s ease both, storyFloat 7s ease-in-out infinite;
  animation-delay: 0.35s, 1.8s;
}

.photo-caption {
  position: absolute;
  left: 18px;
  bottom: 18px;
  padding: 10px 12px;
  background: rgba(243, 234, 223, 0.92);
  color: #111111;
  border: 1px solid rgba(17, 17, 17, 0.18);
}

.photo-caption span {
  display: block;
  font-family: 'Cinzel', serif;
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  color: #6d6258;
}

.photo-caption p {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  line-height: 1;
}

.story-message {
  position: relative;
  z-index: 5;
  margin-top: 36px;
  text-align: center;
  color: #f3eadf;
}

.story-message p {
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #c8ae82;
  font-size: 0.75rem;
  margin-bottom: 8px;
}

.story-message h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  font-weight: 700;
}

@keyframes storyLeftIn {
  from {
    opacity: 0;
    transform: translateX(-90px) rotate(-12deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(-6deg) scale(1);
  }
}

@keyframes storyRightIn {
  from {
    opacity: 0;
    transform: translateX(90px) rotate(12deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(7deg) scale(1);
  }
}

@keyframes storyCenterIn {
  from {
    opacity: 0;
    transform: translateY(70px) rotate(0deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateY(0) rotate(1deg) scale(1);
  }
}

@keyframes storyFloat {
  0%, 100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -14px;
  }
}

@media (max-width: 900px) {
  .photo-story-section {
    padding: 76px 16px;
  }

  .story-gallery {
    min-height: 690px;
  }

  .story-photo-left {
    width: 180px;
    height: 250px;
    left: 2%;
    top: 2%;
  }

  .story-photo-center {
    width: 250px;
    height: 350px;
  }

  .story-photo-right {
    width: 180px;
    height: 250px;
    right: 2%;
    bottom: 2%;
  }
}

@media (max-width: 520px) {
  .story-header {
    margin-bottom: 36px;
  }

  .story-gallery {
    min-height: 620px;
  }

  .story-photo-left {
    width: 142px;
    height: 205px;
    left: -8px;
    top: 0;
  }

  .story-photo-center {
    width: 230px;
    height: 330px;
  }

  .story-photo-right {
    width: 142px;
    height: 205px;
    right: -8px;
    bottom: 20px;
  }

  .photo-caption {
    left: 10px;
    bottom: 10px;
    padding: 8px 10px;
  }

  .photo-caption p {
    font-size: 0.95rem;
  }
}
</style>