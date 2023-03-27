import { styles } from '../styles';
import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';

const About = () => {
  return (
    <section id="about" className="my-10 h-screen flex justify-center items-center">
      <h2 className={styles.sectionHeadText}>Overview</h2>
      <p className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]">
        I'm an experienced and passionate web developer
        skilled in Javascript, Typescript, and expertise
        in frameworks like React, NodeJS and ThreeJS.
        I'm tech-flexible and fully adaptable to my
        clients' desires. Let's work together to bring
        your ideas to life, and grow your business in the
        process.
      </p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;