import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const XpCard = ({ xp }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1D1836",
        color: "#FFF"
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={xp.date}
      iconStyle={{ background: xp.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={xp.icon}
            alt={xp.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold">{xp.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {xp.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {xp.points.map((point, index) => (
          <li
            key={`xp-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default XpCard;