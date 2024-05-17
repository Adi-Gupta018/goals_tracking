import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGoal } from "@/redux/goalSlice";
import { selectGoalsList } from "@/redux/goalSlice";
import { Checkbox } from "@mui/material";
import {
  Droplet,
  Dumbbell,
  DumbbellIcon,
  Flame,
  Footprints,
  Goal,
  MoonStar,
} from "lucide-react";
import { blue, cyan, green, orange, purple } from "@mui/material/colors";

export const GoalList = () => {
  const dispatch = useDispatch();
  const goals = useSelector(selectGoalsList);

  const handleToggle = (goalId: number) => {
    dispatch(toggleGoal(goalId));
  };

  const renderIcon = (goalId: number) => {
    switch (goalId) {
      case 1:
        return <DumbbellIcon className="text-purple-400" />; // Render icon for goal with ID 1
      case 2:
        return <Flame className="text-orange-500" />; // Render custom icon for goal with ID 2
      // Add more cases as needed for other goal IDs
      case 3:
        return <Footprints className="text-green-300" />; // Render default icon for other goals
      case 4:
        return <MoonStar className="text-cyan-200" />;
      case 5:
        return <Droplet className="text-blue-400" />;
      default:
        return <Goal />;
    }
  };

  const renderCheckbox = (goalId: number, goal:any) => {
    switch(goalId) {
      case 1:
        return <Checkbox
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 },'&.Mui-checked': {color: purple[400], }}}
        id={goal.id}
        checked={goal.completed}
        onChange={() => handleToggle(goal.id)}
      />
      case 2:
        return <Checkbox
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 },'&.Mui-checked': {color: orange[700], }}}
        id={goal.id}
        checked={goal.completed}
        onChange={() => handleToggle(goal.id)}
      />
      case 3:
        return <Checkbox
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 },'&.Mui-checked': {color: green[300], }}}
        id={goal.id}
        checked={goal.completed}
        onChange={() => handleToggle(goal.id)}
      />
      case 4:
        return <Checkbox
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30, },'&.Mui-checked': {color: cyan[200], }}}
        id={goal.id}
        checked={goal.completed}
        onChange={() => handleToggle(goal.id)}
      />
      case 5:
        return <Checkbox
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 },'&.Mui-checked': {color: blue[400], }}}
        id={goal.id}
        checked={goal.completed}
        onChange={() => handleToggle(goal.id)}
      />
      default:
        return <Checkbox
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 }}}
        id={goal.id}
        checked={goal.completed}
        onChange={() => handleToggle(goal.id)}
      />
    }
  };

  return (
    <ul className="space-y-2">
      {goals.map((goal: any) => (
        <li
          key={goal.id}
          className="flex items-center justify-between bg-[#262626] p-1 rounded-lg"
        >
          <div className="p-2">{renderIcon(goal.id)}</div>

          <label htmlFor={goal.id}>{goal.title}</label>
          {renderCheckbox(goal.id,goal)}
          {/* <Checkbox
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
            id={goal.id}
            checked={goal.completed}
            onChange={() => handleToggle(goal.id)}
          /> */}
        </li>
      ))}
    </ul>
  );
};
