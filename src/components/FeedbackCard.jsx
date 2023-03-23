const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image
}) => {
  return (
    <div
      className="bg-black-200 p-10 rounded-3x1 xs:w-[320px] w-full"
    >
      <p className="font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>{name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img src={image} alt={`feedback by ${name}`} className="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;