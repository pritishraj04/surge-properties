<script>
  import { shortlist } from "$lib/stores";
  export let name = "",
    address = "",
    price = "",
    bhk = "",
    rentOrSale = "Rent",
    hot = false,
    id,
    slug;

  const removeShortlist = (id) => {
    if ($shortlist.filter((e) => e.id === id).length > 0) {
      $shortlist = $shortlist.filter((e) => e.id !== id);
    }
  };
</script>

<div class="shortlist-card">
  <button
    class="button delete-button"
    on:click={removeShortlist(id)}
    data-type="ghost"
    ><iconify-icon icon="material-symbols:delete-outline" /></button
  >
  <!-- fix: not going to sale -->
  <a
    href={`${rentOrSale === "Rent" ? "/rental" : "/sale"}/${slug}`}
    class="card-wrapper"
  >
    <div class="image">
      {#if hot}
        <span class="op">Hot</span>
      {/if}
      <img src={"./assets/imgs/placeholder-image.jpg"} alt="placeholder" />
    </div>
    <div class="details">
      <h3>{name}</h3>
      <h4>{bhk} BHK Flats</h4>
      <p>{address}</p>
      <h5>₹{price}</h5>
      <p />
    </div>
  </a>
</div>

<style>
  .shortlist-card {
    position: relative;
    background-color: var(--clr-neutral-100);
    border-radius: 10px;
    border: 1px solid var(--clr-neutral-300);
    margin-bottom: 5px;
  }
  .card-wrapper {
    display: flex;
    text-decoration: none;
    min-width: 420px;
  }
  @media (max-width: 680px) {
    .card-wrapper {
      min-width: unset;
    }
  }
  .delete-button {
    position: absolute;
    font-size: 1rem;
    top: 2px;
    right: 2px;
  }
  .image {
    position: relative;
    max-width: 42%;
  }
  .image img {
    margin-inline: auto;
  }
  .op {
    position: absolute;
    inset: 10px auto auto 10px;
    padding: 3px;
    font-weight: var(--fw-bold);
    font-size: 10px;
    background-color: var(--clr-neutral-900);
    color: var(--clr-neutral-300);
    border-radius: 10px;
  }
  .details {
    padding: 8px 10px;
    text-align: left;
    max-width: 58%;
  }
  .details h3 {
    color: var(--clr-neutral-900);
    font-size: var(--fs-500);
    font-weight: var(--fw-semi-bold);
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .details h4 {
    color: var(--clr-neutral-700);
    font-size: var(--fs-400);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .details p {
    font-size: var(--fs-200);
    color: var(--clr-neutral-600);
    margin-bottom: 4px;
  }
  .details h5 {
    color: var(--clr-neutral-600);
    font-weight: var(--fw-semi-bold);
  }
</style>
