const FormInput = ({ id, type, placeholder, value, onChange, text }: any) => (
  <div className="form-control mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
      {text}
    </label>

    {type === "textarea" && (
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
        id="description"
        placeholder="Description"
        onChange={onChange}
        value={value}></textarea>
    )}

    {type === "checkbox" && (
      <input
        className="shadow border rounded py-2 px-2 text-gray leading-tight focus:outline-none focus:shadow-outline"
        id="completed"
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    )}

    {type === "text" && (
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

export default FormInput;
