
import React from 'react';
import { useSelector } from 'react-redux';
import { selectGoalsList,selectGoalsProgress } from "@/redux/goalSlice";
import { TargetIcon } from 'lucide-react';
import { Progress } from './ui/progress';
import Grid from '@mui/material/Grid'
interface Goal {
  id: number;
  title: string;
  completed: boolean;
}

const ProgressBar = () => {
  const goals: Goal[] = useSelector(selectGoalsList); // Access goals from slice (typed)
  const progress = useSelector(selectGoalsProgress); // Access progress from slice

  const completedCount = goals.filter(goal => goal.completed).length; // Typed filter expression

  return (
    <>
    {/* <div className="flex items-center  mb-2">
    <TargetIcon className="text-[#00A3FF] h-8 w-8" />
    <span className="text-sm">Your Daily Goal Almost Done</span>
    </div>
    <div className="text-sm mb-2">{completedCount} of {goals.length} Completed</div>
    <Progress className="w-full" value={progress} />
    {`${progress}%`} */}
     <Grid container spacing={2}>
      <Grid item xs={4}>
        <TargetIcon className="text-[#00A3FF] h-20 w-full" />
      </Grid>
      <Grid item xs={8}>
        <div className="text-sm">
          <span>Your Daily Goal Almost Done</span>
          <div className="mb-2">
            {completedCount} of {goals.length} Completed
          </div>
          <Progress className="w-full" value={progress} />
          <span className="float-right">{`${progress}%`}</span>
        </div>
      </Grid>
    </Grid>
    </>
  );
};

export default ProgressBar;

