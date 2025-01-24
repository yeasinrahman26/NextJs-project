import BlogCards from "@/components/BlogCards";


const Home = async () => {
  // Get all blogs --->
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();
  return (
    <div className="bg-gray-100 p-10">
      <div className="pb-6">
        <h3 className="text-gray-800 text-5xl font-semibold font-mono  text-center">" Explore My Blogs "</h3>
       
      </div>
      {/* blogs container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCards key={blog.id} blog={blog} />
        ))}
      </div>
      {/* blogs container */}
    </div>
  );
};

export default Home;
