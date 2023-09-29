import { Stack } from '@phosphor-icons/react';
import { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import LevelImage from '~/assets/images/level.png';
import ProfileImage from '~/assets/images/profile.png';

const NavLink = ({
  route,
  name,
  extraClassName,
}: {
  route: string;
  name: string;
  extraClassName?: string;
}) => (
  <RouterNavLink
    to={route}
    className={({ isActive, isPending }) =>
      isPending
        ? 'p-2 text-white hover:text-blue-400 cursor-pointer'.concat(
            extraClassName!
          )
        : isActive
        ? 'p-2 text-blue-400 cursor-pointer'.concat(extraClassName!)
        : 'p-2 text-white hover:text-blue-400 cursor-pointer'.concat(
            extraClassName!
          )
    }
  >
    {name}
  </RouterNavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav className="bg-neutral-800 fixed px-2  sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-400">
        {/* Desktop navbar */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <RouterNavLink to="/" className="flex items-center">
            <img
              src={LevelImage}
              alt="LevelImage"
              className="hidden sm:block sm:w-[35px] sm:-h-[35px] "
            />
            <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              Evolution Solutions
            </span>
          </RouterNavLink>
          <section className="flex">
            <div className="sm:flex justify-center hidden">
              <NavLink route="/services" name="Services" />
              <NavLink route="/contact" name="Contact" />
              <NavLink route="/about" name="About" />
            </div>
          </section>
          <div className="flex">
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 text-white hidden sm:block rounded-xl mr-2 hover:bg-blue-500"
            >
              Get Started
            </button>
            <button
              type="button"
              className="hidden sm:block text-white border font-medium rounded-lg ml-2 text-sm px-4 hover:bg-blue-300/10 mr-4"
            >
              Login
            </button>
            <button onClick={() => setOpen(!open)} className="sm:hidden block">
              <Stack size={30} className="mt-2 mr-2 text-white/70" />
            </button>
          </div>
        </div>

        {/* Desktop navbar end */}
        <section className={`${open ? null : 'hidden'} h-[19rem]`}>
          <NavLink name="About" route="/about" extraClassName="pl-8 pb-4" />
          <NavLink
            name="Services"
            route="/services"
            extraClassName="pl-8 pb-4"
          />
          <NavLink name="Contact" route="/contact" extraClassName="pl-8 pb-4" />

          {/* Profile Section */}
          <div className="bg-gray-200/50 h-[1px] w-[85%] ml-[-10px]">
            <div className="flex cursor-pointer">
              <img
                src={ProfileImage}
                alt="ProfileImage"
                className="w-14 ml-8 mt-4 flex"
              />
              <p className="my-auto ml-4 text-white font-semibold">Thiago</p>
              <p className="my-auto ml-2 text-white font-semibold">Luiz</p>
            </div>
            <p className="my-auto ml-[103px] mt-[-27px] text-xs font-light text-gray-200/60">
              rp.thiagoluiz@gmail.com
            </p>
          </div>
          <div className="flex justify-end">
            <div className="mt-[6%] mr-4">
              <button className="text-white font-semibold border rounded-xl py-2 px-4 hover:bg-gray-100/20">
                Logout
              </button>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
}
