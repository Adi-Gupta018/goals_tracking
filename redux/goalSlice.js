import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  goals: [
    {
      id: 1,
      title: "Workout for 20 mins",
      completed: false,
      date: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Read book for 15 mins",
      completed: false,
      date: new Date().toISOString(),
    },
    {
      id: 3,
      title: "30 mins walk",
      completed: false,
      date: new Date().toISOString(),
    },
    {
      id: 4,
      title: "Sleep at 11 sharp",
      completed: false,
      date: new Date().toISOString(),
    },
    {
      id: 5,
      title: "Drink 3L water",
      completed: false,
      date: new Date().toISOString(),
    },
    // ... more goals
  ],
  progress: 0, // Overall progress percentage
  currentPage: "home", // Current page identifier (home, page2, etc.)
  progressData: {
    "2024-05-16T10:22:35.208Z": 80,
    "2024-05-15T15:45:50.321Z": 90,
    "2024-05-14T21:11:07.434Z": 50,
    "2024-05-11T02:33:22.549Z": 70,
  },
};

const goalsSlice = createSlice({
  name: "goals", // Name of the slice
  initialState,
  reducers: {
    toggleGoal: (state, action) => {
      const goalIndex = state.goals.findIndex(
        (goal) => goal.id === action.payload
      );
      state.goals[goalIndex].completed = !state.goals[goalIndex].completed;
      state.progress = calculateProgress(state.goals);
      const updatedProgressData = calculateProgressData(state.goals);
      const mergedProgressData = {
        ...state.progressData,
        ...updatedProgressData
      }
      state.progressData = mergedProgressData;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.page;
    },
    toggleAll: (state, action) => {
      state.goals.map((goal) => (goal.completed = true));
      state.progress = calculateProgress(state.goals);
      const updatedProgressData = calculateProgressData(state.goals);
      const mergedProgressData = {
        ...state.progressData,
        ...updatedProgressData
      }
      state.progressData = mergedProgressData;
    },
  },
});



function calculateProgress(goals) {
  // Implement logic to calculate progress based on completed goals
  const completedCount = goals.filter((goal) => goal.completed).length;
  return (completedCount / goals.length) * 100;
}

function calculateProgressData(goals) {
  const progressdata = {};

  goals.forEach((goal) => {
    const goalDate = goal.date;
    const completed = goal.completed;

    // Check if progress data exists for the goal's date
    if (!progressdata[goalDate]) {
      progressdata[goalDate] = { total: 0, completed: 0 }; // Initialize data for the date
    }

    // Update total and completed goals for the date
    progressdata[goalDate].total++;
    progressdata[goalDate].completed += completed ? 1 : 0;
  });

  // Calculate percentage for each date and update progressData
  Object.entries(progressdata).forEach(([date, data]) => {
    const totalGoals = data.total;
    const completedGoals = data.completed;
    if (totalGoals > 0) {
      // Avoid division by zero
      progressdata[date] = Math.floor((completedGoals / totalGoals) * 100);
    } else {
      progressdata[date] = 0; // No progress for dates with no goals
    }
  });

  return progressdata;
}

export const { toggleGoal, setCurrentPage, toggleAll } = goalsSlice.actions;
export default goalsSlice.reducer;
export const selectGoalsList = (state) => state.goals.goals;
export const selectGoalsProgress = (state) => state.goals.progress;
export const selectProgressData = (state) => state.goals.progressData;