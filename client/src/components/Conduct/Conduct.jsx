import React from 'react';

const Conduct = () => {
  return (
    <div className="p-4 md:p-6 lg:p-12 bg-gray-100 min-h-screen text-align-justify ">
      <header className="bg-red-500 text-white text-3xl font-bold py-4 text-center mb-8 shadow-lg rounded-lg">
        Contributor Covenant Code of Conduct
      </header>
      <section className="prose max-w-full mx-auto">
        <h2 className="py-4 md:py-6 text-red-500 font-semibold text-xl md:text-2xl">Our Pledge</h2>
        <p className="text-gray-900">
          In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
        </p>

        <h2 className="py-4 md:py-6 text-red-500 font-semibold text-xl md:text-2xl mb-1 md:mb-2">Our Standards</h2>
        <p className="text-gray-900">Examples of behavior that contributes to creating a positive environment include:</p>
        <ul className="list-disc list-inside pl-5 space-y-2 text-gray-900">
          <li>Using welcoming and inclusive language</li>
          <li>Being respectful of differing viewpoints and experiences</li>
          <li>Gracefully accepting constructive criticism</li>
          <li>Focusing on what is best for the community</li>
          <li>Showing empathy towards other community members</li>
        </ul>

        <p className="py-4 md:py-6 text-red-500 font-semibold text-xl md:text-2xl">Examples of unacceptable behavior by participants include:</p>
        <ul className="list-disc list-inside pl-5 space-y-2 text-gray-900">
          <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
          <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
          <li>Public or private harassment</li>
          <li>Publishing others private information, such as a physical or electronic address, without explicit permission</li>
          <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
        </ul>

        <h2 className="py-4 md:py-6 text-red-500 font-semibold text-xl md:text-2xl">Our Responsibilities</h2>
        <p className="text-gray-900">
          Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.
        </p>
        <p className="text-gray-900">
          Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.
        </p>

        <h2 className="py-4 md:py-6 text-red-500 font-semibold text-xl md:text-2xl">Scope</h2>
        <p className="text-gray-900">
          This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.
        </p>

        <h2 className="py-4 md:py-6 text-red-500 font-semibold text-xl md:text-2xl">Enforcement</h2>
        <p className="text-gray-900">
          Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at <a href="mailto:lorem@example.com" className="text-blue-600 hover:underline">lorem@example.com</a>. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.
        </p>

        <p className="text-gray-900">
          Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the projects leadership.
        </p>
      </section>
    </div>
  );
};

export default Conduct;
