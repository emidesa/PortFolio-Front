import React, { useEffect } from 'react';

const SplineViewer = () => {
  useEffect(() => {
    // Dynamically loading the script
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.56/build/spline-viewer.js";
    script.type = "module";
    script.async = true;

    // Append the script to the document
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to ensure it runs only once when component mounts

  return (
    <div>
      <spline-viewer 
        url="https://prod.spline.design/il4L9T1ouUrG3Azw/scene.splinecode" 
        style={{ width: '50%', height: '100vh'}}
      ></spline-viewer>
    </div>
  );
};

export default SplineViewer;