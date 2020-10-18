<script>
    import Box from "./Box.svelte";
    import {history} from './stores';

    let newLinkValue = '';

    function isValidUrl(value) {
        try {
            const url = new URL(value);
            return !!(url.protocol && url.pathname);
        } catch (e) {
            return false;
        }
    }
</script>

<Box>
    <form on:submit={(e) => {
            e.preventDefault();
            history.add(newLinkValue);
        }}>
        <div class="field">
            <input bind:value={newLinkValue} id="new-link" required type="url"/>
            <label for="new-link">URL: my-app://path/to/link</label>
        </div>
        <input disabled={!isValidUrl(newLinkValue)} type="submit" value="Add"/>
    </form>
</Box>

<style lang="scss">
  @import "variables";

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 12px;
      border-radius: 3px;
      outline: none;
      font-size: 1.3rem;
    }

    input[type=submit] {
      background-color: $primary;
      color: white;
      border: none;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .field {
      position: relative;
      margin-bottom: 12px;

      input {
        width: 100%;
        border: $border;

        &:focus {
          box-shadow: 0 0 0 2px $primary;

          & + label {
            color: $primary;
          }
        }
      }

      label {
        position: absolute;
        top: -0.5rem;
        left: 12px;
        background-color: white;
        padding: 0 6px;
      }
    }
  }
</style>