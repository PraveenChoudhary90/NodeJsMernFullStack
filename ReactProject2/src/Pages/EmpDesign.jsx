const EmpDesign = (props)=>{
    return(
        <>
        <tr>
            <td>{props.Empno}</td>
            <td>{props.Empnm}</td>
            <td>{props.Empdesig}</td>
            <td>{props.Empsal}</td>
        </tr>
        
        </>
    )
}
export default EmpDesign;