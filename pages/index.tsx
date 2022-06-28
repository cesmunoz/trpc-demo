import { useState } from "react";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { TrashIcon } from "@heroicons/react/solid";

const Home: NextPage = () => {
  const [todoText, setTodoText] = useState("");
  const utils = trpc.useContext();
  const response = trpc.useQuery(["todosList"]);

  const onSuccess = async () => {
    await utils.invalidateQueries(["todosList"]);
  };
  const addTodo = trpc.useMutation("todosCreate", { onSuccess });
  const removeTodo = trpc.useMutation("todosRemove", { onSuccess });

  const handleOnChange = (e: any) => setTodoText(e.target.value);

  const handleAddTodo = async () => {
    const input = {
      title: todoText,
      description: "",
      dueDate: new Date().toISOString(),
      completed: false,
    };
    await addTodo.mutateAsync(input);
    setTodoText("")
  };

  const handleRemove = async (id: string) => {
    const input = { id };
    await removeTodo.mutateAsync(input);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col w-full">
      <div className="w-3/4">
        <div className="flex m-4">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-2"
            id="todoTxt"
            name="todoTxt"
            value={todoText}
            placeholder="Insert a task"
            onChange={handleOnChange}
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold px-4 rounded"
            id="addTodo"
            onClick={handleAddTodo}>
            Add
          </button>
        </div>
        <div className="flex flex-col mx-6">
          {!response.data ? (
            <div className="font-bold">Loading...</div>
          ) : (
            <>
              {response.data.map((todo) => (
                <div
                  key={todo.id}
                  className="flex p-2 mt-2 w-full bg-indigo-500 rounded text-white">
                  <p className="grow">{todo.title}</p>
                  <TrashIcon
                    className="w-6 cursor-pointer"
                    onClick={() => handleRemove(todo.id)}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
