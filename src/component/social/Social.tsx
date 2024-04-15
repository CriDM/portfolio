import git from "../../assets/git.png";
import linkedin from "../../assets/linkedin.png";

function Social() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/cristian-della-monica/",
      icon: linkedin,
    },
    { link: "https://github.com/CriDM", icon: git },
  ];
  return (
    <div className="h-screen hidden md:flex flex-row justify-center fixed right-0 items-end z-max mr-5">
      {socials.map((social, index) => (
        <SocialDot
          link={social.link}
          icon={social.icon}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}

const SocialDot = ({ link, icon, index }: any) => {
  return (
    <a
      key={index}
      href={link}
      target="_blank"
      className={`flex justify-center  my-4 mx-2`}
    >
      <img
        className="w-10 h-10 items-center invert bg-cover bg-center opacity-50 hover:opacity-100 transition duration-200"
        src={icon}
      />
    </a>
  );
};

export default Social;
