<script>
  import "iconify-icon";
  import { page } from "$app/stores";
  import PropertyCard from "$lib/components/PropertyCard.svelte";
  const rentProperties = $page.data.properties.filter(
    (el) => el.rentOrSaleName === "Rent"
  );
</script>

<svelte:head>
  <title>Rent | Surge Properties</title>
</svelte:head>

<main>
  <section class="margin-be-section">
    <div class="container">
      <h1 class="section-title fs-primary-heading fw-bold">
        Property for Rent in Patna
      </h1>
      <p>
        Showing {rentProperties.length}
        {rentProperties.length > 1 ? "properties" : "property"} for Rent in patna
      </p>
      <div class="rent-list">
        {#each $page.data.properties as property}
          {#if property.rentOrSaleName === "Rent"}
            <PropertyCard
              id={property.id}
              name={property.name}
              address={`${property.locality}, ${property.city}`}
              price={property.price}
              area={property.areaSize}
              bhk={property.bedrooms}
              rentOrSale={property.rentOrSaleName}
              hot={property.hot}
              slug={property.slug}
            />
          {/if}
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  .rent-list {
    margin-block: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  @media (max-width: 1080px) {
    .rent-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 820px) {
    .rent-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  /* @media (max-width: 590px) {
      .rent-list {
        grid-template-columns: repeat(1, 1fr);
      }
    } */
  @media (max-width: 430px) {
    .rent-list {
      grid-template-columns: 1fr;
    }
  }
</style>
