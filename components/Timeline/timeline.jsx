"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import LooksOneTwoToneIcon from "@mui/icons-material/LooksOneTwoTone";
import SettingsSuggestTwoToneIcon from "@mui/icons-material/SettingsSuggestTwoTone";
import CodeTwoToneIcon from "@mui/icons-material/CodeTwoTone";

import Image from "next/image";

import devphase1 from "../../public/timeline/devphase1.jpg";
import sdphase1 from "../../public/timeline/sdphase1.jpg";

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "white",
          }}
          date="Present"
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          iconStyle={{ background: "white", color: "black" }}
          icon={<SettingsSuggestTwoToneIcon />}
        >
          <h3
            style={{ color: "black", margin: "3px" }}
            className="vertical-timeline-element-title"
          >
            System Design Team
          </h3>
          <h5
            style={{ color: "grey", margin: "3px" }}
            className="vertical-timeline-element-subtitle"
          >
            Robot System Design and Model
          </h5>
          <div>
            <Image
              style={{ maxWidth: "100%", height: "auto" }}
              src={sdphase1}
            ></Image>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          iconStyle={{ background: "white", color: "black" }}
          icon={<CodeTwoToneIcon />}
        >
          <h3
            style={{ color: "black", margin: "3px" }}
            className="vertical-timeline-element-title"
          >
            Development Team
          </h3>
          <h5
            style={{ color: "grey", margin: "3px" }}
            className="vertical-timeline-element-subtitle"
          >
            Control Panel Implementation
          </h5>
          <div>
            <Image
              style={{ maxWidth: "100%", height: "auto" }}
              src={devphase1}
            ></Image>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#05ACEA", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #05ACEA" }}
          date="August 2023"
          iconStyle={{ background: "#05ACEA", color: "#fff" }}
          icon={<LooksOneTwoToneIcon />}
        >
          <h3 className="vertical-timeline-element-title">Phase 1</h3>
          <p>
            Phase 1 was a combination of planning and testing our hypothesis. We
            began by starting the simple questions; what do we want to achieve?
            Who should be taken in? How should we do it? After the initial
            planning, we started to get to work. The best people within our
            network were called, meetings happened and the designs were drafted.
            With time, phase-1 went from being a blueprint of half ideas to a
            team gathered who used their arsenal of skills to build a prototype
            AJ20 robot, a functioning website and admin control panel.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
