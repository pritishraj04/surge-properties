<script>
  import "iconify-icon";

  import PropertyCard from "$lib/components/PropertyCard.svelte";
</script>

<svelte:head>
  <title>Buy | Surge Properties</title>
</svelte:head>

<main>
  <section class="margin-be-section">
    <div class="container">
      <h1 class="section-title fs-primary-heading fw-bold">
        Property for Sale in Patna
      </h1>
      <p>Showing 208 properties for Sale in patna</p>
      <div class="sale-list">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  </section>
</main>

<style>
  .sale-list {
    margin-block: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  @media (max-width: 1080px) {
    .sale-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 820px) {
    .sale-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  /* @media (max-width: 590px) {
    .sale-list {
      grid-template-columns: repeat(1, 1fr);
    }
  } */
  @media (max-width: 430px) {
    .sale-list {
      grid-template-columns: 1fr;
    }
  }
</style>
