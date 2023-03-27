import { styles } from '../styles';
import { testimonials } from '../constants';

import FeedbackCard from '../components/FeedbackCard';

const Feedback = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] flex flex-col justify-center items-center">
      <div className={`bg-tertiary rounded-2x1 ${styles.padding} min-h-[300px] w-full`}>
        <div className="w-full">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;