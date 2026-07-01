<template>
  <section class="editorial-collage-section">
    <div class="editorial-bg-word">The Times</div>

    <div class="editorial-heading">
      <p>Edición de colección</p>
      <h2>The Quinceañera Times</h2>
      <span>Una portada especial para una noche inolvidable</span>
    </div>

    <div class="editorial-layout">
      <article class="editorial-side editorial-left">
        <img src="/images/photo30.jpg" alt="Ivanna foto 30" />
      </article>

      <article class="editorial-newspaper">
        <div class="newspaper-label">Save the Date</div>
        <img src="/images/newspaper.jpg" alt="Periódico completo Save the Date" />
      </article>

     <article class="editorial-side editorial-right">
  <img :src="'/images/photo334-final.jpg'" alt="Ivanna foto derecha editorial" />
</article>

      <div class="editorial-note note-one">
        <span>Última hora</span>
        <p>Una celebración mágica está por comenzar.</p>
      </div>

      <div class="editorial-note note-two">
        <span>Código de vestimenta</span>
        <p>Formal · Elegante</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.editorial-collage-section {
  position: relative;
  min-height: 100vh;
  padding: 90px 20px;
  overflow: hidden;
  background:
    linear-gradient(rgba(243, 234, 223, 0.96), rgba(232, 220, 207, 0.96)),
    radial-gradient(circle at 20% 20%, rgba(200, 174, 130, 0.28), transparent 34%);
  color: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.editorial-collage-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(17, 17, 17, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(17, 17, 17, 0.045) 1px, transparent 1px);
  background-size: 38px 38px;
  opacity: 0.5;
  pointer-events: none;
}

.editorial-bg-word {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Playfair Display', serif;
  font-size: clamp(5rem, 18vw, 16rem);
  font-weight: 800;
  color: rgba(17, 17, 17, 0.045);
  white-space: nowrap;
  pointer-events: none;
}

.editorial-heading {
  position: relative;
  z-index: 5;
  text-align: center;
  width: min(980px, 100%);
  margin-bottom: 54px;
}

.editorial-heading p {
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #8d9789;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.editorial-heading h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.8rem, 8vw, 6.4rem);
  line-height: 0.9;
  color: #111111;
  margin-bottom: 18px;
}

.editorial-heading span {
  display: inline-block;
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6d6258;
}

