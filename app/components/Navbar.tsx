"use client"

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={"bg-gray-900 text-white px-6 py-4 flex gap-6"}>
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/art" className={"hover:text-blue-400"}>Artworks</Link>
        </nav>
    );
}