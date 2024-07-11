import React, { useState } from "react";
import "../accordion.css";
import { IoChevronForward } from "react-icons/io5";

const Accordion = ({ props }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div
      className={`accordion-container ${isAccordionOpen ? "open" : "close"}`}
    >
      <div
        className="accordion-title text-with-icon"
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      >
        <IoChevronForward />
        <h3>{props.topicName}</h3>
      </div>
      <div className="accordion-content">
        <ul className="subtopics-list">
          {props.subTopics.map((s) => {
            return (
              <li className="subtopic">
                <ul>
                  <li className="subtopic-name">{s.name}</li>
                  <li>
                    <a href={s.videoLink}>Video Lecture</a>
                  </li>
                  <li>
                    <a href={s.textLink}>Lecture Notes</a>
                  </li>
                  <li>
                    Weightage:{" "}
                    {s.pyqs.map((p) => {
                      return (
                        <>
                          <span>{`${p.year} (${p.marks} marks), `}</span>
                        </>
                      );
                    })}
                  </li>
                  <li>Last Updated: {s.lastUpdated}</li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
