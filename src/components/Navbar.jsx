
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "./Button";
import Link from "next/link";

const Navbar = async () => {
  // Get user --->
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="py-4  rounded-xl bg-gray-400  rounded-t-none">
      <div className="navbar container    px-2">
        <div className="flex-1"></div>
        <div className="flex-none">
          <ul className="flex gap-6 lg:justify-center items-center">
            <Link
              href={"/"}
              prefetch={true}
              className={"font-semibold text-lg hover:underline"}
            >
              Home
            </Link>
            <Link
              href={"/blog"}
              prefetch={true}
              className={"font-semibold text-lg hover:underline"}
            >
              Blogs
            </Link>

            {user ? (
              <>
                <Link
                  href={"/profile"}
                  className={"font-semibold text-lg hover:underline"}
                >
                  Profile
                </Link>
                <Button>
                  <LogoutLink>Logout</LogoutLink>
                </Button>
              </>
            ) : (
              <Button>
                <LoginLink>Login</LoginLink>
              </Button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
