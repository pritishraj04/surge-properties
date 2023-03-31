<script>
  import Logo from "$lib/components/Logo.svelte";

  let isMenuOpen = false;
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
      <nav class={isMenuOpen ? "nav-shown" : ""}>
        <!-- svelte-ignore a11y-no-redundant-roles -->
        <ul class="nav-list" role="list">
          <li><a href="/sale">Buy</a></li>
          <li><a href="/rental">Rent</a></li>
          <li><a href="/signin">Sign In</a></li>
          <li>
            <a class="cta-button" href="/add-property"
              >Sell or rent your Property</a
            >
          </li>
          <li>
            <a href="/"
              ><iconify-icon
                icon="material-symbols:list-alt-outline"
                style="font-size: 30px;"
              /></a
            >
          </li>
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
    background-color: rgba(255, 255, 255, 0.5);
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
  @media (max-width: 646px) {
    .header-section {
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 20px;
    }
    nav {
      width: 100%;
      position: absolute;
      top: 90px;
      left: 700px;
      padding-block: 30px;
      background-color: var(--clr-neutral-100);
      transition: left 230ms;
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
    .nav-shown {
      left: 0;
    }
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
</style>
