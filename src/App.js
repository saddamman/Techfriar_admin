import React, { useState } from "react";
import Sidebar from "./layout/Sidebar";
import AppRoutes from "./AppRoutes";

const App = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [tasks, setTasks] = useState([]);

  // const fethTask = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:3000/posts");
  //     if (!response.ok) {
  //       throw new Error("Some thing went wrong please try again !!");
  //     }
  //     const data = await response.json();
  //     setTasks(data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setError(err.message || "Something went wrong!");
  //   }
  // };

  // useEffect(() => {
  //   fethTask();
  // }, []);

  // const addTaskHandler = (newTask) => {
  //   // console.log(tasks);
  //   setTasks((prevTask) => [...prevTask, newTask]);
  // };
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const sideOpen = `${isMenuOpen ? "menuOpen" : ""}`;
  return (
    <>
      <div className={`wrapper ${sideOpen}`}>
        <Sidebar onMenuToggle={toggleMenu} />
        <AppRoutes />
      </div>
    </>
  );
};

export default App;
