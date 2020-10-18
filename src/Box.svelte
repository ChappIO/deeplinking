<script>
    let className = '';

    export {className as class};
</script>

<div class={`box ${className}`}>
    <slot/>
</div>

<style lang="scss">
  @import "variables";

  :global(.box) {
    width: 80vw;
    max-width: 400px;
    background-color: white;
    padding: 24px;
    margin-top: 24px;
    border-radius: 3px;
    border: $border;
  }
</style>