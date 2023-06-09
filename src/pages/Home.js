import { useEffect } from "react";

const Home = ({ toggle, toggled }) => {
  // console.log("toggled -> ", toggled);

  // useEffect(() => {
  //   console.log("toggled -> ", toggled);
  // }, [toggled]);

  return (
    <>
      <main>
        <h1
          onClick={() => {
            // toggle();
          }}
          style={{ color: "white", marginLeft: "5rem" }}
        >
          Home
        </h1>

        {/* {toggled ? (
          <h1 style={{ color: "white", marginLeft: "5rem" }}>Toggled</h1>
        ) : (
          <h1 style={{ color: "white", marginLeft: "5rem" }}>Not Toggled</h1>
        )} */}
      </main>
    </>
  );
};

export default Home;
