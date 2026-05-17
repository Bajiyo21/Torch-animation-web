import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const HeroSequence = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  
  // Total frames in the sequence
  const totalFrames = 240;

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/images/hero section/ezgif-frame-${paddedIndex}.png`;
      img.onload = () => {
        loadedCount++;
        // Initial draw when the first frame loads
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
          drawImage(ctx, img, canvasRef.current.width, canvasRef.current.height);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);

  // Function to draw image fitting the canvas appropriately
  const drawImage = (ctx, img, canvasWidth, canvasHeight) => {
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;
    let renderWidth, renderHeight, x, y;

    // Use contain on vertical screens (mobile) and cover on horizontal screens (desktop)
    const isPortrait = canvasRatio < 1.0;

    if (isPortrait) {
      // Contain fit
      if (canvasRatio < imgRatio) {
        renderWidth = canvasWidth;
        renderHeight = canvasWidth / imgRatio;
        x = 0;
        y = (canvasHeight - renderHeight) / 2;
      } else {
        renderWidth = canvasHeight * imgRatio;
        renderHeight = canvasHeight;
        x = (canvasWidth - renderWidth) / 2;
        y = 0;
      }
    } else {
      // Cover fit
      if (canvasRatio > imgRatio) {
        renderWidth = canvasWidth;
        renderHeight = canvasWidth / imgRatio;
        x = 0;
        y = (canvasHeight - renderHeight) / 2;
      } else {
        renderWidth = canvasHeight * imgRatio;
        renderHeight = canvasHeight;
        x = (canvasWidth - renderWidth) / 2;
        y = 0;
      }
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, renderWidth, renderHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!canvasRef.current || images.length === 0) return;
    
    const index = Math.max(1, Math.min(totalFrames, Math.round(latest))) - 1;
    const img = images[index];
    
    if (img && img.complete) {
      const ctx = canvasRef.current.getContext('2d');
      // Update canvas size in case of resize
      if (canvasRef.current.width !== window.innerWidth) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
      drawImage(ctx, img, canvasRef.current.width, canvasRef.current.height);
    }
  });

  // Handle window resize for initial canvas dimensions
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && images.length > 0) {
        const index = Math.max(1, Math.min(totalFrames, Math.round(frameIndex.get()))) - 1;
        const img = images[index];
        if (img && img.complete) {
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
          const ctx = canvasRef.current.getContext('2d');
          drawImage(ctx, img, canvasRef.current.width, canvasRef.current.height);
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, frameIndex]);

  // Text Animations based on scroll ranges
  // Text 1: 0 to 0.2
  const text1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.2], [50, -50]);
  
  // Text 2: 0.25 to 0.45
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

  // Text 3: 0.5 to 0.7
  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.5, 0.7], [50, -50]);

  // Text 4: 0.75 to 1.0
  const text4Opacity = useTransform(scrollYProgress, [0.75, 0.8, 0.9, 1], [0, 1, 1, 0]);
  const text4Y = useTransform(scrollYProgress, [0.75, 1], [50, -50]);

  return (
    <div ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <canvas 
          ref={canvasRef} 
          style={{ display: 'block', width: '100%', height: '100%' }}
        />
        
        {/* Overlay to darken background slightly for text readability */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />

        {/* Text Overlays */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          
          <motion.div style={{ position: 'absolute', opacity: text1Opacity, y: text1Y, textAlign: 'center', width: '90%', maxWidth: '600px' }}>
            <h1 className="hero-title hero-title-large">The Only Light<br/>You'll Need</h1>
          </motion.div>

          <motion.div style={{ position: 'absolute', opacity: text2Opacity, y: text2Y, textAlign: 'center', width: '90%', maxWidth: '600px' }}>
            <h2 className="hero-title hero-title-medium">Aerospace-Grade<br/>Aluminum</h2>
          </motion.div>

          <motion.div style={{ position: 'absolute', opacity: text3Opacity, y: text3Y, textAlign: 'center', width: '90%', maxWidth: '600px' }}>
            <h2 className="hero-title hero-title-medium">600-Lumen<br/>Power</h2>
          </motion.div>

          <motion.div style={{ position: 'absolute', opacity: text4Opacity, y: text4Y, textAlign: 'center', width: '90%', maxWidth: '800px' }}>
            <h1 className="hero-title hero-title-large" style={{ color: 'var(--text-secondary)' }}>Engineered for the Unexpected.</h1>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSequence;
