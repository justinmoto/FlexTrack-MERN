import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from "../hooks/useAuthContext";
import { MdDeleteForever, MdOutlineSystemUpdateAlt } from "react-icons/md";
import Modal from './Modal'; // Import the Modal component

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedWorkout, setUpdatedWorkout] = useState({
    title: workout.title,
    load: workout.load,
    reps: workout.reps
  });



  const handleUpdateButton = () => {
    setIsUpdating(!isUpdating);
  };

  const handleDelete = async () => {
    if (!user) {
      return;
    }
    const response = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/api/workouts/${workout._id}`,
        {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(updatedWorkout)
        }
      );

      if (!response.ok) {
        throw Error('Failed to update the workout');
      }

      const json = await response.json();
      dispatch({ type: 'UPDATE_WORKOUT', payload: json });
      setIsUpdating(false);
    } catch (error) {
      console.error('Error updating workout:', error);
    }
  };

  return (
    <div className="workout-details-container">
    <div className="bg-[#00DF9A] mt-10 p-5 relative font-poppins rounded-[20px] w-[90%] sm:ml-5 sm:mt-5 md:ml-5 md:mt-5">
      <div className="">
        <h4 className="text-[30px] mb-3">{workout.title}</h4>
        <p className="text-[20px]">Loads (kg): {workout.load}</p>
        <p className="text-[20px]">Reps: {workout.reps}</p>
        <p className="text-[15px]">
          {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
        </p>
      </div>

      <div className="flex mt-5 gap-5 absolute top-0 right-[5%] sm:flex-col md:flex-col">
        <MdDeleteForever className="cursor-pointer text-[35px] " onClick={handleDelete} />
        <MdOutlineSystemUpdateAlt onClick={handleUpdateButton} className=" cursor-pointer text-black text-[35px] "/>
      </div>

      <Modal isOpen={isUpdating} onClose={handleUpdateButton}>
        <form onSubmit={handleUpdate}>
          <h3 className="text-center mb-7 text-[30px] text-[#00DF9A]">UPDATE YOUR WORKOUT</h3>

          <label className="block text-white">Title</label>
          <input
            type="text"
            value={updatedWorkout.title}
            onChange={(e) => setUpdatedWorkout({ ...updatedWorkout, title: e.target.value })}
            className="block p-[10px] mb-[20px] w-full text-black rounded"
          />

          <label className="block text-white">Loads (in kg)</label>
          <input
            type="number"
            value={updatedWorkout.load}
            onChange={(e) => setUpdatedWorkout({ ...updatedWorkout, load: e.target.value })}
            className="block p-[10px] mb-[20px] w-full text-black rounded"
          />

          <label className="block text-white">Reps</label>
          <input
            type="number"
            value={updatedWorkout.reps}
            onChange={(e) => setUpdatedWorkout({ ...updatedWorkout, reps: e.target.value })}
            className="block p-[10px] mb-[20px] w-full text-black rounded"
          />

          <div className="flex justify-center">
            <button type="submit" className="p-2 bg-[#00DF9A] text-black px-10 rounded-[10px]">
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
    </div>

  );
};

export default WorkoutDetails;
