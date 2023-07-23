<script>
    import Button from "./sharedComponents/Button.svelte";
    import {Todo_List_CustomStore} from "./Stores/store";
    

    let item = ''

    function reset() {
        item = ''
    }

</script>
<section class="container">
    <form on:submit|preventDefault ={()=>Todo_List_CustomStore.addTodoItem(item)} on:submit={()=> reset()}>
        <label for="todo">Add Tasks to do:</label>
        <input type="text" name="todo" bind:value={item}>
        <Button  type='primary'>Add Task</Button>
    </form>
</section>


<style>
   form {
    display: grid;
    gap: 10px;
    margin-bottom: 20px;
   }
   label {
    text-align: center;
   }
   input {
    font-size: 1rem;
    padding: 10px;
    border: none;
    outline: 1px solid rgb(184, 184, 184);
    border-radius: 5px;
    width: 100%;
   }
   input:focus {
    outline: 2px solid rgb(95, 243, 194);
    }
</style>