<template>
  <section class="newspaper-zoom-section">
    <div class="zoom-bg-text">Última Hora</div>

    <div class="news-intro">
      <p>The Quinceañera Times</p>
      <h2>Una celebración mágica está por comenzar</h2>
      <span>Edición especial · Save the Date</span>
    </div>

    <div class="zoom-stage">
      <div class="newspaper-main">
        <img src="/images/newspaper.jpg" alt="Periódico Save the Date Ivanna" />
      </div>

      <div class="zoom-card zoom-card-one">
        <span>Detalle especial</span>
        <h3>Save the Date</h3>
      </div>

      <div class="zoom-card zoom-card-two">
        <span>Fecha oficial</span>
        <h3>16 · Octubre · 2026</h3>
      </div>

      <div class="zoom-card zoom-card-three">
        <span>Nota principal</span>
        <h3>Ivanna Gisselle XV</h3>
      </div>

      <div class="news-flash news-flash-one"></div>
      <div class="news-flash news-flash-two"></div>
    </div>
  </section>
</template>

<style scoped>
.newspaper-zoom-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 90px 20px;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(200, 174, 130, 0.16), transparent 35%),
    linear-gradient(180deg, #080808 0%, #15100c 48%, #080808 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.newspaper-zoom-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 36px 36px;
  opacity: 0.28;
  pointer-events: none;
}

.zoom-bg-text {
  position: absolute;
  top: 6%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Playfair Display', serif;
  font-size: clamp(5rem, 17vw, 15rem);
  font-weight: 800;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.035);
  pointer-events: none;
}

.news-intro {
  position: relative;
  z-index: 5;
  text-align: center;
  width: min(900px, 100%);
  margin-bottom: 48px;
}

.news-intro p {
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #c8ae82;
  font-size: 0.82rem;
  margin-bottom: 14px;
}

.news-intro h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 7vw, 5.6rem);
  line-height: 0.95;
  color: #f3eadf;
  margin-bottom: 18px;
}

.news-intro span {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(243, 234, 223, 0.65);
}

.zoom-stage {
  position: relative;
  z-index: 4;
  width: min(1080px, 100%);
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.newspaper-main {
  position: relative;
  z-index: 4;
  width: min(74vw, 420px);
  padding: 10px;
  background: #f3eadf;
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow:
    0 40px 110px rgba(0, 0, 0, 0.7),
    0 0 80px rgba(200, 174, 130, 0.12);
  animation: newspaperFloat 7s ease-in-out infinite;
}

.newspaper-main::before {
  content: '';
  position: absolute;
  inset: -18px;
  border: 1px solid rgba(200, 174, 130, 0.22);
  pointer-events: none;
}

.newspaper-main img {
  width: 100%;
  height: auto;
  display: block;
  filter: contrast(1.03) saturate(0.94);
}

.zoom-card {
  position: absolute;
  z-index: 7;
  width: min(260px, 72vw);
  padding: 22px 20px;
  background:
    linear-gradient(180deg, rgba(246, 238, 227, 0.98), rgba(229, 215, 197, 0.96));
  color: #1c1c1c;
  border: 1px solid rgba(17, 17, 17, 0.35);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.45);
}

.zoom-card::before {
  content: '';
  position: absolute;
  inset: 8px;
  border: 1px solid rgba(17, 17, 17, 0.18);
  pointer-events: none;
}

.zoom-card span {
  display: block;
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6d6258;
  margin-bottom: 8px;
}

.zoom-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  line-height: 1;
  color: #111111;
}

.zoom-card-one {
  left: 4%;
  top: 12%;
  transform: rotate(-5deg);
  animation: zoomCardInLeft 1s ease both, floatCard 6s ease-in-out infinite;
}

.zoom-card-two {
  right: 3%;
  top: 35%;
  transform: rotate(5deg);
  animation: zoomCardInRight 1s ease both, floatCard 7s ease-in-out infinite reverse;
}

.zoom-card-three {
  left: 9%;
  bottom: 8%;
  transform: rotate(3deg);
  animation: zoomCardInBottom 1s ease both, floatCard 8s ease-in-out infinite;
}

.news-flash {
  position: absolute;
  z-index: 10;
  width: 220px;
  height: 220px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  filter: blur(34px);
  opacity: 0;
  pointer-events: none;
}

.news-flash-one {
  top: 18%;
  right: 24%;
  animation: cameraFlashLocal 5.2s ease-in-out infinite;
}

.news-flash-two {
  bottom: 16%;
  left: 26%;
  animation: cameraFlashLocal 6.4s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes newspaperFloat {
  0%, 100% {
    transform: translateY(0) scale(1) rotate(-1deg);
  }

  50% {
    transform: translateY(-16px) scale(1.025) rotate(1deg);
  }
}

@keyframes floatCard {
  0%, 100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -14px;
  }
}

@keyframes zoomCardInLeft {
  from {
    opacity: 0;
    transform: translateX(-80px) rotate(-10deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(-5deg) scale(1);
  }
}

@keyframes zoomCardInRight {
  from {
    opacity: 0;
    transform: translateX(80px) rotate(10deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(5deg) scale(1);
  }
}

@keyframes zoomCardInBottom {
  from {
    opacity: 0;
    transform: translateY(80px) rotate(8deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateY(0) rotate(3deg) scale(1);
  }
}

@keyframes cameraFlashLocal {
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

@media (max-width: 768px) {
  .newspaper-zoom-section {
    min-height: 100svh;
    padding: 72px 14px 96px;
  }

  .zoom-bg-text {
    font-size: 6.5rem;
    top: 4%;
  }

  .news-intro {
    margin-bottom: 26px;
  }

  .news-intro p {
    font-size: 0.58rem;
    letter-spacing: 0.2em;
  }

  .news-intro h2 {
    font-size: clamp(2.1rem, 11vw, 3.5rem);
    line-height: 0.92;
  }

  .news-intro span {
    font-size: 0.6rem;
    letter-spacing: 0.14em;
  }

  .zoom-stage {
    min-height: 730px;
  }

  .newspaper-main {
    width: min(78vw, 292px);
    top: 10px;
  }

  .zoom-card {
    width: 148px;
    padding: 12px 11px;
  }

  .zoom-card span {
    font-size: 0.46rem;
  }

  .zoom-card h3 {
    font-size: 0.98rem;
  }

  .zoom-card-one {
    left: 6px;
    top: 76px;
    right: auto;
    bottom: auto;
    transform: rotate(-5deg);
    z-index: 8;
  }

  .zoom-card-two {
    left: 18px;
    bottom: 18px;
    right: auto;
    top: auto;
    transform: rotate(-4deg);
    z-index: 8;
  }

  .zoom-card-three {
    right: 16px;
    bottom: 54px;
    left: auto;
    top: auto;
    transform: rotate(4deg);
    z-index: 8;
  }
}

@media (max-width: 390px) {
  .zoom-stage {
    min-height: 700px;
  }

  .newspaper-main {
    width: min(80vw, 270px);
  }

  .zoom-card {
    width: 138px;
  }
}
</style>