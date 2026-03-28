import React from 'react'
import Form from './components/Form'

const AddStudentForm = ({ showForm, setShowForm, refresh, close }) => {
  return (
     <>
            {/* Modal Form for Adding Student */}
            {showForm ? (
                <div className="modal-overlay">
                    <div className="modal">
                        <Form
                            refresh={refresh}
                            close={close}
                        />
                    </div>
                </div>
            )
        :
        // butto to add student
          <button
                    className="btn btn-primary"
                    onClick={() => setShowForm(true)}
                >
                    + Add Student
                </button>
        }
        </>
  )
}

export default AddStudentForm