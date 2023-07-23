import { writable } from "svelte/store";

// const TodoListStore = writable([
//   { id: 1, todo: "Eat Breakfast", status: "pending" },
//   { id: 2, todo: "Eat Breakfast", status: "pending" },
// ]);

// export default TodoListStore;
let initialValue = [];
function setTodoList(initialValue) {
  const { subscribe, update } = writable(initialValue);

  function addTodoItem(item) {
    if (item === "") return;
    let task = {
      id: Math.random(),
      todo: item,
      status: "pending",
    };
    update((currTodos) => {
      return [...currTodos, task];
    });
  }

  function ongoingTask(id) {
    let status = "ongoing";
    update((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: status };
        }
        return todo;
      });
    });
  }

  function completedTask(id) {
    let status = "completed";
    update((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: status };
        }
        return todo;
      });
    });
  }

  function deleteTodos(id) {
    update((currTodos) => {
      return currTodos.filter((todo) => todo.id !== id);
    });
  }

  return {
    subscribe,
    deleteTodos,
    addTodoItem,
    ongoingTask,
    completedTask,
  };
}

export const Todo_List_CustomStore = setTodoList(initialValue);

// let NewList = [];

// export const OngoingTask = writable([NewList]);

// function filterList(array) {
//   TodoListStore.update((currTodos) => {
//     return currTodos.filter((todo) => {
//       if (todo.complete) {
//         return array;
//       }
//     });
//   });
// }

// filterList(NewList);

// export function toggleCompleted(status, id) {
//   TodoListStore.update((currTodos) => {
//     return currTodos.map((prop) => {
//       if (id === prop.status) {
//         return { ...prop, status: status };
//       }
//     });
//   });
// }

// export function handleClick(id) {
//   TodoListStore.update((currTodos) => {
//     return currTodos.filter((todo) => todo.id !== id);
//   });
// }
