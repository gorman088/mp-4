import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-4 text-center mt-8">
            <p className="text-sm"> All rights reserved by Michael Gorman <Link href="/" className="underline hover:text-blue-300">Credits</Link> &#169; </p>
        </footer>
    );
}