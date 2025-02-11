"use client";
import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/testimonials.json");
        if (!response.ok) throw new Error("Failed to fetch testimonials");
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load testimonials"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  const getTestimonialPosition = (index: number) => {
    const total = testimonials.length;
    const position = (index - activeIndex + total) % total;
    return position;
  };

  return (
    <div className=" bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated TESTIMONIAL text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[150px] font-black text-gray-400/60 animate-slide-in-out">
          TESTIMONIALS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative h-[500px]">
          {testimonials.map((testimonial, index) => {
            const position = getTestimonialPosition(index);
            const isActive = position === 0;
            const isPrevious = position === 1;
            const isNext = position === testimonials.length - 1;

            return (
              <div
                key={testimonial.id}
                className={`absolute w-full max-w-md transition-all duration-1000 ease-in-out transform
                  ${isActive ? "left-1/2 -translate-x-1/2 scale-100 z-30" : ""}
                  ${isPrevious ? "left-0 scale-90 opacity-80 z-20" : ""}
                  ${
                    isNext
                      ? "left-full -translate-x-full scale-90 opacity-80 z-20"
                      : ""
                  }
                  ${
                    !isActive && !isPrevious && !isNext
                      ? "opacity-0 scale-75"
                      : ""
                  }`}
              >
                <div
                  className={`bg-white p-8 rounded-2xl shadow-xl mx-4
                  ${
                    isActive
                      ? "border-4 border-orange-500"
                      : "border-2 border-gray-200"
                  }`}
                >
                  <div className=" text-orange-500 text-4xl">“</div>
                  <p className="text-gray-600 text-lg mb-6">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <div className="ml-4">
                      <p className="font-bold text-gray-900 text-xl">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-8 right-8 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
