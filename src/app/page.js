import { Button } from "@/components/Button";

import Link from "next/link";

export default async function Home() {
  // Get all blogs --->
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();
  return (
    <div className="bg-slate-200 rounded-lg shadow-2xl p-20">
      <div className="pb-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-3">
          My Blogs site{" "}
        </h1>
        <p className="py-10 text-lg font-mono">
          Welcome to our blog page, where creativity and knowledge come together
          to inspire and engage! Here, you’ll find a vibrant collection of
          thought-provoking articles, personal stories, and expert insights
          covering a wide range of topics. From lifestyle and travel to
          technology, health, and beyond, our blog is designed to cater to
          curious minds like yours. Whether you’re seeking practical tips to
          improve your daily life, fresh ideas to spark your creativity, or
          simply a captivating read to pass the time, you’ll discover something
          here that resonates with you. Each post is crafted with care to
          inform, entertain, and connect with readers from all walks of life. We
          believe in the power of words to bring people together, share
          perspectives, and create meaningful conversations. That’s why we
          encourage you to explore freely, leave comments, and share your
          thoughts. Your voice matters, and we’d love for you to be a part of
          our growing community. So, take a moment to browse through our
          stories, immerse yourself in the world of ideas, and let us inspire
          your next great adventure. Welcome aboard, and happy reading
        </p>
      </div>
      {/* blogs container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      {/* view more button */}
      <div className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto mt-8">
        <Link href={"/blog"}>
          <Button className="w-full text-xl ">My Blogs</Button>
        </Link>
      </div>
    </div>
  );
}
