<script>
    import Box from "./Box.svelte";
    import {history} from './stores';
</script>

{#if $history.length > 0}
    <Box class="history">
        <h2>Links</h2>
        {#each $history as item}
            <!--suppress HtmlUnknownTarget -->
            <a href={item}>
                {item}
                <button on:click={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            history.remove(item);
                        }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/>
                    </svg>
                </button>
            </a>
        {/each}
    </Box>
{/if}

<style lang="scss">
  @import "./variables";

  :global(.history) {
    display: flex;
    flex-direction: column;

    a {
      background-color: $primary;
      color: white;
      border: none;
      cursor: pointer;
      padding: 12px;
      border-radius: 3px;
      outline: none;
      font-size: 1.3rem;
      text-decoration: none;
      font-family: monospace;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: crosshair;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          fill: white;
          width: 16px;
          height: 16px;
        }
      }

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
</style>