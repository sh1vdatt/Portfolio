"use client";
import { useEffect } from "react";

import { Button } from "@nextui-org/button";
import pp from "public/photo/avtar.png";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";

import { Education } from "../Education";
import { iconType, educationType } from "@/app/types";
import { educationList, techonologyIconList, whoAmIData } from "@/app/utils";
import carouselImages from "@/app/utils/carouselImages";
import ImageCarousel from "../ImageCarousel";
import aboutAnimation from "../../utils/aboutSectionAnimations";
import IconComponent from "../ui/IconComponent";

const { fullName, profession, whoAmI, quote } = whoAmIData;

export default function About() {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    if (mq.matches) {
      aboutAnimation.whoAmIAnimation();
      aboutAnimation.professionAnimation();
      aboutAnimation.quoteAnimation();
      aboutAnimation.techonologyIconListAnimation();
      aboutAnimation.verticalImageAnimation();
      aboutAnimation.educationContentAnimation();
    } else {
      aboutAnimation.mobileAnimation();
    }
  }, []);

  const handleDownloadCV = () => {
    const downloadUrl = `https://drive.google.com/file/d/1yobeSXpRfLSoYCmXhiOBF24c3HIMFfKW/view?usp=drive_link`;

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "Shivam_resume_SDE.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-rows-8 grid-cols-4 lg:grid-cols-3 gap-5">
      <Card className="col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-1 bg-emerald-50">
        <CardBody className="flex-col items-center justify-center gap-2">
          <Avatar
            name="Shiv"
            src={pp.src}
            className="w-24 h-24 text-large brightness-90"
          />
          <h1 className="text-2xl font-bold text-gray-800">{fullName}</h1>

          <Button onClick={handleDownloadCV}>Download CV</Button>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-2 opacity-0 mobile-animation whoAmICard bg-emerald-50">
        <CardBody className="gap-2">
          <div className="text-3xl font-bold text-gray-800">About me?</div>
          <div className="text-lg text-gray-500">{whoAmI}</div>
        </CardBody>
      </Card>

      <Card className="col-span-full row-start-2 row-end-3 lg:row-start-2 lg:col-start-1 lg:col-span-1 bg-teal-500 opacity-0 mobile-animation professionCard">
        <CardBody className="justify-center items-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white text-center">
            {profession}
          </h2>
        </CardBody>
      </Card>

      <Card className="hidden lg:flex col-span-2 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 bg-teal-500 opacity-0 mobile-animation quoteCard">
        <CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
          <div className="text-3xl font-bold text-white text-center">
            &#34;{quote}&#34;
          </div>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-3 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 mobile-animation technologyIconList bg-emerald-50">
        <CardBody className="gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Technologies I have worked with
          </h2>

          <div className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-6">
            {techonologyIconList.map(({ name, icon }: iconType) => (
              <Tooltip
                key={`technology-item-${name}`}
                content={name}
                className="text-gray-800"
              >
                <IconComponent icon={icon} />
              </Tooltip>
            ))}
          </div>
        </CardBody>
      </Card>

      <ImageCarousel
        images={carouselImages}
        className="hidden lg:block lg:row-start-1 lg:row-span-2 lg:col-start-3 lg:h-[350px] rounded-xl relative opacity-0 mobile-animation verticalImage"
        autoPlayInterval={3000}
      />

      <Card className="col-span-full lg:row-start-4 lg:row-span-1 lg:col-start-2 lg:col-span-2 opacity-0 mobile-animation educationContent bg-emerald-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block icon icon-tabler icon-tabler-timeline absolute top-0 -right-7"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#14b8a6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 16l6 -7l5 5l5 -6"></path>
          <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
        <CardBody className="gap-2 flex-wrap">
          <h2 className="text-3xl font-bold text-gray-800">Education</h2>

          <div className="flex flex-col lg:flex-col gap-2">
            {educationList.map((education: educationType) => (
              <Education
                key={`education-item-${education.career}`}
                career={education.career}
                years={education.years}
                description={education.description}
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
