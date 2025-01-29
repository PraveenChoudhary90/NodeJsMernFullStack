import { Link, Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      <h1>This is About page</h1>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ut
      nihil? Asperiores omnis quia fugit perferendis tempora fugiat,
      perspiciatis, unde quam placeat praesentium cum maxime. Tempore sunt
      adipisci voluptatem nesciunt!
      <hr size="4" color="blue" />

      <Link to="aboutc" >AboutCompany</Link><br/>
      <Link to="aboutp" >AboutProduct</Link><br/>
      <Link to="abouts" >AboutServices</Link><br/>
      <main><Outlet/></main>


      <hr size="4" color="blue" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ut
      nihil? Asperiores omnis quia fugit perferendis tempora fugiat,
      perspiciatis, unde quam placeat praesentium cum maxime. Tempore sunt
      adipisci voluptatem nesciunt!
    </>
  );
};
export default About;
