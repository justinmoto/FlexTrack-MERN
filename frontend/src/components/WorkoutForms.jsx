import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaCirclePlus } from "react-icons/fa6";
import ModalForms from './ModalForms'; // Import the ModalForms component

const WorkoutForms = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }
    const workout = { title, load, reps };

    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("New Workout Added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleClick} className="flex items-center text-black bg-[#00DF9A] p-2 text-[15px] gap-2 rounded-[10px]">
          ADD WORKOUT <FaCirclePlus className="text-black"/>
        </button>
      </div>

      <ModalForms isOpen={isOpen} onClose={handleClick}>
        <form onSubmit={handleSubmit}>
          <div className="bg-[#000000] p-10 rounded-[20px]">
            <h3 className="text-center mb-7 text-[30px] text-[#00DF9A]">ADD YOUR WORKOUT</h3>

            <label className="block text-white">Title</label>
            <input
              className="block p-[10px] mb-[20px] w-full text-black rounded"
              type="text"
              placeholder="Enter workout title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <label className="block text-white">Loads (in kg)</label>
            <input
              className="block p-[10px] mb-[20px] w-full text-black rounded"
              type="text"
              placeholder="Input load (kg)"
              onChange={(e) => setLoad(e.target.value)}
              value={load}
            />

            <label className="block text-white">Reps</label>
            <input
              className="block p-[10px] mb-[20px] w-full text-black rounded"
              type="text"
              placeholder="Number of reps"
              onChange={(e) => setReps(e.target.value)}
              value={reps}
            />

            <div className="flex items-center justify-center">
              <button type="submit" className="p-2 bg-[#00DF9A] text-black px-[20%] rounded-[10px]">Submit</button>
            </div>

            {error && <div className="text-red-500">{error}</div>}
          </div>
        </form>
      </ModalForms>
    </div>
  );
};

export default WorkoutForms;