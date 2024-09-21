import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image"
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex">
        {/*LEFT*/}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xls:w-[14%] p-4 bg-blue-100">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
            <Image src="/logo.png" alt="logo" width={32} height={32}/>
            <span className="hidden lg:block">School Project</span>
          </Link>
          <Menu/>
        </div>
        {/*RIGHT*/}
        <div className="w-[84%] md:w-[82%] lg:w-[84%] xls:w-[86%] bg-[#F7F8FA] overflow-scroll">
          <Navbar/>
            {children}
        </div>
      </div>
    );
  }