import React, {
  ComponentProps,
  MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface MarqueeProps extends ComponentProps<"div"> {
  offset?: number;
  freq?: number;
}

function Marquee({ freq = 15, offset = 1, children }: MarqueeProps) {
  const dragRoot = useRef<HTMLDivElement>(null);
  const dragSpan = useRef<HTMLDivElement>(null);

  const scrollTimer = useRef<NodeJS.Timeout>();
  const prePageX = useRef<number>(0);
  const currentPageX = useRef<number>(0);

  const [spanWidth, setSpanWidth] = useState(0);
  const [state, setState] = useState({
    left: 0,
    isDraging: false,
  });

  const firstChild = useMemo(
    () => dragSpan.current?.firstElementChild,
    [dragSpan.current]
  );
  const lastChild = useMemo(
    () => dragSpan.current?.lastElementChild,
    [dragSpan.current]
  );

  const handleDrag = (e: MouseEvent) => {
    prePageX.current = currentPageX.current;
    currentPageX.current = e.pageX;

    console.dir(
      firstChild?.getBoundingClientRect(),
      lastChild?.getBoundingClientRect()
    );

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
    // scrollTimer.current = setInterval(move, freq);
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

    const firstChild = dragSpan.current.firstElementChild;
    const dragWidth = firstChild?.getBoundingClientRect().width ?? 0;

    setSpanWidth(Math.max(dragWidth, window.innerWidth));
    // scrollTimer.current = setInterval(move, freq);
  };

  useEffect(() => {
    if (!dragSpan.current) return;
    initMarquee();

    return () => {
      clearInterval(scrollTimer.current);
    };
  }, [dragSpan.current]);

  return (
    <div
      ref={dragRoot}
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
        ref={dragSpan}
        style={{
          left: state.left,
          position: "relative",
          userSelect: "none",
          display: "flex",
          minWidth: "max-content",
        }}
      >
        {Array.from({ length: 2 }, () => children)}
      </div>
    </div>
  );
}

export default Marquee;
