import React, {
  ComponentProps,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import M from "react-fast-marquee";

interface MarqueeProps extends ComponentProps<"div"> {
  offset?: number;
  freq?: number;
}

function Marquee({ freq = 15, offset = 1, children }: MarqueeProps) {
  const dragSpan = useRef<HTMLDivElement>(null);
  const scrollTimer = useRef<NodeJS.Timeout>();
  const prePageX = useRef<number>(0);
  const currentPageX = useRef<number>(0);

  const [spanWidth, setSpanWidth] = useState(0);

  const [state, setState] = useState({
    left: 0,
    isDraging: false,
  });

  const handleDrag = (e: MouseEvent) => {
    prePageX.current = currentPageX.current;
    currentPageX.current = e.pageX;

    const drag = currentPageX.current - prePageX.current;
    setState((prev) => {
      return {
        ...prev,
        left: state.left + drag,
      };
    });
  };

  const handleMouseDown = (e: MouseEvent) => {
    setState((prev) => {
      return { ...prev, isDraging: true };
    });
    prePageX.current = e.pageX;
    currentPageX.current = prePageX.current;
  };

  const move = () => {
    setState((prev) => {
      let left = prev.left - offset;
      if (left < -spanWidth) left = 0;

      return {
        ...prev,
        left,
      };
    });
  };

  const handMouseLeave = () => {
    scrollTimer.current = setInterval(move, freq);
    setState((prev) => {
      return { ...prev, isDraging: false };
    });
  };

  const handleMouseEnter = () => {
    clearInterval(scrollTimer.current);
  };

  const handleMouseUp = () => {
    setState((prev) => {
      return { ...prev, isDraging: false };
    });
  };

  const initMarquee = () => {
    if (!dragSpan.current) return;

    const dragWidth = dragSpan.current.getBoundingClientRect().width;
    setSpanWidth(Math.max(dragWidth, window.innerWidth));

    scrollTimer.current = setInterval(move, freq);
  };

  useEffect(() => {
    initMarquee();

    return () => {
      clearInterval(scrollTimer.current);
    };
  }, [dragSpan.current]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={state.isDraging ? handleDrag : undefined}
      style={{
        position: "relative",
        cursor: "all-scroll",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{ left: state.left, position: "relative", userSelect: "none" }}
      >
        <div
          ref={dragSpan}
          style={{
            minWidth: "max-content",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
