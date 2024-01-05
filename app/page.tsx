import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import featureIcon1 from '@/assets/img/feature_1.svg';
import featureIcon2 from '@/assets/img/feature_2.svg';
import featureIcon3 from '@/assets/img/feature_3.svg';
import featureIcon4 from '@/assets/img/feature_4.svg';

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2b2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox <br />
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>
          <p className="pb-20">
            Enhance your personal storage with Dropbox, offering a simple and
            effient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>
          <Link
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
            href="/dashboard"
          >
            {' '}
            Try it for free !
            <ArrowRight className="bl-10" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            your browser does not support the video tag
          </video>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-center font-bold text-4xl mb-10">
          What can you do with Dropbox?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <li className="flex flex-col space-y-4">
            <Image
              src={featureIcon1}
              width={120}
              height={120}
              alt="First feature icon."
            />
            <h3 className="text-xl font-bold">Store and protect your files</h3>
            <p>
              Get the storage you and your teams need with security features
              like file recovery, password protection, watermarking, and viewer
              history.
            </p>
          </li>
          <li className="flex flex-col space-y-4">
            <Image
              src={featureIcon2}
              width={120}
              height={120}
              alt="Second feature icon."
            />
            <h3 className="text-xl font-bold">
              Stay in control of shared content
            </h3>
            <p>
              Trackable links show when someone has opened a shared file and how
              long they’ve engaged with it. Plus, you can turn off access for
              any individual at any time without affecting others’ permissions.
            </p>
          </li>
          <li className="flex flex-col space-y-4">
            <Image
              src={featureIcon3}
              width={120}
              height={120}
              alt="Third feature icon."
            />
            <h3 className="text-xl font-bold">Collaborate on your work</h3>
            <p>
              Directly edit PDFs and use video tools to streamline feedback and
              approval processes.
            </p>
          </li>
          <li className="flex flex-col space-y-4">
            <Image
              src={featureIcon4}
              width={120}
              height={120}
              alt="Fourth feature icon."
            />
            <h3 className="text-xl font-bold">Store and protect your files</h3>
            <p>
              Automate manual processes with tools like eSignature templates,
              which let you reuse documents in seconds.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
