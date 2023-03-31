<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  import "iconify-icon";

  const featureCarouselOption = {
    rewind: true,
    pagination: false,
    autoplay: true,
    gap: "1rem",
    perPage: 1,
  };
</script>

<svelte:head>
  <title>Buy - Property | Surge Properties</title>
</svelte:head>

<main>
  <section class="margin-be-section">
    <div class="container">
      <Splide
        hasTrack={false}
        options={featureCarouselOption}
        aria-labelledby="feature-carousel"
      >
        <SplideTrack>
          <SplideSlide>hi</SplideSlide>
          <SplideSlide>g1i</SplideSlide>
          <SplideSlide>g3i</SplideSlide>
          <SplideSlide>g4i</SplideSlide>
        </SplideTrack>
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">
            <iconify-icon
              style="font-size:16px;"
              height="1.5em"
              icon="bx:chevron-left"
            /></button
          >
          <button class="splide__arrow splide__arrow--next">
            <iconify-icon
              style="font-size:16px;"
              height="1.5em"
              icon="bx:chevron-right"
            /></button
          >
        </div>
      </Splide>
      <h1 class="section-title fs-primary-heading fw-bold">Property Name</h1>
    </div>
  </section>
</main>

<style>
  .splide__arrow {
    height: 42px;
    width: 42px;
    background-color: #fff;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  .splide__arrow--prev {
    margin-left: -20px;
  }
  .splide__arrow--next {
    margin-right: -20px;
  }
</style>
