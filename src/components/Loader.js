import React, { useEffect } from "react";

function Loader() {
  useEffect(() => {
    // Set timeout to hide the loader after 4 seconds
    const loaderTimeout = setTimeout(() => {
      const loader = document.getElementById("loader");
      // Move the loader off the screen
      loader.style.transform = "translateY(-100vh)";
      setTimeout(() => {
        // Hide the loader completely
        loader.style.display = "none";
        // Restore the overflow and scroll bar
        document.body.style.overflow = "visible";
      }, 1000);
    }, 4000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(loaderTimeout);
  }, []);

  // Hide the overflow and scroll bar while the loader is visible
  document.body.style.overflow = "hidden";

  return (
    <div id="loader" className="loader">
      <div className="loader-text">cezaraborsan</div>
    </div>
  );
}

export default Loader;
