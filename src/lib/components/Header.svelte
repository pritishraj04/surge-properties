<script>
  import Logo from "$lib/components/Logo.svelte";
  import { page } from "$app/stores";
  import "iconify-icon";
  import { clickOutside } from "$lib/clickOutside.js";
  import ShortlistCard from "$lib/components/ShortlistCard.svelte";
  import { shortlist } from "$lib/stores";
  let userDropdown = false;
  let shortlistDropdown = false;
  let isMenuOpen = false;
  const handleCloseMenu = () => {
    if (isMenuOpen) {
      isMenuOpen = false;
    }
  };
  const handleCloseUser = () => {
    if (userDropdown) {
      userDropdown = false;
    }
  };
  const handleCloseShortlist = () => {
    if (shortlistDropdown) {
      shortlistDropdown = false;
    }
  };
</script>

<header class="bg-blur">
  <div class="container">
    <section class="header-section">
      <div class="logo">
        <Logo />
        <!-- isheaderLogo="true" -->
        <button
          class="hamburger-button button"
          data-type="ghost"
          on:click={() => (isMenuOpen = !isMenuOpen)}
          ><iconify-icon
            icon={isMenuOpen ? "iconoir:cancel" : "charm:menu-hamburger"}
            style="font-size: 28px"
          /></button
        >
      </div>
      <nav class={isMenuOpen ? "" : "nav-hidden"}>
        <!-- svelte-ignore a11y-no-redundant-roles -->
        <ul class="nav-list" role="list">
          <li><a href="/sale" on:click={handleCloseMenu}>Buy</a></li>
          <li><a href="/rental" on:click={handleCloseMenu}>Rent</a></li>
          {#if !$page.data.user}
            <li><a href="/signin" on:click={handleCloseMenu}>Sign In</a></li>
          {/if}
          <li>
            <a
              class="cta-button"
              href="/add-property"
              on:click={handleCloseMenu}>Sell or rent your Property</a
            >
          </li>
          <li
            class="has-dropdown"
            use:clickOutside
            on:click_outside={handleCloseShortlist}
          >
            <button
              class="button icon-button"
              data-type="ghost"
              on:click={() => (shortlistDropdown = !shortlistDropdown)}
              ><iconify-icon
                icon="fluent:window-bullet-list-20-filled"
                style="font-size: 30px;"
              /></button
            >
            <div
              class={shortlistDropdown
                ? "dropdown shortlist-dropdown"
                : "dropdown shortlist-dropdown dropdown-hidden"}
            >
              <div class="shortlist">
                <div class="shortlist-header">
                  <h2>Shortlisted Properties</h2>
                  <button
                    class="button"
                    data-type="ghost"
                    on:click={handleCloseShortlist}>x</button
                  >
                </div>
                <div class="shortlist-body">
                  {#each $shortlist as property}
                    <ShortlistCard
                      id={property.id}
                      name={property.name}
                      address={property.address}
                      price={property.price}
                      bhk={property.bhk}
                      rentOrSale={property.rentOrSale}
                      hot={property.hot}
                      slug={property.slug}
                    />
                  {:else}
                    <p class="empty-shortlist">
                      Add items to <iconify-icon
                        icon="fluent:window-bullet-list-20-filled"
                        style="font-size: 16px;"
                      /> Shortlist to view here.
                    </p>
                  {/each}
                </div>
              </div>
            </div>
          </li>
          {#if $page.data.user}
            <li
              class="has-dropdown"
              use:clickOutside
              on:click_outside={handleCloseUser}
            >
              <button
                class="button icon-button"
                data-type="ghost"
                on:click={() => (userDropdown = !userDropdown)}
              >
                <iconify-icon
                  icon="fluent:inprivate-account-28-filled"
                  style="font-size: 30px;"
                />
              </button>
              <!-- svelte-ignore a11y-no-redundant-roles -->
              <ul
                class={userDropdown ? "dropdown" : "dropdown dropdown-hidden"}
                role="list"
              >
                <li>
                  <a
                    class="dropdown-menu"
                    on:click={() => {
                      handleCloseUser();
                      handleCloseMenu();
                    }}
                    href="/account"
                  >
                    <div class="dropdown-menu-icon">
                      <iconify-icon
                        icon="fluent:tab-inprivate-account-20-filled"
                        style="font-size: 30px;"
                      />
                    </div>
                    Account</a
                  >
                </li>
                <li>
                  <form action="/logout" method="POST">
                    <button
                      class="button logout dropdown-menu"
                      on:click={handleCloseUser}
                      data-type="ghost"
                      type="submit"
                    >
                      <div class="dropdown-menu-icon">
                        <iconify-icon
                          icon="ph:sign-out-bold"
                          style="font-size: 30px;"
                        />
                      </div>
                      Logout</button
                    >
                  </form>
                </li>
              </ul>
            </li>
          {/if}
        </ul>
      </nav>
    </section>
  </div>
</header>
<div style={`height: 95px`} />

<style>
  header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999;
  }
  .header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1.6rem;
  }
  nav ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  nav a {
    text-decoration: none;
    font-weight: 600;
    color: var(--clr-accent-200);
  }
  .logo {
    display: block;
    width: auto;
  }
  .hamburger-button {
    display: none;
  }
  .cta-button {
    background-color: var(--clr-accent-400);
    padding: 10px 12px;
    border-radius: 300vw;
    white-space: nowrap;
    color: var(--clr-neutral-200);
    font-weight: 600;
  }
  .cta-button:hover {
    background-color: var(--clr-neutral-900);
  }
  .logout {
    text-decoration: none;
    color: var(--clr-neutral-500);
    font-weight: var(--fw-semi-bold);
  }
  .logout:hover {
    color: var(--clr-danger);
  }
  .has-dropdown {
    position: relative;
    text-align: center;
    width: 100%;
  }
  .dropdown {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: rgb(244, 244, 244);
    padding: 10px 16px;
    text-align: center;
    right: 0;
    top: 63px;
    transition: cubic-bezier(0, 0.95, 0.55, 0.68) 0.8s;
  }
  .shortlist-dropdown {
    padding: 0;
  }
  .shortlist-header {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    background-color: var(--clr-neutral-300);
  }
  .shortlist-header h2 {
    font-size: 12px;
    font-weight: 500;
  }
  .shortlist-header button {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
  }
  .shortlist-body {
    padding: 8px;
    max-height: 340px;
    overflow-y: auto;
  }
  .icon-button {
    font-weight: 600;
    color: var(--clr-accent-200);
    cursor: pointer;
  }
  .dropdown-hidden {
    /* display: none; */
    height: 0;
    overflow: hidden;
    padding: 0;
  }
  .dropdown-menu {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  @media (max-width: 680px) {
    .header-section {
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 20px;
    }
    nav {
      width: 100%;
      padding-block: 30px;
      transition: cubic-bezier(0, 0.95, 0.55, 0.68) 300ms;
    }
    nav ul {
      flex-direction: column;
      gap: 1.2rem;
    }
    .logo {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      z-index: 999;
    }
    .hamburger-button {
      display: block;
    }
    .nav-hidden {
      height: 0;
      overflow: hidden;
      position: absolute;
      top: 90px;
      padding: 0;
    }
    .dropdown {
      position: unset;
    }
  }
  .empty-shortlist {
    font-size: 14px;
    padding-block: 12px;
    font-weight: 600;
    color: var(--clr-neutral-500);
    min-width: 420px;
  }
</style>
