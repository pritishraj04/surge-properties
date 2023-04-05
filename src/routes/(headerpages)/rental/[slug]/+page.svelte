<script>
  import { page } from "$app/stores";
  const property = $page.data.properties.filter(
    (el) => el.slug === $page.params.slug
  )[0];
</script>

<svelte:head>
  <title>Rent - Property | Surge Properties</title>
</svelte:head>

<main>
  <section class="margin-be-section">
    <div class="container">
      <h1 class="section-title fs-primary-heading fw-bold">
        {property.name}
      </h1>
    </div>
  </section>
</main>
