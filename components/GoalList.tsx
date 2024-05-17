import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGoal } from "@/redux/goalSlice";
import { selectGoalsList } from "@/redux/goalSlice";
import { Checkbox } from "@mui/material";
import { Goal } from "lucide-react";

export const GoalList = () => {
    const dispatch = useDispatch();
    const goals = useSelector(selectGoalsList)

    const handleToggle =(goalId:number) => {
        dispatch(toggleGoal(goalId));
    }

    return (
        <ul className="space-y-2">
        {goals.map((goal:any) => (
          <li key={goal.id} className="flex items-center justify-between bg-[#262A41] p-1 rounded-lg">
            <Goal/>
             <label htmlFor={goal.id}>{goal.title}</label>
            {/* <input
              type="checkbox"
              id={goal.id}
              checked={goal.completed}
              onChange={() => handleToggle(goal.id)}
            /> */}
            <Checkbox
            sx={
              { '& .MuiSvgIcon-root': { fontSize: 28 }}
            }
            id={goal.id}
            checked={goal.completed}
            onChange={() => handleToggle(goal.id)}
            />
          </li>
        ))}
      </ul>
    )
}