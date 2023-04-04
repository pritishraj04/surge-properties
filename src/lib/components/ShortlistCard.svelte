<script>
  export let name = "The Royal Appartment",
    address = "Bihita, Patna",
    price = "12L",
    bhk = "2, 3",
    rentOrSale = "Rent",
    hot = false,
    slug;
</script>

<a
  href={`${rentOrSale === "Rent" ? "rental" : "sale"}/${slug}`}
  class="shortlist-card"
>
  <button class="button delete-button" data-type="ghost"
    ><iconify-icon icon="fluent-mdl2:cancel" /></button
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

<style>
  .shortlist-card {
    position: relative;
    display: flex;
    text-decoration: none;
    min-width: 420px;
    background-color: var(--clr-neutral-100);
    border-radius: 10px;
    border: 1px solid var(--clr-neutral-300);
    margin-bottom: 5px;
  }
  .delete-button {
    position: absolute;
    font-size: 0.8rem;
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
