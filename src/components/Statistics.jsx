import {
  useEffect,
  useState,
} from "react";

import { useInView }
from "react-intersection-observer";

function Statistics() {

  const [counts, setCounts] =
    useState([0, 0, 0, 0]);

  const [ref, inView] =
    useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

  const stats = [
    {
      number: 12,
      suffix: "+",
      title: "PRODUCTS BUILT",
    },
    {
      number: 500,
      suffix: "K+",
      title: "USERS SERVED",
    },
    {
      number: 200,
      suffix: "+",
      title: "BUSINESS PARTNERS",
    },
    {
      number: 99,
      suffix: "%",
      title: "CUSTOMER SATISFACTION",
    },
  ];

  useEffect(() => {
    if (!inView) return;

    const targets = [
      12,
      500,
      200,
      99,
    ];

    const interval =
      setInterval(() => {

        setCounts((prev) =>
          prev.map(
            (value, index) => {

              if (
                value >=
                targets[index]
              ) {
                return targets[index];
              }

              const step =
                Math.ceil(
                  targets[index] / 50
                );

              return Math.min(
                value + step,
                targets[index]
              );
            }
          )
        );

      }, 50);

    return () =>
      clearInterval(interval);

  }, [inView]);

  return (
    <section
      ref={ref}
      className="
        bg-blue-600
        py-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          md:grid-cols-4
          gap-12
          text-center
        "
      >
        {stats.map(
          (item, index) => (

            <div
              key={item.title}
            >
              <h2
                className="
                  text-6xl
                  font-bold
                  text-white
                  mb-4
                "
              >
                {counts[index]}
                {item.suffix}
              </h2>

              <p
                className="
                  text-white/80
                  text-xs
                  tracking-[4px]
                "
              >
                {item.title}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Statistics;