import { Button } from "@/components/Button";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { isAuthenticated, getUser } = useAuth();
  const user = await getUser();
  const { family_name, given_name } = user || {};

  return (await isAuthenticated()) ? (
    <div className="py-16 bg-[#a8d63da4] px-16 ">
      <div className="pb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-3 tracking-widest font-semibold">
          Welcome To Your Profile <br />{" "}
          <span className="text-2xl text-[#d63d3d]">
            {" "}
            " {given_name + " " + family_name} "{" "}
          </span>
        </h1>
      </div>
      {/* profile container */}
      <div>
        <p className="text-lg pb-2 font-medium ">
          Would you like to read some blogs ?{" "}
        </p>
        <Link href={"/blog"}>
          <Button className="bg-[#d63d3d] ">Click me</Button>
        </Link>
      </div>
    </div>
  ) : (
    redirect("/api/auth/login")
  );
};

export default Profile;
