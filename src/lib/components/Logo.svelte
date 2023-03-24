<script>
  import "iconify-icon";
  //   export let isheaderLogo = false;
  let y;
</script>

<svelte:window bind:scrollY={y} />

<!-- {#if isheaderLogo}
  <a href="/" class="company-logo">
    <iconify-icon
      icon="fluent:real-estate-20-filled"
      style={y > 200.0001 ? "font-size: 24px;" : "font-size: 34px;"}
    />
    <div class="logo-text">
      <h4 style={y > 200.0001 ? "font-size: 0.8rem;" : "font-size: 1rem;"}>
        Surge Properties
      </h4>
      <p style={y > 200.0001 ? "font-size: 8px;" : "font-size: 10px;"}>
        Patna, list it.
      </p>
    </div>
  </a>
{:else} -->
<a href="/" class="company-logo">
  <iconify-icon icon="fluent:real-estate-20-filled" style="font-size: 28px;" />
  <div class="logo-text">
    <h4>Surge Properties</h4>
    <p>Patna, list it.</p>
  </div>
</a>

<!-- {/if}
{y} -->
<style>
  .company-logo {
    display: flex;
    width: fit-content;
    gap: 4px;
    text-decoration: none;
    color: #f6e8ea;
    background-color: #4464ad;
    padding: 5px 15px 5px 0;
  }
  h4 {
    font-size: 0.7rem;
    white-space: nowrap;
    font-weight: 600;
  }
  p {
    font-size: 8px;
  }
</style>
