
import { GoalList } from "@/components/GoalList";
import { HeartPulseIcon } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { Slider } from "@/components/Slider";
import BarChart from "@/components/ProgressGraph";
import SimpleBottomNavigation, { BottomNavigation } from "@/components/NavigationBar";


export default function Home() {
  
  return (
    <>
    <div className="flex flex-col bg-[#1F1F1F] text-white min-h-screen p-4 ">
      <div className="flex-grow">
      <ProgressBar/>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold mt-4">{`Today's Goal`}</h2>
        <HeartPulseIcon className="text-[#FF3B30] h-6 w-6 mt-4" />
      </div>
      <div className="space-y-2">
        <GoalList />
      </div>
      <div className="mt-4">
      <Slider/>
      </div>
      <div className="mt-10 ">
        <BarChart />
      </div>
      <div>
      <BottomNavigation/>
      </div>
      <SimpleBottomNavigation/>
      </div>
    </div>
    
    </>
  );
}
