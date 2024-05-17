// "use client"
// import React, { useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleGoal } from '@/redux/goalSlice';
// import { selectGoalsList,selectGoalsProgress } from "@/redux/goalSlice";

// const Slider = () => {
//   const dispatch = useDispatch();
//   const goals = useSelector(selectGoalsList);
//   const progress = useSelector(selectGoalsProgress);
//   const [isSliding, setIsSliding] = useState(false);
//   const sliderRef = useRef<HTMLDivElement>(null);

//   const handleSlide = (event: MouseEvent | TouchEvent) => {
//     if (!sliderRef.current) return;
//     const sliderWidth = sliderRef.current.offsetWidth;
//     // const clientX = event.clientX;
//     const clientX = (event as MouseEvent).clientX;
//     const offsetX = clientX - sliderRef.current.getBoundingClientRect().left;

//     if (offsetX >= 0 && offsetX <= sliderWidth) {
//       setIsSliding(true);
//     } else {
//       setIsSliding(false);
//     }

//     // Update progress based on slider position (optional for visual representation)
//     const newProgress = Math.floor((offsetX / sliderWidth) * 100);
//   };

//   const handleSlideEnd = () => {
//     setIsSliding(false);
//     if (!isSliding) return; // Prevent unnecessary toggles if not actively sliding

//     // Toggle all goals to completed
//     dispatch(toggleGoal(goals.map((goal: { id: number; }) => goal.id))); // Dispatch action with all goal IDs
//   };

//   return (
//     <div className="slider-container">
//       <div
//         ref={sliderRef}
//         className={`slider ${isSliding ? 'sliding' : ''}`}
//         style={{ backgroundColor: 'orange' }}
//         onMouseDown={handleSlide}
//         onTouchStart={handleSlide}
//         onMouseUp={handleSlideEnd}
//         onTouchEnd={handleSlideEnd}
//       >
//         <div className="slider-circle" style={{ backgroundColor: 'white' }}>
//           <span className="slider-text">Swipe to track all</span>
//           <span className="slider-arrows">&gt;&gt;&gt;</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAll } from "@/redux/goalSlice";
import { selectGoalsList, selectGoalsProgress } from "@/redux/goalSlice";

const Slider = () => {
  const dispatch = useDispatch();
  const goals = useSelector(selectGoalsList);
  const progress = useSelector(selectGoalsProgress);
  const [isSliding, setIsSliding] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSlide = (event: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;

    const sliderWidth = sliderRef.current.offsetWidth;
    const clientX =
      "touches" in event
        ? event.touches[0].clientX
        : (event as React.MouseEvent).clientX;

    const offsetX = clientX - sliderRef.current.getBoundingClientRect().left;

    if (offsetX >= 0 && offsetX <= sliderWidth) {
      setIsSliding(true);
    } else {
      setIsSliding(false);
    }

    // Update progress based on slider position (optional for visual representation)
    const newProgress = Math.floor((offsetX / sliderWidth) * 100);
  };

  const handleSlideEnd = () => {
    setIsSliding(false);
    if (!isSliding) return; // Prevent unnecessary toggles if not actively sliding

    // Toggle all goals to completed
    dispatch(toggleAll(goals)); // Dispatch action with all goal IDs
  };

  return (
    // <div
    //   ref={sliderRef}
    //   className={`flex items-center justify-between bg-red-600 text-white rounded-full px-6 py-3 shadow-lg relative cursor-pointer slider ${
    //     isSliding ? "sliding" : ""
    //   }`}
    //   onMouseDown={handleSlide}
    //   onTouchStart={handleSlide}
    //   onMouseUp={handleSlideEnd}
    //   onTouchEnd={handleSlideEnd}
    // >
    //  <div className = "flex items-center">
    //   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    //     <span className="bg-white text-red-600 rounded-full w-12 h-12 flex items-center justify-center">Track</span>
    //   </div>
    //   <span className="ml-4">
    //     Slide to track all
    //   </span>
    //   </div>
    //  <div className="flex items-center">
    //   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.293 16.293l4.293-4.293-4.293-4.293 1.414-1.414 6 6-6 6z"/></svg>
    //   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.293 16.293l4.293-4.293-4.293-4.293 1.414-1.414 6 6-6 6z"/></svg>
    //   </div>
    // </div>
    <div
      className="flex items-center justify-center bg-red-600 text-white rounded-full px-6 py-4 shadow-lg relative cursor-pointer slider"
      ref={sliderRef}
      onMouseDown={handleSlide}
      onTouchStart={handleSlide}
      onMouseUp={handleSlideEnd}
      onTouchEnd={handleSlideEnd}
      style={{
        transition: "background-color 0.3s ease",
        backgroundColor: isSliding ? "#EF4444" : "#DC2626",
      }}
    >
      <div className="w-15 h-10 bg-white rounded-full flex items-center justify-center absolute top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2 transition-transform">
        <span className="bg-white text-red-600 rounded-full w-12 h-12 flex items-center justify-center">
          Track
        </span>
      </div>
      <span
        className="ml-20 transition-opacity"
        style={{ opacity: isSliding ? 0 : 1 }}
      >
        Slide to track all
      </span>

      <div className="flex items-center justify-end flex-1">
        <svg
          className="w-6 h-6 mr-1"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ opacity: isSliding ? 0 : 1 }}
        >
          <path d="M9.293 16.293l4.293-4.293-4.293-4.293 1.414-1.414 6 6-6 6z" />
        </svg>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ opacity: isSliding ? 0 : 1 }}
        >
          <path d="M9.293 16.293l4.293-4.293-4.293-4.293 1.414-1.414 6 6-6 6z" />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
