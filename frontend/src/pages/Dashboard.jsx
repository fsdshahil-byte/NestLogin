import { useEffect, useMemo, useState } from "react";
import api from "../services/api";

import Sidebar from "../components/Sidebar";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";


function Dashboard() {


const [students,setStudents] = useState([]);
const [search,setSearch] = useState("");
const [showForm,setShowForm] = useState(false);
const [editStudent,setEditStudent] = useState(null);


const fetchStudents = async()=>{

try{

const res = await api.get("/students");
setStudents(res.data);

}
catch(err){

console.log(err);

}

};



useEffect(()=>{

fetchStudents();

},[]);





const filteredStudents = useMemo(()=>{

return students.filter(student=>

student.name
.toLowerCase()
.includes(search.toLowerCase())

);

},[students,search]);





const totalCourses = [

...new Set(students.map(s=>s.course))

].length;





const addStudent = (student)=>{

setStudents([
 ...students,
 {
  ...student,
  id: students.length + 1
 }
]);

};




const deleteStudent=(id)=>{


setStudents(

students.filter(

student=>student.id!==id

)

);


};






const styles={


main:{
  marginLeft:"260px",
  padding:"35px",
  minHeight:"100vh",
  background:"#f5f7fb"
},


top:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  marginBottom:"30px",
  flexDirection:"column"
},



title:{
  margin:0,
  fontSize:"34px",
  color:"#222",
  textAlign:"center"
},


subtitle:{
  marginTop:"5px",
  color:"#777",
  textAlign:"center"
},


addButton:{

background:"#4f46e5",

color:"#fff",

border:"none",

padding:"13px 24px",

borderRadius:"10px",

cursor:"pointer",

fontWeight:"600",

fontSize:"15px",



marginLeft:"50px"


},





cards:{

display:"flex",

gap:"25px",

marginBottom:"30px",

alignItems:"center",
justifyContent:"center",
marginLeft:"30px"

},




card:{

flex:1,

background:"#fff",

padding:"30px",

borderRadius:"15px",

textAlign:"center",

boxShadow:"0 8px 20px rgba(0,0,0,0.08)"

},




number:{

margin:0,

fontSize:"38px",

color:"#4f46e5"

},





searchBox:{

marginBottom:"25px",
marginLeft:"140px"

},




search:{

width:"60%",

padding:"15px 18px",

border:"1px solid #394099",

borderRadius:"10px",

fontSize:"15px",

outline:"none",

marginLeft:"20px"

},





overlay:{

position:"fixed",

top:0,

left:0,

width:"100%",

height:"100%",

background:"rgba(0,0,0,0.45)",

display:"flex",

justifyContent:"center",

alignItems:"center",

zIndex:2000

},




formCard:{

width:"450px",

background:"#fff",

padding:"30px",

borderRadius:"15px",

boxShadow:"0 15px 40px rgba(0,0,0,0.25)",

position:"relative"

},




closeButton:{

position:"absolute",

right:"15px",

top:"15px",

width:"32px",

height:"32px",

borderRadius:"50%",

border:"none",

background:"#ef4444",

color:"#fff",

cursor:"pointer",

fontSize:"16px"

}



};






return (

<>


<Sidebar/>





<div style={styles.main}>


<div style={styles.top}>


<div>


<h1 style={styles.title}>
Students
</h1>


<p style={styles.subtitle}>
Manage all students in one place
</p>


</div>








</div>






<div style={styles.cards}>


<div style={styles.card}>

<h2 style={styles.number}>
{students.length}
</h2>

<p>
Total Students
</p>


</div>





<div style={styles.card}>

<h2 style={styles.number}>
{totalCourses}
</h2>

<p>
Courses
</p>


</div>





<div style={styles.card}>

<h2 style={styles.number}>
100%
</h2>

<p>
Database Connected
</p>


</div>



</div>







{
showForm && (

<div style={styles.overlay}>


<div style={styles.formCard}>


<button

style={styles.closeButton}

onClick={()=>setShowForm(false)}

>

✕

</button>




<StudentForm

studentData={editStudent}

onAdd={addStudent}

onUpdate={(student)=>{

setStudents(
students.map((item)=>
item.id === student.id
? student
: item
)
);

setEditStudent(null);
setShowForm(false);

}}

/>




</div>


</div>

)

}







<div style={styles.searchBox}>


<input


style={styles.search}


placeholder="🔍 Search students..."


value={search}


onChange={(e)=>setSearch(e.target.value)}


/>


<button

style={styles.addButton}

onClick={()=>setShowForm(true)}

>

+ Add Student

</button>

</div>








<StudentTable

students={filteredStudents}

onDelete={deleteStudent}

onEdit={(student)=>{
  setEditStudent(student);
  setShowForm(true);
}}

/>







</div>



</>

);

}



export default Dashboard;