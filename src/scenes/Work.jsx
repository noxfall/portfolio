import { styles } from '../styles';
import { projects } from '../constants';

import ProjectCard from '../components/ProjectCard';

const Work = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Work;