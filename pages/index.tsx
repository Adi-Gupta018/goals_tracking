import Image from "next/image";
import { Inter } from "next/font/google";
import { GoalList } from "@/components/GoalList";
import { TargetIcon, HeartPulseIcon } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import Slider from "@/components/Slider";
import BarChart from "@/components/ProgressGraph";
import SimpleBottomNavigation, { BottomNavigation } from "@/components/NavigationBar";


export default function Home() {
  
  return (
    <div className="flex flex-col bg-[#1F1F1F] text-white min-h-screen p-4">
      <div className="flex-grow">
      <div className="bg-[#373B53] p-4 rounded-lg mb-6">
        <ProgressBar/>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold mb-4">{`Today's Goal`}</h2>
        <HeartPulseIcon className="text-[#FF3B30] h-6 w-6" />
      </div>
      <div className="space-y-2">
        <GoalList />
      </div>
      <div className="mt-4">
      <Slider/>
      </div>
      <div className="mt-10">
        <BarChart />
      </div>
      <div>
      <BottomNavigation/>
      </div>
      <SimpleBottomNavigation/>
      </div>
    </div>
  );
}
