<script>
  import { page } from "$app/stores";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import PlaceHolderImage from "$lib/assets/imgs/placeholder-image.jpg";
  const propertyImageCarousel = {
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
  const property = $page.data.properties.filter(
    (el) => el.slug === $page.params.slug
  )[0];
  const propertyImages = $page.data.images.filter(
    (el) => el.propertyName === property.name
  );
  const properyUser = $page.data.users.filter(
    (el) => el.id === property.userId
  )[0];
</script>

<svelte:head>
  <title>Buy - Property | Surge Properties</title>
</svelte:head>

<main>
  <section class="margin-be-section">
    <div class="container">
      <div class="property-head">
        <div class="property-images">
          {#if propertyImages.length > 0}
            <Splide
              hasTrack={false}
              options={propertyImageCarousel}
              aria-labelledby="feature-carousel"
            >
              <SplideTrack>
                {#each propertyImages as image}
                  <SplideSlide>
                    <img src={image.url} alt={image.propertyName} />
                  </SplideSlide>
                {/each}
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
          {:else}
            <img src={PlaceHolderImage} alt="placeholder" />
          {/if}
        </div>
        <div class="property-main-details">
          <h1 class="section-title fs-primary-heading fw-bold">
            {property.name}
          </h1>
          <p>{property.locality}, {property.city}</p>
          <div class="price">
            <h3 class="rent fw-semi-bold">₹{property.price}</h3>
            {#if property.maintainance}
              <p class="maintainance">
                + ₹{property.maintainance} maintainance
              </p>
            {/if}
          </div>
          <div class="status">
            <h3>Status:</h3>
            <p>{property.statusName}</p>
          </div>
          <div class="rooms">
            <h4>
              {property.bedrooms}
              {property.bedrooms > 1 ? "Bedrooms" : "Bedroom"}
            </h4>
            {#if property.additionalRooms}
              <h4>+ {property.additionalRooms}</h4>
            {/if}
          </div>
          <h4>{property.furnishingTypeName}</h4>
          <h4 class="area">{property.areaSize} Sq.Ft. (Saleable Area)</h4>
          <a href={`tel:${properyUser.phone}`} class="button call-button"
            >Call {property.userRole}</a
          >
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .property-head {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 2rem;
  }
  @media (max-width: 680px) {
    .property-head {
      grid-template-columns: 1fr;
    }
  }
  .price,
  .status,
  .rooms {
    display: flex;
    gap: 0.8rem;
  }
  .rooms {
    margin-top: 10px;
  }
  .price {
    margin-top: 10px;
  }
  .area {
    margin-bottom: 2rem;
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
</style>
