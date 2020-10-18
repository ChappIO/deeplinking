<script>
    import History from "./History.svelte";
    import InputForm from "./InputForm.svelte";
</script>

<div class="app">
    <h1>Deep linking tester</h1>
    <History/>
    <InputForm/>
</div>

<style>
    :global(html, body, #root) {
        width: 100vw;
        height: 100vh;
        background-color: whitesmoke;
        padding: 0;
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    :global(*) {
        box-sizing: border-box;
        font-family: sans-serif;
    }

    h2 {
        line-height: 1;
        margin: 0 0 12px;
    }
</style>