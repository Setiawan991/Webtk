import Link from "next/link";

const NavbarStatis = () => {
  return (
    <>
      <div className="navbar bg-base-100 ring-1 shadow-xl  ring-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li className="hover:bg-fuchsia-500 rounded-xl ease-in-out transition-all hover:text-white">
                <a href="/">home</a>
              </li>
              <li className="hover:bg-fuchsia-500 rounded-xl ease-in-out transition-all hover:text-white ">
                <a href="/about">about</a>
              </li>
              <li className="hover:bg-fuchsia-500 rounded-xl ease-in-out transition-all hover:text-white">
                <a href="/contact">contact</a>
              </li>
            </ul>
          </div>
          <a className="">Web TK Harapan bangsa</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1   hover:text-white ">
            <li className="hover:bg-fuchsia-500 rounded-xl ease-in-out transition-all">
              <a href="/">home</a>
            </li>
            <li className="hover:bg-fuchsia-500 rounded-xl ease-in-out transition-all">
              <a href="/about">about</a>
            </li>
            <li className="hover:bg-fuchsia-500 rounded-xl ease-in-out transition-all">
              <a href="/contact">contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <Link href={"/contact"} className="btn text-green-500">
            kirim pesan
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarStatis;
