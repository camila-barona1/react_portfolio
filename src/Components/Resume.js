import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021 - Present"}
            title={"Jr Software Developer"}
            subTitle={"Infuvalle"}
            text={
              "Worked on different projects for companies in addition to maintaining a clinic application and making changes requested by clients using angular and cakephp technologies."
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2020 - 2021"}
            title={"Software Programming Technician"}
            subTitle={"SENA"}
            text={
              "Develops and implements software applications for Windows environments or Web environments on different platforms and programming languages. "
            }
          />
          <ResumeItem
            year={"2013 - 2018"}
            title={"Academic High School Diploma"}
            subTitle={"Liceo Comercial"}
            text={
              "Acquisition of training, intellectual and human maturity of knowledge and skills that allow to join active life and society with responsibility and competence."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
