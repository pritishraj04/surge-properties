<script>
  import { page } from "$app/stores";
  // let newDeveloper;
</script>

<main>
  <section class="margin-be-section">
    <div class="container">
      <h1 class="section-title fs-primary-heading fw-bold">
        List your Property now!
      </h1>
      <div class="listing-section">
        <form action="?/addProperty" method="POST" autocomplete="off">
          <fieldset>
            <legend>I am an</legend>
            <div class="form-field">
              <input type="radio" name="iAm" value="Owner" id="owner" /><label
                for="owner">Owner</label
              >
            </div>
            <div class="form-field">
              <input type="radio" name="iAm" value="Agent" id="agent" /><label
                for="agent">Agent</label
              >
            </div>
          </fieldset>
          <div class="property-details">
            <div class="form-field">
              <label for="name">Property Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div class="form-field">
              <label for="name">Society Name</label>
              <input type="text" name="societyName" id="societyName" />
            </div>
            <div class="form-field">
              <label for="locality">Locality</label>
              <input type="text" name="locality" id="locality" required />
            </div>
            <div class="form-field">
              <label for="city">City</label>
              <input type="text" name="city" id="city" required />
            </div>
            <div class="form-field">
              <label for="desc">Description</label>
              <textarea name="desc" id="desc" required />
            </div>
            <div class="form-field">
              <label for="price">Price</label>
              <input type="text" name="price" id="price" required />
            </div>
            <div class="form-field">
              <label for="maintainance">Maintainance fee</label>
              <input type="text" name="maintainance" id="maintainance" />
            </div>
            <div class="form-field">
              <label for="brokerage">Brokrege</label>
              <input type="text" name="brokerage" id="brokerage" />
            </div>
            <div class="form-field">
              <label for="areaSize">Area (in sq. FT)</label>
              <input type="text" name="areaSize" id="areaSize" required />
            </div>
            <div class="form-field">
              <label for="bedrooms">Number of Bedrooms</label>
              <input type="number" name="bedrooms" id="bedrooms" required />
            </div>
            <div class="form-field">
              <label for="bathrooms">Number of Bathrooms</label>
              <input type="number" name="bathrooms" id="bathrooms" required />
            </div>
            <div class="form-field">
              <label for="additionalRooms">Additional Rooms</label>
              <input
                type="text"
                name="additionalRooms"
                id="additionalRooms"
                required
              />
            </div>
            <div class="form-field">
              <label for="ageInMonths">Age In Months</label>
              <input type="text" name="ageInMonths" id="ageInMonths" required />
            </div>
            <div class="form-field">
              <label for="floors">Floor</label>
              <input type="number" name="floors" id="floors" required />
            </div>
            <fieldset>
              <legend>Possession Status</legend>
              {#each $page.data.status as possessionStatus}
                <div class="form-field">
                  <input
                    type="radio"
                    name="status"
                    required
                    value={possessionStatus.name}
                    id={possessionStatus.name}
                  /><label for={possessionStatus.name}
                    >{possessionStatus.name}</label
                  >
                </div>
              {/each}
            </fieldset>
            <fieldset>
              <legend>Property Type</legend>
              {#each $page.data.propertyType as propertyType}
                <div class="form-field">
                  <input
                    type="radio"
                    name="propertyType"
                    required
                    value={propertyType.name}
                    id={propertyType.name}
                  /><label for={propertyType.name}>{propertyType.name}</label>
                </div>
              {/each}
            </fieldset>
            <fieldset>
              <legend>Furnishing Type</legend>
              {#each $page.data.furnishingType as furnishingType}
                <div class="form-field">
                  <input
                    type="radio"
                    name="furnishingType"
                    required
                    value={furnishingType.name}
                    id={furnishingType.name}
                  /><label for={furnishingType.name}
                    >{furnishingType.name}</label
                  >
                </div>
              {/each}
            </fieldset>
            <fieldset>
              <legend>Rent or Sale</legend>
              {#each $page.data.rentorSale as rentOrSale}
                <div class="form-field">
                  <input
                    type="radio"
                    name="rentOrSale"
                    required
                    value={rentOrSale.name}
                    id={rentOrSale.name}
                  /><label for={rentOrSale.name}>{rentOrSale.name}</label>
                </div>
              {/each}
            </fieldset>
            <!-- <fieldset>
              <legend>Property Developer</legend>
              <div class="form-field">
                <input
                  type="radio"
                  name="developer"
                  value={newDeveloper}
                  id="newDeveloper"
                /><label for={newDeveloper}
                  ><input type="text" bind:value={newDeveloper} /></label
                >
              </div>
              {#each $page.data.developer as developer}
                <div class="form-field">
                  <input
                    type="radio"
                    name="developer"
                    value={developer.name}
                    id={developer.name}
                  /><label for={developer.name}>{developer.name}</label>
                </div>
              {/each}
            </fieldset> -->
            <fieldset>
              <legend>Choose Furnishings</legend>
              {#each $page.data.furnitures as furnitures}
                <div class="form-field">
                  <input
                    type="checkbox"
                    name="furnitures"
                    value={furnitures.name}
                    id={furnitures.name}
                  /><label for={furnitures.name}>{furnitures.name}</label>
                </div>
              {/each}
            </fieldset>
            <fieldset>
              <legend>Choose Amenities</legend>
              {#each $page.data.amenities as amenities}
                <div class="form-field">
                  <input
                    type="checkbox"
                    name="amenities"
                    value={amenities.name}
                    id={amenities.name}
                  /><label for={amenities.name}>{amenities.name}</label>
                </div>
              {/each}
            </fieldset>
            <div class="form-field disabled form-field-hidden">
              <input
                type="text"
                name="user"
                id="user"
                value={$page.data.user ? $page.data.user.email : "guest"}
                readonly
                tabindex="-1"
              />
            </div>
          </div>
          <div class="form-field button-form-field margin-block-400">
            <button class="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</main>

<style>
  fieldset {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  fieldset .form-field {
    display: inline;
    background-color: var(--clr-neutral-400);
    padding: 5px 15px;
    border-radius: 50px;
  }
  .property-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  .button-form-field {
    display: block;
    text-align: center;
  }
</style>
