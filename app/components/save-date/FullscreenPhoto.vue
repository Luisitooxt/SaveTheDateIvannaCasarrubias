<template>
  <section class="fullscreen-photo-section">
    <div class="photo-bg">
      <img src="/images/photo33.jpg" alt="Ivanna Save the Date foto principal" />
    </div>

    <div class="fullscreen-overlay"></div>

    <div class="fullscreen-content">
      <p>Momento especial</p>

      <h2>
        Save
        <span>The</span>
        Date
      </h2>

      <div class="fullscreen-divider">
        <span></span>
        <i>✦</i>
        <span></span>
      </div>

      <div class="fullscreen-info">
        <h3>Ivanna Gisselle</h3>
        <strong>16 de octubre de 2026</strong>
        <small>Una noche inolvidable está por llegar</small>
      </div>
    </div>

    <div class="fullscreen-badge">
      XV
    </div>
  </section>
</template>

<style scoped>
.fullscreen-photo-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #080808;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.photo-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 42%;
  animation: slowZoom 14s ease-in-out infinite alternate;
}

.fullscreen-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    radial-gradient(circle at 50% 28%, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.58) 64%, rgba(0, 0, 0, 0.82) 100%),
    linear-gradient(90deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.78));
}

.fullscreen-content {
  position: relative;
  z-index: 4;
  width: min(90%, 760px);
  text-align: center;
  color: #f3eadf;
  padding: 34px 24px;
  margin-top: 95px;
  animation: fullscreenContentIn 1.2s ease both;
}

.fullscreen-content::before,
.fullscreen-content::after {
  content: '';
  position: absolute;
  left: 50%;
  width: min(420px, 74%);
  height: 1px;
  background: rgba(243, 234, 223, 0.5);
  transform: translateX(-50%);
}

.fullscreen-content::before {
  top: -42px;
}

.fullscreen-content::after {
  bottom: 0;
}

.fullscreen-content p {
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: #c8ae82;
  font-size: 0.76rem;
  margin-bottom: 18px;
}

.fullscreen-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3.8rem, 11vw, 7.8rem);
  line-height: 0.78;
  text-transform: uppercase;
  color: #f3eadf;
  text-shadow: 0 22px 60px rgba(0, 0, 0, 0.65);
}

.fullscreen-content h2 span {
  display: block;
  font-family: 'Cinzel', serif;
  font-size: 0.33em;
  letter-spacing: 0.24em;
  margin: 12px 0;
}

.fullscreen-divider {
  width: min(390px, 78%);
  margin: 24px auto 22px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #c8ae82;
}

.fullscreen-divider span {
  flex: 1;
  height: 1px;
  background: rgba(200, 174, 130, 0.75);
}

.fullscreen-divider i {
  font-style: normal;
  font-size: 0.95rem;
}

.fullscreen-info {
  width: min(560px, 100%);
  margin: 0 auto;
  padding: 18px 24px;
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(243, 234, 223, 0.18);
  backdrop-filter: blur(5px);
}

.fullscreen-content h3 {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.25rem, 3.2vw, 2rem);
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.fullscreen-content strong {
  display: block;
  font-family: 'Cinzel', serif;
  font-size: clamp(0.9rem, 2.4vw, 1.25rem);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #eadcc6;
  margin-bottom: 12px;
}

.fullscreen-content small {
  display: block;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(243, 234, 223, 0.76);
}

.fullscreen-badge {
  position: absolute;
  z-index: 3;
  right: 11%;
  bottom: 10%;
  width: 96px;
  height: 96px;
  border-radius: 999px;
  border: 1px solid rgba(243, 234, 223, 0.46);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  font-weight: 800;
  color: rgba(243, 234, 223, 0.72);
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(6px);
  animation: badgeFloat 6s ease-in-out infinite;
}

@keyframes slowZoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.06);
  }
}

@keyframes fullscreenContentIn {
  from {
    opacity: 0;
    transform: translateY(36px) scale(0.96);
    filter: blur(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes badgeFloat {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}

/* MOBILE */
@media (max-width: 720px) {
  .fullscreen-photo-section {
    min-height: 100svh;
    align-items: flex-start;
  }

  .photo-bg img {
    object-position: center top;
  }

  .fullscreen-overlay {
    background:
      radial-gradient(circle at 50% 23%, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.56) 62%, rgba(0, 0, 0, 0.86) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.78));
  }

  .fullscreen-content {
    width: 94%;
    max-width: 390px;
    padding: 30px 14px;
    margin-top: 275px;
  }

  .fullscreen-content::before {
    top: -58px;
    width: 72%;
  }

  .fullscreen-content::after {
    bottom: 0;
    width: 72%;
  }

  .fullscreen-content p {
    font-size: 0.62rem;
    letter-spacing: 0.22em;
    margin-bottom: 15px;
  }

  .fullscreen-content h2 {
    font-size: clamp(3.05rem, 15vw, 4.35rem);
    line-height: 0.78;
  }

  .fullscreen-content h2 span {
    margin: 10px 0;
  }

  .fullscreen-divider {
    width: min(320px, 72%);
    margin: 19px auto 17px;
  }

  .fullscreen-info {
    width: 94%;
    padding: 14px 12px;
  }

  .fullscreen-content h3 {
    font-size: 1.02rem;
    letter-spacing: 0.12em;
    margin-bottom: 8px;
  }

  .fullscreen-content strong {
    font-size: 0.76rem;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }

  .fullscreen-content small {
    font-size: 0.6rem;
    letter-spacing: 0.1em;
  }

  .fullscreen-badge {
    width: 72px;
    height: 72px;
    right: 18px;
    bottom: 24px;
    font-size: 1.75rem;
  }
}

/* iPhone y pantallas angostas */
@media (max-width: 430px) {
  .fullscreen-content {
    margin-top: 285px;
  }

  .fullscreen-content::before {
    top: -62px;
  }

  .fullscreen-content h2 {
    font-size: clamp(2.95rem, 14vw, 4.1rem);
  }

  .fullscreen-content h3 {
    letter-spacing: 0.11em;
  }

  .fullscreen-content strong {
    letter-spacing: 0.08em;
  }
}

/* Pantallas muy pequeñas */
@media (max-width: 390px) {
  .fullscreen-content {
    margin-top: 270px;
  }

  .fullscreen-content h2 {
    font-size: clamp(2.65rem, 14vw, 3.75rem);
  }

  .fullscreen-info {
    padding: 12px 10px;
  }

  .fullscreen-badge {
    width: 66px;
    height: 66px;
    font-size: 1.6rem;
  }
}
</style>