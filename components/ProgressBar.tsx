
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
     { <Grid container  className='bg-gradient-to-r from-blue-400 to-blue-600 text-white p-2 rounded-xl shadow-lg'>
      <Grid item xs={4}>
        <TargetIcon className="text-white h-20 w-full" />
      </Grid>
      <Grid item xs={8}>
        <div className="text-sm">
          <span>Your Daily Goal Almost Done</span>
          <div className="mb-2">
            {completedCount} of {goals.length} Completed
          </div>
          <Progress className="w-full h-1" value={progress} />
          <span className="float-right">{`${progress}%`}</span>
        </div>
      </Grid>
    </Grid> }
    
    </>
  );
};

export default ProgressBar;

