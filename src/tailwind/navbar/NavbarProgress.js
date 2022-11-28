import React from 'react'
import { useEffect, useState } from "react";

function NavbarProgress() {
	
	function useReadingProgress() {
		const [completion, setCompletion] = useState(0);
		useEffect(() => {
			function updateScrollCompletion() {
				// see how much we have scrolled
				const currentProgress = window.scrollY;
				// see how much total scroll is available
				let scrollHeight = document.body.scrollHeight - window.innerHeight;
				if (scrollHeight) {
					setCompletion(
						Number((currentProgress / scrollHeight).toFixed(2)) * 100
					);
				}
			}
			// add scroll event listener
			window.addEventListener("scroll", updateScrollCompletion);
	
			// remove scroll event listener on umount
			return () => {
				window.removeEventListener("scroll", updateScrollCompletion);
			};
		}, []);
		return completion;
	}
	const completion = useReadingProgress();

	return (
		<nav className="sticky top-0 left-0 right-0 z-0">
      <span
        id="progress-bar"
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={`absolute bottom-0 w-full transition-transform duration-150 h-1 bg-cyan-600`}
      />
      {/* Rest of the NavBar */}
    </nav>
	)
}

export default NavbarProgress