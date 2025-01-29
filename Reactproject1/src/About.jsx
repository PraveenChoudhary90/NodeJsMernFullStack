import {Link, Outlet } from "react-router-dom";

const About = ()=>{
    return(
        <>
        <h1>Welcome to About page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br></br> Ipsam explicabo saepe exercitationem ut, quod, perferendis officia nostrum recusandae corrupti,
             obcaecati adipisci sint.<br></br>
         Ipsam ad doloremque maiores perspiciatis quasi amet sed.
        Beatae quae quod, distinctio sit numquam praesentium ipsam 

        <table width="100%">
            <tr>
                <th>
                    <Link to="aboutc">AboutCompany</Link><br></br>
                    <Link to="aboutp">AboutProduct</Link><br></br>
                    <Link to="abouts">AboutService</Link><br></br>
                </th>
                <td>

                   <Outlet/> 
                </td>
            </tr>
        </table>






        <br></br>officiis odio ab sint eum tempora magnam, velit impedit excepturi veniam.
         Aspernatur nesciunt,<br></br> minima inventore repellendus magnam blanditiis iure suscipit dolor odio.
        Facere optio reprehenderit doloremque sed incidunt, ratione, maiores tenetur dolorum,
         modi necessitatibus adipisci aliquam quidem explicabo nam? Accusamus iure, vitae voluptate,
          <br></br>aperiam non provident repellat libero, perferendis asperiores a nisi.</p>
        
        </>
    )
}
export default About;