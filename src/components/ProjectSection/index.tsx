import Image from "next/image";
import Divider from "../shared/Divider";

const ProjectSection = () => {
  const projectData = [
    {
      title: "Project 1",
      desc: "Description 1",
      techStack: ["HTML", "CSS", "JS"],
      liveLink: "Live",
      codeLink: "Code",
      img: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
    },
    {
      title: "Project 2",
      desc: "Description 2",
      techStack: [
        "HTML",
        "CSS",
        "JS",
        "HTML",
        "CSS",
        "JS",
        "HTML",
        "CSS",
        "JS",
      ],
      liveLink: "Live",
      codeLink: "Code",
      img: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
    },
    {
      title: "Project 3",
      desc: "Description 3",
      techStack: ["HTML", "CSS", "JS"],
      liveLink: "Live",
      codeLink: "Code",
      img: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between">
        <div className="flex w-10/12 items-center text-2xl">
          <span className="text-primary font-semibold">#</span>
          <span className="font-semibold">projects</span>
          <div className="w-7/12 border-t-2 mx-4 border-primary"></div>
        </div>
        <span className="flex cursor-pointer text-lg">View all ---</span>
      </div>
      <div className="flex gap-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="w-84 border-2 border-gray-medium-5 flex flex-col"
          >
            <Image src={project.img} alt="" width={330} height={201} />
            <div className="flex flex-wrap p-2 gap-2 border-y-2 border-gray-medium-5 text-gray-medium-5">
              {project.techStack.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
            <div className="flex flex-col gap-6 p-4 flex-grow">
              <div className="flex gap-2 flex-col">
                <span className="font-medium text-2xl">{project.title}</span>
                <span className="text-gray-medium-5">{project.desc}</span>
              </div>
              <div className="flex gap-4 mt-auto">
                <button>{project.liveLink}</button>
                <button>{project.codeLink}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
