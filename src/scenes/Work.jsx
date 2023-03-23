import { styles } from '../styles';
import { projects } from '../constants';

import ProjectCard from '../components/ProjectCard';

const Work = () => {
  return (
    <section>
      <div>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </div>

      <div className="w-full flex">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Work;