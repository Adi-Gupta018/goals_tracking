
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAll } from "@/redux/goalSlice";
import { selectGoalsList, selectGoalsProgress } from "@/redux/goalSlice";

export const Slider = () => {
  const dispatch = useDispatch();
  const goals = useSelector(selectGoalsList);
  const progress = useSelector(selectGoalsProgress);
  const [isSliding, setIsSliding] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const handleSlide = (event: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current || !thumbRef.current) return;

    const sliderWidth = sliderRef.current.offsetWidth;
    const thumbWidth = thumbRef.current.offsetWidth;
    const clientX =
      "touches" in event
        ? event.touches[0].clientX
        : (event as React.MouseEvent).clientX;

    let offsetX = clientX - sliderRef.current.getBoundingClientRect().left;
    offsetX = Math.max(0, Math.min(offsetX, sliderWidth - thumbWidth));

    thumbRef.current.style.transform = `translateX(${offsetX}px)`;

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
    <div
      className="flex items-center justify-center bg-red-600 text-white rounded-full px-6 py-4 shadow-lg relative cursor-pointer slider"
      ref={sliderRef}
      onMouseDown={() => setIsSliding(true)}
      onTouchStart={() => setIsSliding(true)}
      onMouseUp={handleSlideEnd}
      onTouchEnd={handleSlideEnd}
      onMouseMove={isSliding ? handleSlide : undefined}
      onTouchMove={isSliding ? handleSlide : undefined}
      style={{
        transition: "background-color 0.8s ease",
        backgroundColor: isSliding ? "#EF4444" : "#DC2626",
      }}
    >
      <div
        className="w-15 h-10 bg-white rounded-full flex items-center justify-center absolute  left-3 transform -translate-x-1/2 -translate-y-1/2"
        ref={thumbRef}
        style={{
          transform: "translateX(0)",
          backgroundColor: "white", // Ensure white background for circle
        }}
      >
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
