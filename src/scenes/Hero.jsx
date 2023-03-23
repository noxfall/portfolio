import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7x1 mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}>
        <h1 className={`${styles.heroHeadText}`}>
          Hi, I'm <span className="text-[#915EFF]">Milos</span>.
        </h1>
        <p className={`${styles.heroSubText} mt-2`}>
          I develop user interfaces <br />
          and web applications
        </p>
      </div>
    </section>
  );
}

export default Hero;