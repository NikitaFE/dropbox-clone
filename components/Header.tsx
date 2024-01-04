import Image from 'next/image';
import Link from 'next/link';
import logoIcon from '@/assets/img/logo.svg';
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="bg-[#0160FE] w-fit p-2">
          <Image src={logoIcon} width={34} height={34} alt="Logo." />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>

      <div>
        {/* theme toggler */}

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
