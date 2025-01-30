import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>this is Contact page</h1>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui mollitia
      ipsum dolores eum, sapiente natus corporis blanditiis optio, magnam
      ratione consectetur. Fuga ea aliquid doloremque molestiae dolorem minima,
      consequatur itaque!
      <hr size="4" color="red" />
      <Link to="contactteam" >ContactTeam</Link><br></br>
      <Link to="contactmanager" >ContactManager</Link>
      <main>
        <Outlet />
      </main>
      <hr  size="4" color="red" />
      <h1>footer</h1>
    </>
  );
};
export default Contact;
