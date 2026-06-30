<template>
  <section class="final-message-section">
    <div class="final-bg-word">Próximamente</div>

    <div class="final-card">
      <div class="final-top-line">
        <span></span>
        <i>✉</i>
        <span></span>
      </div>

      <p class="final-kicker">The Quinceañera Times</p>

      <h2>
        Invitación formal
        <span>próximamente</span>
      </h2>

      <div class="final-divider">
        <span></span>
        <i>♥</i>
        <span></span>
      </div>

      <p class="final-text">
        Más detalles serán revelados en la próxima edición.
      </p>

      <h3>
        La historia apenas comienza...
      </h3>

      <div class="final-footer">
        <p>Ivanna Gisselle XV</p>
        <strong>16 de octubre de 2026</strong>
      </div>
    </div>

    <div class="final-floating-note note-left">
      Guarda la fecha
    </div>

    <div class="final-floating-note note-right">
      Edición especial
    </div>
  </section>
</template>

<style scoped>
.final-message-section {
  position: relative;
  min-height: 100vh;
  padding: 90px 20px;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 15%, rgba(200, 174, 130, 0.2), transparent 32%),
    radial-gradient(circle at 80% 80%, rgba(141, 151, 137, 0.16), transparent 34%),
    linear-gradient(180deg, #080808 0%, #16110d 48%, #080808 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.final-message-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 38px 38px;
  opacity: 0.3;
  pointer-events: none;
}

.final-bg-word {
  position: absolute;
  top: 6%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Playfair Display', serif;
  font-size: clamp(4rem, 16vw, 15rem);
  font-weight: 800;
  color: rgba(255, 255, 255, 0.035);
  white-space: nowrap;
  pointer-events: none;
}

.final-card {
  position: relative;
  z-index: 5;
  width: min(92vw, 680px);
  padding: 54px 34px 42px;
  text-align: center;
  color: #111111;
  background:
    linear-gradient(180deg, rgba(246, 238, 227, 0.98), rgba(229, 215, 197, 0.97));
  border: 1px solid rgba(243, 234, 223, 0.34);
  box-shadow:
    0 40px 120px rgba(0, 0, 0, 0.68),
    inset 0 0 0 8px rgba(17, 17, 17, 0.045);
  animation: finalCardIn 1.2s ease both;
}

.final-card::before,
.final-card::after {
  content: '';
  position: absolute;
  left: 18px;
  right: 18px;
  height: 2px;
  background: #111111;
}

.final-card::before {
  top: 18px;
}

.final-card::after {
  bottom: 18px;
}

.final-top-line {
  width: min(420px, 80%);
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #111111;
}

.final-top-line span {
  flex: 1;
  height: 1px;
  background: #111111;
}

.final-top-line i {
  font-style: normal;
  font-size: 1.1rem;
}

.final-kicker {
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: #6d6258;
  font-size: 0.76rem;
  margin-bottom: 18px;
}

.final-card h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.9rem, 8vw, 6.2rem);
  line-height: 0.92;
  text-transform: uppercase;
  color: #111111;
}

.final-card h2 span {
  display: block;
  font-family: 'Cinzel', serif;
  font-size: 0.34em;
  letter-spacing: 0.2em;
  margin-top: 14px;
}

.final-divider {
  width: min(440px, 82%);
  margin: 32px auto 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #111111;
}

.final-divider span {
  flex: 1;
  height: 1px;
  background: #111111;
}

.final-divider i {
  font-style: normal;
  font-size: 0.85rem;
}

.final-text {
  width: min(440px, 100%);
  margin: 0 auto 22px;
  font-size: clamp(1rem, 2.4vw, 1.18rem);
  line-height: 1.7;
  color: #6d6258;
}

.final-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  font-weight: 600;
  font-style: italic;
  color: #111111;
  margin-bottom: 34px;
}

.final-footer {
  padding-top: 24px;
  border-top: 1px solid rgba(17, 17, 17, 0.22);
}

.final-footer p {
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.82rem;
  color: #6d6258;
  margin-bottom: 8px;
}

.final-footer strong {
  display: block;
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #111111;
  font-size: 0.95rem;
}

.final-floating-note {
  position: absolute;
  z-index: 4;
  padding: 18px 22px;
  background: #f3eadf;
  color: #111111;
  border: 1px solid rgba(17, 17, 17, 0.28);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.45);
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.note-left {
  left: 8%;
  top: 20%;
  transform: rotate(-7deg);
  animation: noteFloat 7s ease-in-out infinite;
}

.note-right {
  right: 8%;
  bottom: 18%;
  transform: rotate(6deg);
  animation: noteFloat 8s ease-in-out infinite reverse;
}

@keyframes finalCardIn {
  from {
    opacity: 0;
    transform: translateY(42px) scale(0.94);
    filter: blur(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes noteFloat {
  0%, 100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -16px;
  }
}

@media (max-width: 720px) {
  .final-message-section {
    min-height: 100svh;
    padding: 70px 16px;
  }

  .final-card {
    padding: 48px 20px 38px;
  }

  .final-floating-note {
    display: none;
  }

  .final-card h2 span {
    letter-spacing: 0.14em;
  }

  .final-footer strong {
    letter-spacing: 0.1em;
  }
}
</style>