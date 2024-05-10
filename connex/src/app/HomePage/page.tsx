import Image from "next/image";
import React from "react";
import AboutItem from "~/components/AboutItem";
import Heading from "~/components/Heading";
import NavBar from "~/components/NavBar";

const page = () => {
  return (
    <div className="flex flex-col gap-10 p-10">
      <NavBar />
      <div className="flex flex-col items-center justify-between gap-10 lg:mt-0 lg:flex-row">
        <div className="flex h-full w-full items-center justify-center">
          <center>
            <Heading />
          </center>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Image
            unoptimized
            src="/rubbber.gif"
            height={700}
            width={700}
            alt="Image"
          ></Image>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <center>
          <h1 className="text-5xl font-bold text-zinc-500">
            We Got you Covered
          </h1>
        </center>
      </div>
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
        <div className="flex h-full w-full items-center justify-center">
          <Image
            unoptimized
            src="/infinity.gif"
            height={500}
            width={500}
            alt="Image"
          ></Image>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <center>
            <AboutItem title="Navigating the projects suitable for you is tough..." text="As a freelancer, navigating the client acquisition process is a
              labyrinth of uncertainty. Hours are spent scouring platforms,
              attending networking events, and crafting proposals, often met
              with rejection or silence. The feast-or-famine nature of
              freelancing breeds instability, impacting morale and financial
              security. We yearn for a streamlined solution, a platform where
              our skills are valued and connections with compatible clients are
              facilitated effortlessly. A community where recognition and
              professional growth flourish sans constant self-promotion. We seek
              empowerment to chart our career paths confidently. It's time for a
              transformative platform catering to freelancers' needs, ushering
              in an era of opportunity and fulfillment." color="text-lime-500"/>
          </center>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:mt-[-100px] lg:flex-row">
        <div className="flex h-full w-full items-center justify-center">
          <center>
            <AboutItem title="Finding suitable candidate is like a needle in haystack..." 
            text="For clients, the quest to find the perfect freelancer is often
            akin to searching for a needle in a haystack. The process involves
            sifting through countless resumes, portfolios, and proposals, each
            promising expertise and excellence. However, distinguishing
            between genuine talent and inflated claims becomes a daunting
            task. The sheer volume of applications inundates clients, making
            it challenging to discern who truly possesses the skills and
            experience necessary for their project. Time is precious, and the
            exhaustive vetting process consumes valuable resources that could
            be better utilized elsewhere. The need for a solution that
            simplifies this cumbersome process, providing clients with a
            curated selection of qualified freelancers tailored to their
            specific requirements, is undeniable." color="text-pink-500"/>
          </center>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Image
            unoptimized
            src="/stairs.gif"
            height={500}
            width={500}
            alt="Image"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default page;
