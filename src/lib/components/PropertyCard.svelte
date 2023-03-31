<div class="property-card">
  <div class="image">
    <span class="op">Hot</span>
    <img src={"./assets/imgs/placeholder-image.jpg"} alt="placeholder" />
  </div>
  <div class="details">
    <h3>The Royal Appartment</h3>
    <p>Bihita, Patna</p>
    <h5>₹44L to 50L</h5>
    <div class="specification">
      <p>2,3 BHK Flats</p>
      |
      <p>818-1,371 SQ.FT (Saleable)</p>
    </div>
    <div class="action">
      <button
        ><iconify-icon icon="material-symbols:list-alt-add" /> Shortlist</button
      >
      <a href="/">Details</a>
    </div>
  </div>
</div>

<style>
  .property-card {
    background-color: var(--clr-neutral-100);
    border-radius: 10px;
    border: 1px solid var(--clr-neutral-300);
    /* max-width: 400px; */
  }
  .image {
    position: relative;
  }
  .image img {
    margin-inline: auto;
  }
  .op {
    position: absolute;
    inset: 10px auto auto 10px;
    padding: 5px;
    font-weight: var(--fw-bold);
    font-size: var(--fs-300);
    background-color: var(--clr-neutral-900);
    color: var(--clr-neutral-300);
    border-radius: 10px;
  }
  .details {
    padding: 8px 10px;
  }
  .details h3 {
    font-size: var(--fs-600);
    font-weight: var(--fw-bold);
    margin-bottom: 8px;
  }
  .details p {
    font-size: var(--fs-300);
    margin-bottom: 4px;
  }
  .details h5 {
    color: var(--clr-neutral-600);
    font-weight: var(--fw-semi-bold);
  }
  .specification {
    display: flex;
    font-weight: var(--fw-light);
    margin-block: 8px;
    gap: 0.6rem;
  }
  .action {
    background-color: rgb(245, 245, 245);
    border-radius: 1000vw;
    padding: 5px;
  }
  .action button {
    border-radius: 1000vw;
    border: 0;
    padding-inline: 10px;
    background-color: var(--clr-accent-400);
    color: var(--clr-neutral-200);
    font-weight: var(--fw-semi-bold);
    cursor: pointer;
    height: 38px;
  }
  .action a {
    margin-left: 10px;
    text-decoration: none;
    font-weight: 500;
    color: var(--clr-accent-200);
  }
</style>
