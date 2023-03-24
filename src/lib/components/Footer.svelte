<script>
  import Logo from "$lib/components/Logo.svelte";
</script>

<footer>
  <div class="container">
    <div class="footer-wrapper">
      <div class="logo">
        <Logo />
      </div>
      <nav class="footer-navigation">
        <div class="nav-section">
          <h3 class="fs-secondary-heading fw-semi-bold">Links</h3>
          <!-- svelte-ignore a11y-no-redundant-roles -->
          <ul role="list">
            <li><a href="/">Buy</a></li>
            <li><a href="/">Rent</a></li>
            <li><a href="/">Sell or rent your Property</a></li>
          </ul>
        </div>

        <div class="nav-section">
          <h3 class="fs-secondary-heading fw-semi-bold">Accounts</h3>
          <!-- svelte-ignore a11y-no-redundant-roles -->
          <ul role="list">
            <li><a href="/">Login</a></li>
            <li><a href="/">Signup</a></li>
            <li><a href="/">Sell or rent your Property</a></li>
          </ul>
        </div>

        <div class="nav-section">
          <h3 class="fs-secondary-heading fw-semi-bold">Our Address</h3>
          <address>New Patna, Bihar</address>
        </div>
        <div class="nav-section">
          <h3 class="fs-secondary-heading fw-semi-bold">
            Subscribe to our newsletter
          </h3>
          <form class="subs" action="">
            <input type="text" placeholder="Email" />
            <button>Submit</button>
          </form>
        </div>
      </nav>
      <div class="footer-text text-center padding-block-200">
        © 2023 All Rights Reserved by Surge Properties
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    padding-top: 20px;
    background-color: var(--clr-neutral-100);
  }
  .footer-wrapper {
    display: grid;
    gap: 20px;
  }
  .footer-navigation {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  @media (max-width: 700px) {
    .footer-navigation {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 480px) {
    .footer-navigation {
      flex-direction: column;
    }
  }
  .subs {
    display: flex;
    margin-block: 10px;
  }
  .subs input {
    border-radius: 10px 0 0 10px;
    border: 0;
    box-shadow: 0 0 2px 0 var(--clr-accent-200);
    padding-inline: 12px;
    height: 38px;
    width: 100%;
    background: #fff;
    font-weight: 600;
    color: #333;
    font-size: 14px;
    text-overflow: ellipsis;
    flex-grow: 3;
  }
  .subs button {
    padding-inline: 0.75em;
    border-radius: 0 10px 10px 0;
    border: 0;
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-botton);
    color: var(--clr-neutral-100);
    background-color: var(--clr-accent-400);
    cursor: pointer;
  }
  .nav-section a {
    text-decoration: none;
    font-weight: 500;
    color: var(--clr-accent-200);
  }
</style>
