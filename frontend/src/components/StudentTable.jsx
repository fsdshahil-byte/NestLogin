import React from "react";

function StudentTable({ students, onDelete, onEdit }) {

  const styles = {
    container:{
      background:"#fff",
      borderRadius:"15px",
      overflowX:"auto",
      width:"80%",
    justifySelf:"center",
      boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
    },

    table:{
      width:"100%",
      
      borderCollapse:"collapse"
    },

    th:{
      background:"#4f46e5",
      color:"#fff",
      padding:"16px",
      textAlign:"left"
    },

    td:{
      padding:"16px",
      borderBottom:"1px solid #eee"
    },

    student:{
      display:"flex",
      alignItems:"center",
      gap:"12px"
    },

    avatar:{
      width:"42px",
      height:"42px",
      borderRadius:"50%",
      background:"#4f46e5",
      color:"#fff",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontWeight:"bold"
    },

    edit:{
      background:"#f59e0b",
      color:"#fff",
      border:"none",
      padding:"8px 14px",
      borderRadius:"8px",
      cursor:"pointer",
      marginRight:"8px"
    },

    delete:{
      background:"#ef4444",
      color:"#fff",
      border:"none",
      padding:"8px 14px",
      borderRadius:"8px",
      cursor:"pointer"
    }

  };


return (

<div style={styles.container}>

<table style={styles.table}>

<thead>

<tr>
<th style={styles.th}>ID</th>
<th style={styles.th}>Student</th>
<th style={styles.th}>Email</th>
<th style={styles.th}>Course</th>
<th style={styles.th}>Age</th>
<th style={styles.th}>Phone</th>
<th style={styles.th}>Actions</th>
</tr>

</thead>


<tbody>

{
students.length ? (

students.map(student=>(

<tr key={student.id}>

<td style={styles.td}>
{student.id}
</td>


<td style={styles.td}>

<div style={styles.student}>

<div style={styles.avatar}>
{student.name.charAt(0).toUpperCase()}
</div>

<span>
{student.name}
</span>

</div>

</td>


<td style={styles.td}>{student.email}</td>

<td style={styles.td}>{student.course}</td>

<td style={styles.td}>{student.age}</td>

<td style={styles.td}>{student.phone}</td>


<td style={styles.td}>


<button

style={styles.edit}

onClick={()=>onEdit(student)}

>
Edit
</button>


<button 
style={styles.delete}
onClick={()=>onDelete(student.id)}
>
Delete
</button>


</td>


</tr>


))

):

<tr>
<td colSpan="7" style={{textAlign:"center",padding:"20px"}}>
No students found
</td>
</tr>

}


</tbody>

</table>

</div>

)

}


export default StudentTable;