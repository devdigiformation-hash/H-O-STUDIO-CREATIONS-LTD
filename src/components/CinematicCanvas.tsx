import React, { useRef, useEffect, useState } from 'react';

interface CinematicCanvasProps {
  frames: string[];
  progress: number; // 0.0 to 1.0
  className?: string;
  altText: string;
}

export const CinematicCanvas: React.FC<CinematicCanvasProps> = ({
  frames,
  progress,
  className = '',
  altText
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Preload initial frames and progressive lazy loading of the rest
  useEffect(() => {
    let isCancelled = false;

    // Load first frame immediately
    const img0 = new Image();
    img0.src = frames[0];
    img0.onload = () => {
      if (!isCancelled) {
        imagesRef.current.set(0, img0);
        setFirstFrameLoaded(true);
      }
    };

    // Load subsequent frames progressively
    const loadRemaining = async () => {
      for (let i = 1; i < frames.length; i++) {
        if (isCancelled) break;
        const img = new Image();
        img.src = frames[i];
        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current.set(i, img);
          }
        };
      }
    };

    // Small delay to allow high priority hero resources to load
    const timer = setTimeout(loadRemaining, 50);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [frames]);

  // Render current frame onto canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Calculate frame index strictly clamped
    const effectiveProgress = prefersReducedMotion ? 0 : Math.max(0, Math.min(1, progress));
    const targetIndex = Math.min(
      frames.length - 1,
      Math.max(0, Math.round(effectiveProgress * (frames.length - 1)))
    );

    // Look for the target frame or closest available preloaded frame
    let frameImg = imagesRef.current.get(targetIndex);
    if (!frameImg) {
      // Find closest cached frame to prevent any blank frames
      for (let offset = 1; offset < frames.length; offset++) {
        const lower = targetIndex - offset;
        const upper = targetIndex + offset;
        if (lower >= 0 && imagesRef.current.has(lower)) {
          frameImg = imagesRef.current.get(lower);
          break;
        }
        if (upper < frames.length && imagesRef.current.has(upper)) {
          frameImg = imagesRef.current.get(upper);
          break;
        }
      }
    }

    if (!frameImg || !frameImg.complete || frameImg.naturalWidth === 0) return;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const displayWidth = Math.floor(rect.width * dpr);
      const displayHeight = Math.floor(rect.height * dpr);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }

      const imgWidth = frameImg.naturalWidth;
      const imgHeight = frameImg.naturalHeight;

      // Draw aspect fill/contain (cover logic preserving subject composition)
      const hRatio = canvas.width / imgWidth;
      const vRatio = canvas.height / imgHeight;
      const ratio = Math.max(hRatio, vRatio);

      const centerShiftX = (canvas.width - imgWidth * ratio) / 2;
      const centerShiftY = (canvas.height - imgHeight * ratio) / 2;

      ctx.drawImage(
        frameImg,
        0,
        0,
        imgWidth,
        imgHeight,
        centerShiftX,
        centerShiftY,
        imgWidth * ratio,
        imgHeight * ratio
      );
    };

    const animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [progress, frames, firstFrameLoaded, prefersReducedMotion]);

  return (
    <div className={`relative overflow-hidden w-full h-full bg-navy-950 flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
        role="img"
        aria-label={altText}
      />
      {!firstFrameLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy-950/80 z-10">
          <div className="w-8 h-8 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin" />
        </div>
      )}
    </div>
  );
};
