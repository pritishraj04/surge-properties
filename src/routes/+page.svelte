<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  import "iconify-icon";

  import PropertyCard from "$lib/components/PropertyCard.svelte";
  import ChooseUs from "$lib/components/ChooseUs.svelte";

  const featureCarouselOption = {
    rewind: true,
    pagination: false,
    autoplay: true,
    gap: "1rem",
    perPage: 4,
    breakpoints: {
      1220: {
        perPage: 3,
      },
      930: {
        perPage: 2,
      },
      620: {
        perPage: 1,
      },
    },
  };
</script>

<main>
  <section class="margin-be-section">
    <div class="container">
      <div class="hero-section ">
        <div class="heading text-center">
          <h1 class="section-title fs-primary-heading fw-bold">
            Find Your Property that Suits You
          </h1>
          <p>
            Lorem ipsum is simply dummy text for typing and printing test is
            available.
          </p>
        </div>
        <div class="search bg-neutral-100">
          <form action="">
            <div class="tabs">
              <span class="tab">
                <input type="radio" checked name="tab" id="buy" value="buy" />
                <label for="buy">Buy</label>
              </span>
              <span class="tab">
                <input type="radio" name="tab" id="rent" value="rent" />
                <label for="rent">Rent</label>
              </span>
            </div>
            <div class="search-inputs">
              <input
                class="search-box"
                type="text"
                placeholder="Search Properties"
              />
              <div class="filter-options">
                <select name="budget" id="budget">
                  <option value="none" selected>Budget</option>
                  <option value="0-5">0L-5L</option>
                  <option value="5-10">5L-10L</option>
                  <option value="10-15">10L-15L</option>
                  <option value="15-20">15L-20L</option>
                </select>
                <select name="budget" id="budget">
                  <option value="none" selected>Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <button>Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section class="margin-block-section">
    <div class="container">
      <h1 class="section-title fs-primary-heading fw-bold">
        Hot Selling Projects in Patna
      </h1>
      <div class="featured-list">
        <Splide
          hasTrack={false}
          options={featureCarouselOption}
          aria-labelledby="feature-carousel"
        >
          <SplideTrack>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
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
      </div>
    </div>
  </section>
  <section class="margin-block-section">
    <div class="container">
      <h1 class="section-title fs-primary-heading fw-bold">Why Choose us</h1>
      <p>
        Lorem Ipsum is simply dummy text printing and type setting industry
        Lorem Ipsum been industry
      </p>
      <div class="choose-us">
        <ChooseUs
          heading="Trusted"
          desc="Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever a galley."
          icon="eos-icons:trusted-organization"
          accent="#14d"
        />
        <ChooseUs
          heading="Easy Finance"
          desc="Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever a galley."
          icon="mdi:money"
          accent="#f56"
        />
        <ChooseUs
          heading="Support"
          desc="Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever a galley."
          icon="bx:support"
          accent="#897"
        />
        <ChooseUs
          heading="Satisfaction"
          desc="Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever a galley."
          icon="fluent:handshake-16-filled"
          accent="#184"
        />
      </div>
    </div>
  </section>
  <section class="margin-block-section">
    <div class="container">
      <h1 class="section-title fs-primary-heading fw-bold">
        Properties for sale
      </h1>
      <div class="sale-list">
        <Splide
          hasTrack={false}
          options={featureCarouselOption}
          aria-labelledby="feature-carousel"
        >
          <SplideTrack>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
            <SplideSlide>
              <PropertyCard />
            </SplideSlide>
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
      </div>
    </div>
  </section>
  <section class="margin-bs-section">
    <div class="banner-wrapper text-center">
      <h1 class="section-title fs-primary-heading fw-bold">
        Be the first to see new properties
      </h1>
      <p>
        Register with us to get instant property alerts as soon as a property
        hits Rightmove, save properties and searches, personalise content, and
        more...
      </p>
      <a href="/" class="button banner-button">Get Updates</a>
    </div>
  </section>
  <!-- <section class="margin-block-section">TODO::Agent list Section</section> -->
</main>

<style>
  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8.5rem 2rem;
    border-radius: var(--br-primary);
    background-image: linear-gradient(45deg, rgb(160, 160, 160), transparent);
    background-image: url("../lib/assets/imgs/breno-assis-r3WAWU5Fi5Q-unsplash.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .heading {
    color: var(--clr-neutral-800);
    background-color: var(--clr-neutral-300);
    padding: 30px 20px;
    border-radius: 10px;
    margin-bottom: -15px;
  }
  .search {
    padding: 1.8rem 2rem;
    width: 100%;
    max-width: 780px;
    border-radius: var(--br-primary);
  }
  .tabs {
    margin: 0.3rem;
    border-radius: var(--br-primary);
  }
  .tab label {
    padding: 6px 12px;
    border-radius: 10px 10px 0 0;
    user-select: none;
    cursor: pointer;
  }
  .tab input {
    display: none;
  }
  .tabs input:checked + label {
    background-color: var(--clr-accent-400);
    color: white;
  }
  .search-inputs {
    display: flex;
  }
  .search-inputs button {
    padding-inline: 0.75em;
    border-radius: 0 10px 10px 0;
    border: 0;
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-botton);
    color: var(--clr-neutral-100);
    background-color: var(--clr-accent-400);
    cursor: pointer;
  }
  .search-box {
    border-radius: 10px 0 0 10px;
    border: 0;
    box-shadow: 0 0 2px 0 var(--clr-accent-200);
    padding-inline: 12px;
    height: 52px;
    width: 100%;
    background: #fff;
    font-weight: 600;
    color: #333;
    font-size: 14px;
    text-overflow: ellipsis;
    flex-grow: 3;
  }
  .search-box:focus {
    outline: 0;
    box-shadow: 0 0 3px 0 var(--clr-accent-400);
  }
  .filter-options {
    display: flex;
  }
  .filter-options select {
    padding-inline: 6px;
    border: 0;
    padding-inline: 0.75em;
    font-weight: var(--fw-semi-bold);
    background-color: var(--clr-neutral-200);
  }
  @media (max-width: 680px) {
    .search-inputs {
      flex-direction: column;
    }
    .search-box {
      border-radius: 10px 10px 0 0;
    }
    .search-inputs button {
      height: 52px;
      border-radius: 0 0 10px 10px;
    }
    .filter-options {
      width: 100%;
      flex-wrap: wrap;
    }
    .filter-options select {
      flex-grow: 1;
    }
    .filter-options select {
      height: 52px;
    }
  }
  .featured-list {
    margin-block: 20px;
  }
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
  .choose-us {
    margin-block: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  @media (max-width: 1080px) {
    .choose-us {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 820px) {
    .choose-us {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  /* @media (max-width: 590px) {
    .choose-us {
      grid-template-columns: repeat(1, 1fr);
    }
  } */
  @media (max-width: 430px) {
    .choose-us {
      grid-template-columns: 1fr;
    }
  }
  .sale-list {
    margin-block: 20px;
  }
  .banner-wrapper {
    padding-block: 3rem;
    background-image: linear-gradient(45deg, #f6e8ea, transparent);
  }
  .banner-button {
    line-height: 5;
  }
</style>
