<template>
  <div class="site">
    <header class="site-header">
      <div class="container site-header__inner">
        <NuxtLink to="/" class="site-header__brand">
          <span class="site-header__brand-mark" aria-hidden="true">&#9889;</span>
          <span class="site-header__brand-text">
            <strong>Electrical Engineering Hub</strong>
            <small>Coordinate Systems &amp; Vector Mathematics</small>
          </span>
        </NuxtLink>
        <nav class="site-header__nav" aria-label="Course units">
          <NuxtLink to="/" class="site-header__link">Home</NuxtLink>
          <NuxtLink
            to="/units/rectangular-coordinate-system"
            class="site-header__link site-header__link--unit"
          >
            Unit 1 &middot; Rectangular
          </NuxtLink>
          <NuxtLink
            to="/units/vector-operations"
            class="site-header__link site-header__link--unit"
          >
            Unit 2 &middot; Vectors
          </NuxtLink>
          <NuxtLink
            to="/units/cylindrical-coordinate-system"
            class="site-header__link site-header__link--unit"
          >
            Unit 3 &middot; Cylindrical
          </NuxtLink>
          <NuxtLink
            to="/units/spherical-coordinate-system"
            class="site-header__link site-header__link--unit"
          >
            Unit 4 &middot; Spherical
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="site-main">
      <div class="container">
        <slot />
      </div>
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>
          <strong>Electrical Engineering Hub</strong> &mdash; interactive slide decks with
          step-by-step derivations and solved problems for engineering students.
        </p>
        <p class="site-footer__fine">
          All four units &mdash; vector operations, cylindrical and spherical coordinate
          systems &mdash; are published with downloadable PDF decks.
        </p>
      </div>
    </footer>
  </div>
</template>
