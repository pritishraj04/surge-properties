<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  // import { loading } from "$lib/stores";
  // import Loading from "$lib/components/Loading.svelte";
  // import { navigating } from "$app/stores";

  // $: $loading = !$navigating;
</script>

<!-- {#if $loading}
  <Loading />
{/if} -->
<Header />
<slot />
<Footer />
