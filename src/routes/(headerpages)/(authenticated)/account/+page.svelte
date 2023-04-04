<script>
  import { page } from "$app/stores";
  import PropertyCard from "$lib/components/PropertyCard.svelte";
  const user = $page.data.user;
  const userProperties = $page.data.properties.filter(
    (el) => el.userId === user.id
  );
</script>

<main>
  <section class="margin-be-section">
    <div class="container bg-primary padding-block-400">
      <h1 class="section-title fs-primary-heading fw-bold">Account</h1>
      <div class="account-details">
        <div class="detail-field">
          <h4>Email:</h4>
          <p>{user.email}</p>
        </div>
        <div class="detail-field">
          <h4>Phone:</h4>
          <p>{parseInt(user.phone)}</p>
        </div>
        <div class="detail-field">
          <h4>Role:</h4>
          <p>{user.role}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="margin-block-section">
    <div class="container bg-primary padding-block-400">
      <h1 class="section-title fs-primary-heading fw-bold">
        Your listed properties
      </h1>
      <div class="properties-details">
        {#each userProperties as property}
          <PropertyCard
            id={property.id}
            name={property.name}
            address={`${property.locality}, ${property.city}`}
            price={property.price}
            area={property.areaSize}
            bhk={property.bedrooms}
            rentOrSale={property.rentOrSale}
            hot={property.hot}
            slug={property.slug}
          />
        {:else}
          <h3>You have not listed any properties yet.</h3>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  .detail-field {
    display: flex;
    gap: 16px;
  }
  .detail-field h4 {
    font-weight: 500;
    color: var(--clr-neutral-600);
  }
  .properties-details {
    margin-block: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  @media (max-width: 1080px) {
    .properties-details {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 820px) {
    .properties-details {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  /* @media (max-width: 590px) {
      .properties-details {
        grid-template-columns: repeat(1, 1fr);
      }
    } */
  @media (max-width: 430px) {
    .properties-details {
      grid-template-columns: 1fr;
    }
  }
</style>