.editorial-layout {
  position: relative;
  z-index: 5;
  width: min(1120px, 100%);
  min-height: 570px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editorial-side,
.editorial-newspaper {
  background: #f7efe4;
  padding: 9px;
  border: 1px solid rgba(17, 17, 17, 0.24);
  box-shadow:
    0 28px 80px rgba(17, 17, 17, 0.28),
    0 0 50px rgba(200, 174, 130, 0.18);
  overflow: hidden;
}

.editorial-side img,
.editorial-newspaper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.editorial-left {
  position: absolute;
  left: 5%;
  top: 12%;
  width: clamp(180px, 24vw, 300px);
  height: clamp(260px, 36vw, 430px);
  transform: rotate(-6deg);
  animation: leftEditorialIn 1s ease both, editorialFloat 7s ease-in-out infinite;
}

.editorial-right {
  position: absolute;
  right: 5%;
  bottom: 8%;
  width: clamp(180px, 24vw, 300px);
  height: clamp(260px, 36vw, 430px);
  transform: rotate(6deg);
  animation: rightEditorialIn 1s ease both, editorialFloat 7s ease-in-out infinite reverse;
  animation-delay: 0.25s, 1.4s;
}

.editorial-newspaper {
  position: relative;
  z-index: 6;
  width: clamp(250px, 33vw, 420px);
  transform: rotate(1deg);
  animation: newspaperIn 1.1s ease both, editorialFloat 8s ease-in-out infinite;
  animation-delay: 0.1s, 1.6s;
}

.newspaper-label {
  position: absolute;
  z-index: 3;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 18px;
  background: #111111;
  color: #f3eadf;
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 0 12px 28px rgba(17, 17, 17, 0.24);
}

.editorial-note {
  position: absolute;
  z-index: 7;
  width: min(250px, 70vw);
  padding: 20px 18px;
  background: rgba(247, 239, 228, 0.96);
  border: 1px solid rgba(17, 17, 17, 0.22);
  box-shadow: 0 18px 50px rgba(17, 17, 17, 0.22);
}

.editorial-note::before {
  content: '';
  position: absolute;
  inset: 8px;
  border: 1px solid rgba(17, 17, 17, 0.16);
  pointer-events: none;
}

.editorial-note span {
  display: block;
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8d9789;
  margin-bottom: 8px;
  font-weight: 700;
}

.editorial-note p {
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  line-height: 1.1;
  color: #111111;
}

.note-one {
  left: 0;
  bottom: 10%;
  transform: rotate(4deg);
  animation: noteInLeft 1s ease both, editorialFloat 8s ease-in-out infinite;
  animation-delay: 0.45s, 1.8s;
}

.note-two {
  right: 0;
  top: 12%;
  transform: rotate(-4deg);
  animation: noteInRight 1s ease both, editorialFloat 7s ease-in-out infinite reverse;
  animation-delay: 0.6s, 2s;
}

@keyframes newspaperIn {
  from {
    opacity: 0;
    transform: translateY(80px) rotate(0deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateY(0) rotate(1deg) scale(1);
  }
}

@keyframes leftEditorialIn {
  from {
    opacity: 0;
    transform: translateX(-90px) rotate(-12deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(-6deg) scale(1);
  }
}

@keyframes rightEditorialIn {
  from {
    opacity: 0;
    transform: translateX(90px) rotate(12deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(6deg) scale(1);
  }
}

@keyframes noteInLeft {
  from {
    opacity: 0;
    transform: translateX(-70px) rotate(10deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(4deg) scale(1);
  }
}

@keyframes noteInRight {
  from {
    opacity: 0;
    transform: translateX(70px) rotate(-10deg) scale(0.92);
  }

  to {
    opacity: 1;
    transform: translateX(0) rotate(-4deg) scale(1);
  }
}

@keyframes editorialFloat {
  0%, 100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -13px;
  }
}

@media (max-width: 768px) {
  .editorial-collage-section {
    min-height: 100svh;
    padding: 72px 14px 96px;
  }

  .editorial-bg-word {
    font-size: 6.5rem;
    top: 4%;
  }

  .editorial-heading {
    margin-bottom: 26px;
  }

  .editorial-heading p {
    font-size: 0.58rem;
    letter-spacing: 0.18em;
  }

  .editorial-heading h2 {
    font-size: clamp(2.1rem, 11vw, 3.5rem);
    line-height: 0.92;
  }

  .editorial-heading span {
    font-size: 0.6rem;
    letter-spacing: 0.14em;
  }

  .editorial-layout {
    min-height: 760px;
  }

  .editorial-newspaper {
    width: min(76vw, 288px);
    top: 26px;
    z-index: 6;
  }

  .editorial-left {
    width: 120px;
    height: 176px;
    left: -8px;
    top: 118px;
    z-index: 5;
  }

  .editorial-right {
    width: 120px;
    height: 176px;
    right: -8px;
    bottom: 18px;
    z-index: 5;
  }

  .editorial-note {
    width: 150px;
    padding: 12px 10px;
  }

  .editorial-note span {
    font-size: 0.46rem;
  }

  .editorial-note p {
    font-size: 0.9rem;
  }

  .note-two {
    right: 18px;
    top: 126px;
    left: auto;
    bottom: auto;
    transform: rotate(-4deg);
    z-index: 8;
  }

  .note-one {
    left: 12px;
    bottom: 28px;
    right: auto;
    top: auto;
    transform: rotate(-5deg);
    z-index: 8;
  }
}

@media (max-width: 390px) {
  .editorial-layout {
    min-height: 730px;
  }

  .editorial-newspaper {
    width: min(78vw, 270px);
  }

  .editorial-note {
    width: 140px;
  }

  .editorial-left,
  .editorial-right {
    width: 112px;
    height: 164px;
  }
}
</style>