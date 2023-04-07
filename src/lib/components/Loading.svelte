<div class="overlay" style="z-index: 9999999;">
  <svg class="circular" viewBox="0 0 100 100">
    <circle
      class="path"
      cx="50"
      cy="50"
      r="20"
      fill="none"
      stroke-width="4"
      stroke-miterlimit="10"
    />
  </svg>
</div>

<style>
  .circular {
    animation: rotate 2s linear infinite;
    height: 100px;
    left: calc(50vw - 50px);
    position: fixed;
    top: calc(50vh - 50px);
    width: 100px;
  }
  .path {
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
    stroke: var(--clr-accent-200);
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
</style>
