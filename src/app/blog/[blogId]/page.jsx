import { notFound } from "next/navigation";

const DynamicPage = async ({ params }) => {
  const { blogId } = params;

  // Fetch the blog data from the API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  // Handle the case when the blog does not exist
  if (!res.ok) {
    return notFound();
  }

  const blog = await res.json();

  return (
    <div className="flex items-center min-h-[400px] w-full md:w-2/3 mx-auto">
      <div className="bg-gray-200 shadow-2xl rounded-3xl p-6">
        <h1 className="text-4xl text-center uppercase font-semibold">
          {" "}
          {blog?.title}
        </h1>
        <h3 className="text-xl  my-3">
          <span className=" text-2xl font-semibold">Description: </span>
          {blog?.body}
        </h3>
      </div>
    </div>
  );
};

export default DynamicPage;
