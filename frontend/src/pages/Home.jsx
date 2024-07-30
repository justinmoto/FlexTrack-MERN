import React, { useState, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForms from "../components/WorkoutForms";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import Pagination from "../components/Pagination"; 

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedWorkouts = workouts ? workouts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  ) : [];

  return (
    <div className="bg-[#000000] h-[86.5vh] sm:h-[120vh] md:h-[120vh]">
      <div className="mx-10 text-xl font-bold">
        <WorkoutForms />
      </div>
      <div className="mt-5 mx-10 text-xl font-bold">
        {paginatedWorkouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil((workouts?.length || 0) / pageSize)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
