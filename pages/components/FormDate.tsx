import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormDate = ({ value, text, id, onChange }: any) => (
  <div className="form-control mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
      {text}
    </label>
    <DatePicker
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      selected={new Date(value)}
      onChange={onChange}
      dateFormat="yyyy-MM-dd"
    />
  </div>
);

export default FormDate;
