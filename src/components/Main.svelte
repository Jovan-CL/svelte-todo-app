<script>
  import FormAddTodo from "./FormAddTodo.svelte";
  import {Todo_List_CustomStore} from "./Stores/store";
  import Tabs from "./Tabs.svelte";
  import TodoList from "./TodoList.svelte";
  import OngoingTask from "./OngoingTask.svelte";
  import CompletedTask from "./CompletedTask.svelte";

  const tabSelection = ["New Tasks", "Ongoing Tasks", "Completed Tasks"];
    let activeTab = 'New Tasks';

function tabChange(e) {
    activeTab = e.detail
}

</script>
<main class="todo-list-section container">
    <FormAddTodo on:addTodoItem/>
    <Tabs {tabSelection} {activeTab} on:tabChange={tabChange}/>
    {#if $Todo_List_CustomStore.length === 0}
        <p>There are no things to do</p>
        {:else}
        {#if activeTab === 'New Tasks'}
        <TodoList on:deleteTask />
        {:else if activeTab === 'Ongoing Tasks'}
        <OngoingTask />
        {:else if activeTab === 'Completed Tasks'}
        <CompletedTask />
        {/if}
    {/if}
</main>


<style>
    main {
        margin-block: 30px;
    }
    p {
        text-align: center;
    }
</style>