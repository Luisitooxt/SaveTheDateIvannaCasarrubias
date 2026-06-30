<template>
  <section class="hero-collage-section">
    <div class="hero-bg-text">XV</div>

    <div class="photo-frame photo-frame-one">
      <img src="/images/photo26.jpg" alt="Ivanna Save the Date foto 26" />
    </div>

    <div class="photo-frame photo-frame-two">
      <img src="/images/photo27.jpg" alt="Ivanna Save the Date foto 27" />
    </div>

    <div class="photo-frame photo-frame-three">
      <img src="/images/photo38.jpg" alt="Ivanna Save the Date foto 38" />
    </div>

    <div class="photo-frame photo-frame-four">
      <img src="/images/photo40.jpg" alt="Ivanna Save the Date foto 40" />
    </div>

    <div class="editorial-card">
      <div class="newspaper-top">
        <span>Special Edition</span>
        <h3>The Quinceañera Times</h3>
        <span>Save the Date</span>
      </div>

      <div class="newspaper-line"></div>

      <p class="editorial-kicker">Una celebración mágica está por comenzar</p>

      <h1>
        Save
        <span>The</span>
        Date
      </h1>

      <div class="ornament">✦</div>

      <h2>Ivanna Gisselle</h2>

      <p class="xv-text">Celebra sus XV años</p>

      <p class="date-text">16 de octubre de 2026</p>

      <div class="countdown-mini">
        <p>Faltan</p>
        <strong>{{ daysLeft }}</strong>
        <span>días</span>
      </div>
    </div>

    <div class="flash flash-one"></div>
    <div class="flash flash-two"></div>

    <div class="scroll-note">
      <span></span>
      Desliza
    </div>
  </section>
</template>

<script setup>
const eventDate = new Date('2026-10-16T00:00:00')

const daysLeft = computed(() => {
  const today = new Date()
  const difference = eventDate.getTime() - today.getTime()
  return Math.max(0, Math.ceil(difference / (1000 * 60 * 60 * 24)))
})
</script>

<style scoped>
.hero-collage-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(200, 174, 130, 0.22), transparent 30%),
    radial-gradient(circle at bottom right, rgba(141, 151, 137, 0.18), transparent 32%),
    linear-gradient(135deg, #090909 0%, #17120d 45%, #080808 100%);
}

.hero-collage-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 38px 38px;
  opacity: 0.35;
  pointer-events: none;
}

.hero-bg-text {
  position: absolute;
  z-index: 1;
  font-family: 'Playfair Display', serif;
  font-size: clamp(12rem, 45vw, 34rem);
  font-weight: 800;
  color: rgba(255, 255, 255, 0.035);
  line-height: 1;
  pointer-events: none;
  animation: bgPulse 6s ease-in-out infinite;
}

.photo-frame {
  position: absolute;
  z-index: 6;
  width: clamp(130px, 19vw, 245px);
  height: clamp(190px, 31vw, 360px);
  padding: 8px;
  background: #f3eadf;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.55);
  overflow: hidden;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.04) saturate(0.92);
}

.photo-frame-one {
  left: 6%;
  top: 13%;
  transform: rotate(-8deg);
  animation: photoInLeft 1.2s ease both, floatPhoto 6s ease-in-out infinite;
  animation-delay: 0.25s, 1.5s;
}

.photo-frame-two {
  right: 7%;
  top: 10%;
  transform: rotate(7deg);
  animation: photoInRight 1.2s ease both, floatPhoto 7s ease-in-out infinite reverse;
  animation-delay: 0.45s, 1.8s;
}

.photo-frame-three {
  right: 12%;
  bottom: 7%;
  transform: rotate(-4deg);
  animation: photoInBottom 1.2s ease both, floatPhoto 8s ease-in-out infinite;
  animation-delay: 0.65s, 2s;
}

.photo-frame-four {
  left: 11%;
  bottom: 7%;
  transform: rotate(5deg);
  animation: photoInBottom 1.2s ease both, floatPhoto 7.5s ease-in-out infinite reverse;
  animation-delay: 0.8s, 2.2s;
}

.editorial-card {
  position: relative;
  z-index: 5;
  width: min(86vw, 540px);
  padding: 34px 28px 30px;
  text-align: center;
  color: #1c1c1c;
  background:
    linear-gradient(180deg, rgba(246, 238, 227, 0.98), rgba(229, 215, 197, 0.96));
  border: 1px solid rgba(17, 17, 17, 0.38);
  box-shadow:
    0 34px 100px rgba(0, 0, 0, 0.58),
    inset 0 0 0 7px rgba(17, 17, 17, 0.045);
  animation: mainCardIn 1.2s ease both;
}

.editorial-card::before,
.editorial-card::after {
  content: '';
  position: absolute;
  left: 18px;
  right: 18px;
  height: 2px;
  background: #111111;
}

.editorial-card::before {
  top: 16px;
}

.editorial-card::after {
  bottom: 16px;
}

.newspaper-top {
  display: grid;
  grid-template-columns: 1fr 2.2fr 1fr;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.newspaper-top span {
  padding: 8px 6px;
  border: 1px solid rgba(17, 17, 17, 0.3);
  font-family: 'Cinzel', serif;
  font-size: 0.55rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.newspaper-top h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 4vw, 2rem);
  line-height: 1;
  color: #111111;
}

