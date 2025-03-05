'use client'
import Image from "next/image";
import React from "react";
import AboutItem from "~/components/AboutItem";
import Card from "~/components/Card";
import Heading from "~/components/Heading";
import NavBar from "~/components/NavBar";
import type { CardType, ContactType } from "utils/type";
import { FaDiscord, FaLinkedin, FaInstagram, FaGithub  } from "react-icons/fa";
import Link from "next/link";


const CardItems: CardType[] = [
  {
    title: "Role-Based Authentication",
    text: "Our web app offers role-based authentication, empowering users to choose between freelancer or client roles. This ensures tailored experiences and seamless interactions for all stakeholders.",
    img: "role.jpg"
  },
  {
    title: "Posting Jobs",
    text: "Easily post and manage jobs with our intuitive interface. Clients can effortlessly add job listings, specifying project details, requirements, and deadlines, streamlining the hiring process.",
    img: "job.jpg"
  },
  {
    title: "Customized Job Search",
    text: "Empower freelancers with job search functionality. Seamlessly browse and filter through available projects, ensuring a tailored job-hunting experience that matches individual skills and preferences.",
    img: "search.jpg"
  },
  {
    title: "Instant Gmail Notifications",
    text: "Receive instant Gmail notifications tailored to your job profile. Stay ahead of the curve as our system alerts you the moment a client posts a job matching your expertise and preferences.",
    img: "gmail.jpg"
  },
  {
    title: "Resume Analysis and Score Assignment",
    text: "Experience personalized resume analysis for your job profile. Our cutting-edge system scrutinizes your qualifications, skills, and experience, ensuring the best-fit opportunities are recommended to you.",
    img: "analysis.jpg"
  },
  {
    title: "Recommendations Based on Resume Score",
    text: "Unlock job recommendations tailored to your resume score. Our algorithm analyzes your qualifications and experience, matching you with opportunities that align with your strengths and expertise.",
    img: "globe.jpg"
  }
];

const ContactList:ContactType[] = [
  {
    icon: <FaDiscord/>,
    link: "https://discord.com/channels/@me/1238365482289991731"
  },
  {
    icon: <FaLinkedin/>,
    link: "https://www.linkedin.com/in/darshil-mahraur-821216259/"
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/pahalll_014/"
  },
  {
    icon:<FaGithub/>,
    link: "https://github.com/Nun-Thee-Knee/"
  }
]

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10 p-10">
      <NavBar />
      <div id="Home" className="flex flex-col items-center justify-between gap-10 lg:mt-0 lg:flex-row">
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
      <div id="About" className="flex w-full items-center justify-center">
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
            <AboutItem
              title="Navigating the projects suitable for you is tough..."
              text="As a freelancer, navigating the client acquisition process is a
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
              in an era of opportunity and fulfillment."
              color="text-lime-500"
            />
          </center>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:mt-[-100px] lg:flex-row">
        <div className="flex h-full w-full items-center justify-center">
          <center>
            <AboutItem
              title="Finding suitable candidate is like a needle in haystack..."
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
            specific requirements, is undeniable."
              color="text-pink-500"
            />
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
      <div id="Features" className="flex w-full items-center justify-center">
        <center>
          <h1 className="text-5xl font-bold text-zinc-500">
            We Provide you with
          </h1>
        </center>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid flex-col gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CardItems.map((item)=>{
            return <Card key={item.img} title={item.title} text={item.text} img={item.img}/>
          })}
        </div>
      </div>
      <div id="Contact" className="p-10 gap-5 flex items-center justify-center mb-[-100px]">
        {ContactList.map((item)=>{
          return <Link key={item.link} href={item.link}>
            <span className="text-zinc-700 hover:text-zinc-900 h-20 w-20">{item.icon}</span>
          </Link>
        })}
      </div>
    </div>
  );
};

export default HomePage;
