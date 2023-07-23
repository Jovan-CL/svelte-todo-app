<script>
    import { createEventDispatcher } from "svelte";
    export let tabSelection;
    export let activeTab;
    const dispatch = createEventDispatcher();

</script>
<div class="tabs">
    {#each tabSelection as tab}
    <button class="tab" class:active={tab === activeTab}  on:click={() => {dispatch('tabChange', tab)}}>{tab}</button>
    {/each}
</div>


<style>
    .tabs {
        display: flex;
        list-style: none;
        justify-content: space-around;
        margin-bottom: 20px;
    }
    
    .tab {
        font-weight: 500;
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding-bottom: 8px;
        border-bottom: 2px solid transparent;
    }
    
    .active {
        border-bottom: 2px solid rgb(171, 79, 247);
        color: rgb(171, 79, 247);
        padding-bottom: 8px;
    }

</style>