<script>
  import "iconify-icon";
  export let heading,
    desc,
    icon,
    accent = "#000";
</script>

<div class="choose">
  <div class="icon">
    <iconify-icon
      style={`font-size:40px; color: ${accent};`}
      height="3em"
      {icon}
    />
  </div>
  <h3>{heading}</h3>
  <p>
    {desc}
  </p>
</div>

<style>
  .choose {
    background-color: var(--clr-neutral-100);
    border-radius: 10px;
    padding: 30px 20px;
    text-align: center;
  }
  .choose h3 {
    font-size: 1.2rem;
    font-weight: 700;
  }
  .choose p {
    font-size: 0.8rem;
    font-weight: 300;
  }
</style>
