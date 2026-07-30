import React, { useState, useEffect } from "react";


function StudentForm({ 
  onAdd,
  onUpdate,
  studentData
}) {


const emptyStudent = {
name:"",
email:"",
course:"",
age:"",
phone:""
};


const [student,setStudent] = useState(emptyStudent);



useEffect(()=>{

if(studentData){

setStudent(studentData);

}
else{

setStudent(emptyStudent);

}

},[studentData]);





const styles = {


form:{
  display:"grid",
  gap:"15px",
  marginTop:"20px",
  justifyContent:"center",
  alignItems:"center",
  justifyItems:"center"
},



title:{
fontSize:"22px",
fontWeight:"700",
color:"#222",
marginBottom:"10px",
},



input:{
width:"350px",
padding:"13px",
border:"1px solid #ddd",
borderRadius:"10px",
fontSize:"15px",
outline:"none"
},



button:{
width:"350px",
background:"#4f46e5",
color:"#fff",
border:"none",
padding:"14px",
borderRadius:"10px",
cursor:"pointer",
fontWeight:"600",
fontSize:"15px"
}


};






const submit=(e)=>{

e.preventDefault();



if(studentData){

// update existing student

onUpdate(student);


}

else{

// add new student

onAdd(student);


}




setStudent(emptyStudent);



};





return (


<form 
style={styles.form}
onSubmit={submit}
>


<h2 style={styles.title}>

{studentData ? "Edit Student" : "Add New Student"}

</h2>





<input

style={styles.input}

placeholder="Student Name"

value={student.name}

onChange={(e)=>

setStudent({
...student,
name:e.target.value
})

}

/>





<input

style={styles.input}

placeholder="Email Address"

value={student.email}

onChange={(e)=>

setStudent({
...student,
email:e.target.value
})

}

/>






<input

style={styles.input}

placeholder="Course"

value={student.course}

onChange={(e)=>

setStudent({
...student,
course:e.target.value
})

}

/>






<input

style={styles.input}

placeholder="Age"

value={student.age}

onChange={(e)=>

setStudent({
...student,
age:e.target.value
})

}

/>






<input

style={styles.input}

placeholder="Phone Number"

value={student.phone}

onChange={(e)=>

setStudent({
...student,
phone:e.target.value
})

}

/>






<button style={styles.button}>

{studentData ? "Update Student" : "Save Student"}

</button>





</form>


);


}


export default StudentForm;