.newspaper-line {
  width: 100%;
  height: 3px;
  border-top: 1px solid #111111;
  border-bottom: 1px solid #111111;
  margin-bottom: 22px;
}

.editorial-kicker {
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.68rem;
  color: #6d6258;
  margin-bottom: 18px;
}

.editorial-card h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(4.2rem, 13vw, 7.2rem);
  line-height: 0.76;
  text-transform: uppercase;
  color: #111111;
}

.editorial-card h1 span {
  display: block;
  font-family: 'Cinzel', serif;
  font-size: 0.34em;
  letter-spacing: 0.22em;
  margin: 12px 0;
}

.ornament {
  margin: 24px auto 18px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111111;
}

.ornament::before,
.ornament::after {
  content: '';
  height: 1px;
  background: #111111;
  flex: 1;
  margin: 0 14px;
}

.editorial-card h2 {
  font-family: 'Cinzel', serif;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: clamp(1.2rem, 4vw, 2rem);
}

.xv-text {
  margin-top: 8px;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #6d6258;
}

.date-text {
  margin-top: 12px;
  font-family: 'Cinzel', serif;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  font-size: clamp(0.95rem, 3vw, 1.25rem);
}

.countdown-mini {
  width: min(260px, 100%);
  margin: 26px auto 0;
  padding: 14px 18px;
  border: 1px solid rgba(17, 17, 17, 0.22);
  background: rgba(255, 255, 255, 0.35);
}

.countdown-mini p {
  font-size: 0.65rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #6d6258;
}

.countdown-mini strong {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 3.8rem;
  line-height: 0.95;
  color: #111111;
}

.countdown-mini span {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6d6258;
}

.flash {
  position: absolute;
  z-index: 10;
  width: 160px;
  height: 160px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  filter: blur(25px);
  opacity: 0;
  pointer-events: none;
}

.flash-one {
  top: 22%;
  left: 18%;
  animation: cameraFlash 5s ease-in-out infinite;
}

.flash-two {
  bottom: 25%;
  right: 20%;
  animation: cameraFlash 6s ease-in-out infinite;
  animation-delay: 1.8s;
}

.scroll-note {
  position: absolute;
  z-index: 8;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  color: #eadcc6;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.85;
}

.scroll-note span {
  width: 1px;
  height: 36px;
  background: #c8ae82;
  animation: scrollLine 1.8s ease-in-out infinite;
}

@keyframes mainCardIn {
  from {
    opacity: 0;
    transform: translateY(36px) scale(0.94);
    filter: blur(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes photoInLeft {
  from {
    opacity: 0;
    transform: translateX(-80px) rotate(-14deg) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(-8deg) scale(1);
  }
}

@keyframes photoInRight {
  from {
    opacity: 0;
    transform: translateX(80px) rotate(14deg) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(7deg) scale(1);
  }
}

@keyframes photoInBottom {
  from {
    opacity: 0;
    transform: translateY(80px) rotate(-9deg) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) rotate(-4deg) scale(1);
  }
}

@keyframes floatPhoto {
  0%, 100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -14px;
  }
}

@keyframes cameraFlash {
  0%, 72%, 100% {
    opacity: 0;
    transform: scale(0.6);
  }

  74% {
    opacity: 0.85;
    transform: scale(1);
  }

  78% {
    opacity: 0;
    transform: scale(1.35);
  }
}

@keyframes bgPulse {
  0%, 100% {
    opacity: 0.75;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.04);
  }
}

@keyframes scrollLine {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }

  50% {
    transform: scaleY(1);
    transform-origin: top;
  }

  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

@media (max-width: 768px) {
  .hero-collage-section {
    min-height: 100svh;
    padding: 44px 10px 90px;
  }

  .editorial-card {
    width: 86vw;
    max-width: 350px;
    padding: 30px 16px 26px;
    z-index: 8;
  }

  .newspaper-top {
    grid-template-columns: 1fr;
  }

  .newspaper-top span {
    display: none;
  }

  .editorial-card h1 {
    font-size: clamp(3.4rem, 17vw, 5rem);
  }

  .editorial-card h2 {
    font-size: 1rem;
    letter-spacing: 0.12em;
  }

  .editorial-kicker {
    font-size: 0.55rem;
    letter-spacing: 0.12em;
  }

  .date-text {
    font-size: 0.8rem;
    letter-spacing: 0.08em;
  }

  .countdown-mini {
    width: 195px;
    padding: 10px 12px;
    margin-top: 18px;
  }

  .countdown-mini strong {
    font-size: 2.8rem;
  }

  .photo-frame {
    z-index: 9;
    width: 76px;
    height: 110px;
    padding: 4px;
    opacity: 0.9;
  }

  .photo-frame-one {
    left: -8px;
    top: 7%;
  }

  .photo-frame-two {
    right: -8px;
    top: 7%;
  }

  .photo-frame-three {
    right: -8px;
    bottom: 12%;
  }

  .photo-frame-four {
    left: -8px;
    bottom: 12%;
  }
}

@media (max-width: 390px) {
  .editorial-card {
    max-width: 326px;
  }

  .photo-frame {
    width: 68px;
    height: 100px;
  }

  .editorial-card h1 {
    font-size: clamp(3.1rem, 16vw, 4.5rem);
  }
}
</style>