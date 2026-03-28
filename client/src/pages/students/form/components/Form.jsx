import React, {useState} from 'react'
import { addStudent } from "../../../../services/studentService";

const Form = ({ refresh, close }) => {
    // form state to store input values
  const [form, setForm] = useState({
    name: "",
    rollNo: ""
  });

  // validation errors
  const [errors, setErrors] = useState({});

  // manage backend error 
  const [apiError, setApiError] = useState("");

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // clear errors while typing
    setErrors({});
    setApiError("");
  };

  // basic validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.rollNo.trim()) {
      newErrors.rollNo = "Roll No is required";
    }

    setErrors(newErrors);

    // return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // stop if validation fails
    if (!validate()) return;

    try {
      // call API to add student
      await addStudent(form);

      // refresh list after adding
      refresh();

      // close modal
      close();

    } catch (err) {
      // show backend error (duplicate, etc.)
      setApiError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">

      <div className="row">

        {/* Name input */}
        <div className="field">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? "input error-input" : "input"}
          />
          {/* validation message for name input */}
          <p className="error">{errors.name || ""}</p>
        </div>

        {/* Roll No input */}
        <div className="field">
          <input
            name="rollNo"
            placeholder="Roll No"
            value={form.rollNo}
            onChange={handleChange}
            className={errors.rollNo ? "input error-input" : "input"}
          />
          {/* validation message for roll no */}
          <p className="error">{apiError || errors.rollNo || ""}</p>
        </div>

        {/* Action buttons */}
        <div className="btn-group">
          <button className="btn btn-primary">Save</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={close}
          >
            Cancel
          </button>
        </div>

      </div>
    </form>
  )
}

export default Form