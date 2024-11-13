import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-col items-center leading-tight text-white">
        <h1 className="font-bold text-3xl">ZK.</h1>
        <p className="font-light text-sm">Zeenat Khan</p>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Link href={social.href} target="_blank" key={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
              className="border-zinc-300 border-2 rounded-full w-[35px] bg-gradient-to-r from-purple-100 to-red-100 hover:scale-110 hover:bg-violet-50 transition-all p-1"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
