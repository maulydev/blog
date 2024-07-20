/* eslint-disable @next/next/no-img-element */
const page = () => {
  return (
    <div className="space-y-4 text-xl dark:text-gray-100">
      <h1 className="text-2xl font-bold">About Me</h1>
      <div className="relative h-96 rounded-lg overflow-hidden dark:border-2 dark:border-gray-600">
        <img
          src="https://scontent.facc5-1.fna.fbcdn.net/v/t39.30808-6/380795248_122096839748055984_7391263640393971686_n.png?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGk9wLmpJAQ2X2APt_Umr_IqbUW3g_r11yptRbeD-vXXL9-9zDmCrnwpuCAyIi9psHdOwB9Fu32eHwp_6gudQ5C&_nc_ohc=Ny0K0RU2jukQ7kNvgF2xCGT&_nc_zt=23&_nc_ht=scontent.facc5-1.fna&oh=00_AYC1Vz3KN69mXSIcFyKU14n2ZOp9wacppBRZbE6v7SL7Yg&oe=66A169A9"
          alt=""
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute rounded bottom-0 outline outline-4 outline-white lg:outline-offset-2 m-4">
          <img
            src="https://scontent.facc5-1.fna.fbcdn.net/v/t39.30808-6/380798507_122096840468055984_2998578467513062326_n.png?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH4sXdJRbr-CPr5tGGkoX8pA2IqbZ_jdo0DYiptn-N2jVpfnIOjR-Aopg0DQSuhId86BFVQUU8OuEjiyYq-eTfw&_nc_ohc=YKB0vS-VLU8Q7kNvgGkjm23&_nc_zt=23&_nc_ht=scontent.facc5-1.fna&oh=00_AYDg7IFwk_5jhmlprqh3VSrrRonLlMK3ntnnvDB8sJjb3g&oe=66A167CF"
            alt=""
            className="size-32 rounded object-cover"
          />
        </div>
      </div>
      <div className="space-y-4">
        <p>
          Hey there! I am{" "}
          <em className="line-through font-medium text-red-500">Mauly .dev</em>{" "}
          eerrrmm... actually I am <strong>Trapcy</strong> 😜, an accomplished full-stack web
          developer, dedicated to crafting exceptional web applications. With
          expertise in both front-end and back-end development, I thrive on
          challenges and continuous learning.
        </p>
        <p>
          My focus is on designing web solutions that combine aesthetics with
          seamless user experiences. I excel in collaborative environments,
          solving intricate problems, and transforming innovative ideas into
          user-centric applications. I’m committed to staying current with
          evolving web technologies.
        </p>
        <p>
          In my free time, you can find me exploring new coding frameworks, or
          building personal side projects. I’m a strong believer in the
          open-source community and the power of collaboration.
        </p>
      </div>
    </div>
  );
};

export default page;
