import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component';
import { styles } from '../styles';
import { experiences } from '../constants';

import XpCard from "../components/XpCard";

const Experience = () => {
  return (
    <section>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((xp, index) => (
            <XpCard key={`experience-${index}`} xp={xp} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;