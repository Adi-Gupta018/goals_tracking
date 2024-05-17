import React from 'react';
import Link from 'next/link';

export default function SimpleBottomNavigation() {
  return (
    <div className=" w-full bg-gray-900 text-gray-400 flex justify-around items-center py-1">
      <Link href="/"> {/* Link to Page 1 (default) */}
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l3.265 6.472 7.155 1.04-5.185 5.053 1.223 7.135-6.458-3.398-6.458 3.398 1.223-7.135-5.185-5.053 7.155-1.04z"/></svg>
          <span className="mt-1 text-red-600">Page1</span>
        </div>
      </Link>
      <Link href="/page2"> {/* Link to Page 2 */}
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.73 3.08l-4.11 4.11 2.82 2.83-4.41 4.41-6.35 1.59-4.11-4.11 1.59-6.35 4.41-4.41 2.83 2.83 4.11-4.11c.9-.9 2.35-.9 3.25 0 .9.9.9 2.35 0 3.25z"/></svg>
          <span className="mt-1">Page2</span>
        </div>
      </Link>
      <Link href="/page3"> {/* Link to Page 3 */}
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l3.265 6.472 7.155 1.04-5.185 5.053 1.223 7.135-6.458-3.398-6.458 3.398 1.223-7.135-5.185-5.053 7.155-1.04z"/></svg>
          <span className="mt-1">Page3</span>
        </div>
      </Link>
      <Link href="/page4"> {/* Link to Page 4 */}
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3h-3.59l1.3 1.29-7.41 7.41-2.83-2.83-3.58 3.58 6.41 6.41h6.59v3h4v-4h4v-4h-4v-7.41l-3.41-3.41z"/></svg>
          <span className="mt-1">Page4</span>
        </div>
      </Link>
    </div>
  );
}
export  function BottomNavigation() {
    return (
      <div className=" fixed bottom-0 w-full bg-gray-900 text-gray-400 flex justify-around items-center py-4">
        <Link href="/"> {/* Link to Page 1 (default) */}
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l3.265 6.472 7.155 1.04-5.185 5.053 1.223 7.135-6.458-3.398-6.458 3.398 1.223-7.135-5.185-5.053 7.155-1.04z"/></svg>
            <span className="mt-1 text-red-600">Page1</span>
          </div>
        </Link>
        <Link href="/page2"> {/* Link to Page 2 */}
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.73 3.08l-4.11 4.11 2.82 2.83-4.41 4.41-6.35 1.59-4.11-4.11 1.59-6.35 4.41-4.41 2.83 2.83 4.11-4.11c.9-.9 2.35-.9 3.25 0 .9.9.9 2.35 0 3.25z"/></svg>
            <span className="mt-1">Page2</span>
          </div>
        </Link>
        <Link href="/page3"> {/* Link to Page 3 */}
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l3.265 6.472 7.155 1.04-5.185 5.053 1.223 7.135-6.458-3.398-6.458 3.398 1.223-7.135-5.185-5.053 7.155-1.04z"/></svg>
            <span className="mt-1">Page3</span>
          </div>
        </Link>
        <Link href="/page4"> {/* Link to Page 4 */}
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3h-3.59l1.3 1.29-7.41 7.41-2.83-2.83-3.58 3.58 6.41 6.41h6.59v3h4v-4h4v-4h-4v-7.41l-3.41-3.41z"/></svg>
            <span className="mt-1">Page4</span>
          </div>
        </Link>
      </div>
    );
  }

