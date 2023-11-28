import { ErrorMessage, Field, Form, Formik } from "formik";

import 'react-toastify/dist/ReactToastify.css';

import * as Yup from "yup"

const contactValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("email is required")
});
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
const Add = ({ isUpdate, task, onClose, setTask }) => {


  const addContact = async (contact) => {
    console.log("trying adding")

    contact.id = uuidv4();
    contact.status = "pending"
    let taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
    taskList.push(contact);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setTask(taskList);
    onClose()
  }
  const updateContact = async (contact, id) => {
    let taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
    taskList = taskList.map(c => c.id == id ? {
      ...contact, id:id, status:c.status
    } : c);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setTask(taskList);
    onClose()
  }
  return (
    <div>
      <Formik
        // validationSchema={contactValidation}
        initialValues={isUpdate ? {
          title: task.title,
          description: task.description,
          duedate: task.duedate,
          prioritylevel: task.prioritylevel
        } : {
          title: "",
          description: "",
          duedate: new Date(),
          prioritylevel: "0"


        }}
        onSubmit={(values) => {
          isUpdate ?
            updateContact(values, task.id) :
            addContact(values)
        }}
      >
        <Form className="gap-2 flex flex-col ">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <Field name="title" className="h-10 border" />
            <div className="text-xs text-red-500">
              <ErrorMessage name='title' />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="description"> Description</label>
            <Field name="description" as="textarea" style={{ resize: "none", height: "150px" }} className="h-10 border" />
            <div className="text-xs text-red-500">
              <ErrorMessage name='description' />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="duedate"> Due Date</label>
            <Field name="duedate" type="date" className="h-10 border" />
            <div className="text-xs text-red-500">
              <ErrorMessage name='duedate' />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="prioritylevel"> Priority Level</label>
            <Field name="prioritylevel" as="select" className="h-10 border">
              <option value="0">Low</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
            </Field>
            <div className="text-xs text-red-500">
              <ErrorMessage name='prioritylevel' />
            </div>
          </div>

          <button type="submit" className="self-end border bg-orange rounded px-3 py-1.5" >
            {isUpdate ? "Update Contact" : "Add Contact"}

          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Add;
