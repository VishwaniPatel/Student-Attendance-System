import { useEffect, useState } from 'react'
import { getStudents } from '../../services/studentService'
import AttendanceSummary from './details/AttendanceSummary'
import AddStudentForm from './form/AddStudentForm'
import StudentList from './list/StudentList'

const Students = () => {
     const [students, setStudents] = useState([]);
    const [showForm, setShowForm] = useState(false);
    // Function to fetch students
    const fetchStudents = async () => {
        const res = await getStudents();
        setStudents(res.data);
    };

    // Used here to load students initially
    useEffect(() => {
        fetchStudents();
    }, []);
  return (
   <>
            <AddStudentForm showForm={showForm} setShowForm={setShowForm}  refresh={fetchStudents}
                close={() => setShowForm(false)}/>
            <StudentList students={students} refresh={fetchStudents}/>
            <AttendanceSummary students={students}/>
        </>
  )
}

export default Students