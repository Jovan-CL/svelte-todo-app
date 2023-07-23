<script>
    export let type = 'primary';


</script>
<button class={type}  on:click on:click>
    <slot></slot>
</button>

<style>
    button {
        /* width: 100%; */
        padding: .5em;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 500;
        border: none;
    }

    /* Primary Button styles */
    .primary {
        border: 2px solid rgb(33, 196, 141);
        background-color: white;
        color: rgb(33, 196, 141);
    }
    .primary:active {
        background-color: rgb(33, 196, 141);
        color: rgb(255, 255, 255);
    }

    /* Secondary Button styles */
    .secondary {
        border: 2px solid rgb(158, 6, 64);
        background-color: white;
        color: rgb(158, 6, 64);
    }
    .secondary:active {
        background-color: rgb(158, 6, 64);
        color: rgb(255, 255, 255);
    }
    
    /* Neutral Button styles */
    .neutral {
        border: 2px solid rgb(3, 149, 175);
        background-color: white;
        color: rgb(3, 149, 175);
    }
    .neutral:active {
        background-color: rgb(3, 149, 175);
        color: rgb(255, 255, 255);
    }
</style>