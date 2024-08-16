import { useEffect, useState } from "react";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

function App() {
  const [source, setSource] = useState("/hiniature1.png");

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: Math.min(mousePosition.x - 220, window.innerWidth - 220),
      y: Math.min(mousePosition.y - 50, window.innerHeight - 50),
    },
    easeInOut,
  };

  return (
    <>
      <div className="h-svh flex flex-col items-center justify-center bg-yellow-200 cursor-none overflow-hidden">
        <motion.div
          className="absolute cursor-none top-0 left-0 h-28 pointer-events-none z-10 overflow-hidden"
          variants={variants}
          animate="default"
        >
          <img src="/hand.png" className="size-full object-cover -rotate-6 " />
        </motion.div>
        <h1 className="text-4xl font-semibold tracking-wide">Pat the Hina</h1>
        <h1 className="text-5xl font-semibold tracking-wide rotate-90">➨</h1>
        <div className="size-[30rem]">
          <motion.img
            src={source}
            className="size-full object-cover"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            onDragEnd={() => setSource("/hiniature1.png")}
            onTapStart={() => setSource("/hiniature2.png")}
            onTap={() => setSource("/hiniature1.png")}
          />
        </div>
      </div>
    </>
  );
}

export default App;
