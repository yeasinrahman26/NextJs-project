import Link from "next/link";
import { Button } from "./Button";


const BlogCard = ({ blog }) => {
  const { id, title, body } = blog || {};

  const sliceDescription = (text) => {
    return text.length > 70 ? text.slice(0, 70) + "..." : text;
  };


  const sliceTitle = (text) => {
    return text.length > 30 ? text.slice(0, 30) + "..." : text;
  };

  return (
    <div className="bg-gray-200 rounded-2xl shadow-2xl p-6 grid place-items-stretch">
      <h1 className="text-2xl font-semibold">Title: {sliceTitle(title)}</h1>
      <h3 className="text-xs font-medium my-3">
        <span className=" text-lg font-semibold">Description:</span> {sliceDescription(body)}...
      </h3>
      <Link href={`blog/${id}`} prefetch={true}>
        <Button>Read More</Button>
      </Link>
    </div>
  );
};

export default BlogCard;
