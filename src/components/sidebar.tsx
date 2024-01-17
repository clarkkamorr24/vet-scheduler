/** @format */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image'
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { usePathname } from "next/navigation";

// icons
import { LuHome } from "react-icons/lu";
import logo from "../icons/logo.png"
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { TbCalendarCheck } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbMoodHappy } from "react-icons/tb";
import { TbDeviceAnalytics } from "react-icons/tb";
import { BiWalletAlt } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { SlSettings } from "react-icons/sl";

type Props = {};

interface SideNavItemType {
  icon?: {
    icon: React.ReactNode;
  };
  label: string;
  href: string;
}

const sidebarItmes: SideNavItemType[] = [
  {
    icon: {
      icon: <LuHome />,
    },
    label: "Home",
    href: "/"
  },
  {
    icon: {
      icon: <TbCalendarCheck />
    },
    label: "Appointments",
    href: "/appointments"
  },
  {
    icon: {
      icon: <TbMail />,
    },
    label: "Messages",
    href: "/messages"
  },
  {
    icon: {
      icon: <TbMoodHappy />,
    },
    label: "Contacts",
    href: "/contacts"
  },
  {
    icon: {
      icon: <TbDeviceAnalytics />,
    },
    label: "Data Analytics",
    href: "/analytics"
  },

  {
    icon: {
      icon: <BiWalletAlt />,
    },
    label: "Subscription",
    href: "/subscription"
  },

  {
    icon: {
      icon: <IoIosHelpBuoy />,
    },
    label: "Help Center",
    href: "/help"
  },

  {
    icon: {
      icon: <SlSettings />,
    },
    label: "Settings",
    href: "/settings"
  }
];
export default function Sidebar({ }: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`static left-0 top-0 z-9999 flex h-screen flex-col ease-linear dark:bg-boxdark translate-x-0`}>
      <div
        className={cn(
          "flex flex-col bg-dark overflow-y-auto overflow-x-hidden duration-300 ease-linear h-screen",
          isSidebarOpen && "md:w-[250px]"
        )}
      >
        {/* logo */}
        <div className="flex justify-center py-10 text-orange border-b border-medium-dark mb-10">
          <Link href={"/"} className="flex flex-row items-center gap-2">
            <Image src={logo} alt="logo" width={40} height={40} />
            {isSidebarOpen && (
              <p className="hidden md:flex">LOREM</p>
            )}
          </Link>
        </div>

        {/* sidenavitems */}

        {sidebarItmes.map((d, i) => (
          <HoverContainer key={i}>
            <SideNavItem
              icon={d.icon}
              href={d.href}
              isSidebarOpen={isSidebarOpen}
              label={d.label}
            />
          </HoverContainer>
        ))}

        {/* toggle button  */}
        <div className="hidden md:flex">
          <RiArrowLeftDoubleFill
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className={cn(
              "transition-all text-3xl rounded-md absolute -right-4 top-1/2 bg-medium-dark text-white",
              !isSidebarOpen && "rotate-180"
            )}
          />
        </div>
        <div className="flex flex-col flex-1 h-screen py-10 mb-10 text text-orange justify-end">
          <Link href={"/"} className="flex flex-col justify-center items-center gap-2">
            <Image src={logo} alt="logo" width={30} height={30} />
            {isSidebarOpen && (
              <p
                className={cn(
                  "text-light-dark text-xs hidden md:flex",
                  !isSidebarOpen && "text-[7px]"
                )}
              >
                &copy; Lorem 2023
              </p>
            )}

          </Link>
        </div>
      </div>
    </div>
  );
}

function SideNavItem({
  href,
  isSidebarOpen,
  icon,
  label
}: SideNavItemType & { isSidebarOpen: boolean }) {
  const [animationParent] = useAutoAnimate();
  const pathname = usePathname();
  const isActivePage = pathname == href;
  return (
    <Link
      ref={animationParent}
      href={href}
      className="flex py-2 items-center cursor-pointer"
    >
      {/* icon */}

      <div className={cn(
        "flex text-2xl items-center text-center pr-4",
        isActivePage && "text-orange",
        !isSidebarOpen && "pr-8"
      )}>
        {/* <FaXTwitter /> */}
        {icon?.icon}
      </div>
      {/* label */}
      {isSidebarOpen && (
        <p
          className={cn(
            "text-sm hidden md:block pr-4",
            isActivePage && "text-orange"
          )}
        >
          {label}
        </p>
      )}
    </Link>
  );
}

function HoverContainer({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="p-2 pl-8 cursor-pointer text-white hover:text-orange hover:bg-medium-dark hover:border-r-[3px] border-orange hover:pr-0">
      {children}
    </div>
  );
}
