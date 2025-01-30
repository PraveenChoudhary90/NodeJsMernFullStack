const StudentStyle = (props)=>{
    return(
        <>
        <tr>
            <td>{props.rollno}</td>
            <td>{props.name}</td>
            <td>{props.sub}</td>
            <td>{props.fs}</td>
        </tr>
        </>
    )
}
export default StudentStyle;