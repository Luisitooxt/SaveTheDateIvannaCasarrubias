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