import FormDate from "./FormDate";
import FormInput from "./FormInput";

const TaskDialog = ({ item, onSubmit, onChange, onDueDateChange, onClose }: any) => (
  <div className="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60">
    <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded-md px-8 py-6 space-y-5 drop-shadow-lg">
      <h1>Edit Task</h1>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col">
          <FormInput
            id="title"
            text="Title"
            placeholder="Title"
            type="text"
            value={item.title}
            onChange={onChange}
          />
          <FormInput
            id="description"
            text="Description"
            placeholder="Description"
            type="textarea"
            value={item.title}
            onChange={onChange}
          />
          <FormDate
            id="dueDate"
            text="Due Date"
            value={item.dueDate}
            onChange={onDueDateChange}
          />
          <FormInput
            id="completed"
            text="Completed"
            type="checkbox"
            value={item.completed}
            onChange={onChange}
          />
        </div>
        <div className="flex justify-end my-2">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 py-1 rounded my-2 mx-2"
            id="closeDialog"
            onClick={onClose}>
            Close
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold px-4 rounded my-2"
            id="saveItem"
            type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default TaskDialog;
