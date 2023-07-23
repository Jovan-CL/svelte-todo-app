<script>
    import { fade, scale } from "svelte/transition";
    import Button from "./sharedComponents/Button.svelte";
    // import TodoListStore from "./Stores/store";
    // import { handleClick, toggleCompleted } from "./Stores/store";
    import {Todo_List_CustomStore} from "./Stores/store";

    // // console.log('Hello')
    // let newTaskList = []

    // let ongoingStatus = 'ongoing'
//    TodoListStore.subscribe(todo => {
//         return newTaskList = todo.filter(prop => prop.status === 'pending')
//     })

  let date = new Date()
    
    // let condition =  ongoingStatus === 'ongoing' ? true : false;
    
//  function toggleCompleted(status, id) {
//   TodoListStore.update((currTodos) => {
//     return currTodos.map((prop) => {
//       if (id === prop.id) {
//         return (prop.status = status);
//       }
//     });
//   });
// }
// on:click={()=> toggleCompleted(todo.status, todo.id)}
// ()=> handleClick(todo.id)

</script>
<section class="container">
    {#each $Todo_List_CustomStore.filter(todo => todo.status === 'pending') as todo (todo.id)}
    <div class="todo-item"   in:scale out:fade={{delay: 250, duration: 300}}>
        <div class="todo-text">
            <p>{todo.todo}</p>
        </div>
        <div class="date">
            {new Intl.DateTimeFormat('en-US').format(date)}
        </div>
        <div class="btns">
            <!-- <label  for="ongoings">Done</label>
            <input type="checkbox" bind:checked={condition} bind:value={ongoingStatus} name="ongoing"> -->
            <Button on:click={()=> Todo_List_CustomStore.ongoingTask(todo.id)}  type='neutral'>Ongoing</Button>
            <Button type='secondary' on:click={()=> Todo_List_CustomStore.deleteTodos(todo.id)}>Delete</Button>
        </div>
    </div>
    {/each}
</section>

<style>
    section {
        margin: 0 auto;
    }
    .todo-item {
        display: flex;
        align-items: center;
        gap: 20px;
        justify-content: space-between;
        padding: 20px; 
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 10px;
        width: 100%;
    }
    /* label {
        position: absolute;
        inset: 0;
        padding: .5em;
        width: 50%;
         background-color: aqua; 
        text-align: center;
        transform: translateX(-.5em);
        border: 2px solid rgb(61, 27, 124);
        border-radius: 5px;
        color: rgb(61, 27, 124);
        font-weight: 500;
    } */
    
    p {
        padding-block: 5px;
    }
    /* input[type = "checkbox"] {
        opacity: 0;
        width: 3.5em;
        height: 1.5em; 
        cursor: pointer;
        transform: translateX(-.5em);
    } */
    .todo-text {
        grid-template-columns: 1em auto;
        overflow-x: auto;
        padding-block: 10px;
    }
    .btns {
         position: relative;
        /* width: min(50vw, 20em); */
        display: grid;
        gap: 5px;
        grid-template-columns: 1fr 1fr;
        margin-left: auto;
    }  
</style>