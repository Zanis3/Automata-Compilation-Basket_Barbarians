import { X, Coffee } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Clamp a value between min and max.
 */
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

/**
 * Get the client position from a mouse or touch event.
 */
function getClientPos(e) {
  if (e.touches && e.touches.length > 0) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
  return { x: e.clientX, y: e.clientY };
}

export default function SwingWindow({
  title,
  width,
  height,
  children,
  onClose,
}) {
  const [position, setPosition] = useState({ x: 100, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  // ── Clamp position so the window never leaves the viewport ──
  const clampPosition = useCallback((nextX, nextY) => {
    const el = windowRef.current;
    if (!el) return { x: nextX, y: nextY };
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return {
      x: clamp(nextX, 0, vw - rect.width),
      y: clamp(nextY, 0, vh - 32), // 32px so title bar is always reachable
    };
  }, []);

  // ── Shared drag-start handler (mouse + touch) ──
  const handleDragStart = useCallback(
    (e) => {
      if (
        e.target.closest(".swing-title-bar") &&
        !e.target.closest(".swing-title-btn")
      ) {
        const pos = getClientPos(e);
        setIsDragging(true);
        setDragOffset({
          x: pos.x - position.x,
          y: pos.y - position.y,
        });
      }
    },
    [position],
  );

  // ── Shared drag-move handler (mouse + touch) ──
  const handleDragMove = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        const pos = getClientPos(e);
        setPosition((prev) =>
          clampPosition(pos.x - dragOffset.x, pos.y - dragOffset.y),
        );
      }
    },
    [isDragging, dragOffset, clampPosition],
  );

  // ── Shared drag-end handler ──
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // ── Attach / detach mouse listeners ──
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("touchmove", handleDragMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleDragEnd);
    }
    return () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchmove", handleDragMove);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // ── Close on Escape ──
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // ── Re-centre on resize so the window stays visible ──
  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => clampPosition(prev.x, prev.y));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [clampPosition]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-start"
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    >
      <div
        ref={windowRef}
        className="absolute bg-[#3C3C3C] rounded-sm shadow-2xl border border-[#666666] overflow-hidden max-sm:left-2! max-sm:right-2! max-sm:top-15! max-sm:bottom-2! max-sm:w-auto! max-sm:h-auto!"
        style={{
          left: position.x,
          top: position.y,
          width: width,
          height: height,
        }}
      >
        {/* Title Bar */}
        <div className="swing-title-bar flex items-center justify-between h-8 bg-white pl-1.5 select-none cursor-default max-sm:h-10 max-sm:pl-2">
          <span className="flex items-center gap-2 text-black text-[12px] font-sans font-normal tracking-wide truncate max-sm:text-[13px]">
            <Coffee size={14} className="text-red-300 max-sm:size-4" />
            {title}
          </span>
          <div className="flex items-center gap-0.5 h-full">
            <button
              className="swing-title-btn w-8 h-full flex items-center justify-center hover:bg-red-500 cursor-pointer max-sm:w-10"
              onClick={onClose}
            >
              <X size={14} className="text-black max-sm:size-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-26px)] bg-[#3C3C3C] overflow-auto max-sm:h-[calc(100%-32px)]">
          {children}
        </div>
      </div>
    </div>
  );
}
