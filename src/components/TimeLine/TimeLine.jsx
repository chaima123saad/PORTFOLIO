import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa';
import styles from "./TimeLine.module.css";

const Timeline = () => {
  return (
    <div className={styles.divc}>
      <h2 className={styles.title}>Education</h2>
      <VerticalTimeline>

        {/* Present - Current Master's Study */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#f94144', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #f94144' }}
          date="Present"
          iconStyle={{ background: '#f94144', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Professionnal Master’s Student in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Specialization: Software Engineering
          </h4>
        </VerticalTimelineElement>

        {/* 2023 - Bachelor's Degree */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#00b4d8', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #00b4d8' }}
          date="2023"
          iconStyle={{ background: '#00b4d8', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor's Degree in Computer Science
          </h3><br/>
          <h4 className="vertical-timeline-element-subtitle">Higher Institute of Computer Science and Mathematics of the University of Monastir</h4>
          
          <p>Final Year Project : Developed a web application for daily task management using artificial intelligence.</p>
        </VerticalTimelineElement>

        {/* 2020 - Baccalaureate */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#f9c74f', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #f9c74f' }}
          date="2020"
          iconStyle={{ background: '#f9c74f', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Baccalaureate in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            14 January High school - Ouardanine
          </h4>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
