/** @format */

import React from "react";
import Link from "next/link";

type Props = {};

export default function Home({ }: Props) {
  return <div className="my-5 mx-5">
    <p>Go to <Link href="/appointments"><span className="text-orange cursor-pointer">Appointments</span></Link> tab to see appointments</p>
  </div>;
}