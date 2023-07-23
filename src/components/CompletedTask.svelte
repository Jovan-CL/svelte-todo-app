<script>
    import { scale, fade } from "svelte/transition";
    import Button from "./sharedComponents/Button.svelte";
    import { Todo_List_CustomStore } from "./Stores/store";
    
    // let newListOngoing = []
    
    // TodoListStore.subscribe(todo => {
    //    return newListOngoing = todo.filter(item => item.status === 'ongoing')
    // })
    
    </script>
    
    
    
    <section class="container">
        {#each $Todo_List_CustomStore.filter(todo => todo.status === 'completed') as todo (todo.id)}
        <div class="todo-item"  in:scale out:fade={{delay: 250, duration: 300}}>
            <div class="todo-text">
                <p>{todo.todo}</p>
            </div>
            <div class="btns">
                <!-- <label class:complete={todo.complete} for="completed">Done</label> -->
            <!-- <input type="checkbox" bind:checked={todo.complete} name="completed" id="completed"> -->
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
            grid-template-columns: 1fr 1fr;
            margin-left: auto;
        }  
    </style>