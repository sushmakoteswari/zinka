import CourseBanner from "../../components/Course/CourseBanner";
import GetConsultation from "../../components/GetConsultation";
import Layout from "../../components/Layout";
import CourseTabSection from "../../components/Course/CourseTabSection";
import SEO from "../../components/SEO";

const ProjectManagement = () => {
  return (
    <Layout>
      <SEO title="ProjectManagement" />
      <CourseBanner
        enrollCount={166}
        price="5 hours INR 2,000"
        heading="Project Management"
        description="Scope, Time, Cost, Quality, Resources, Risk, Procurement, Applications of Agile, Tools & Techniques"
      >
        <img
          style={{ objectFit: "cover", height: "100%" }}
          src="/images/projectManagement2.jpeg"
          alt="Project Management"
        />
      </CourseBanner>
      <CourseTabSection
        howItWorks={[
          "Go through each chapter in your own pace",
          "Take the sample test available after completing the chapter",
          "Go through the case studies included in the chapters",
          "Discuss with industry experts in comment section if you have any questions",
          "Give your final test after you learn",
          "Earn the certificate if you score at least 50%",
          "If you don’t, you can retake the test",
        ]}
        courseLearn={[
          "Agile tools",
          "Data driven decision making",
          "Tracking",
          "Risk",
          "Implement",
          "Time overruns - Learn risk management techniques",
          "Understand different project management aspects such as planning",
          "Time management and closure - Appreciate the varying concepts and life cycles of a project such as integration",
        ]}
        courseCurriculumList={[
          "Scope",
          "Time",
          "Cost",
          "Quality",
          "Resources",
          "Risk",
          "Procurement",
          "Applications of Agile",
          "Tools & Techniques",
        ]}
        courseSkillList={[
          "Planning and Forecasting",
          "Project Management Methodologies",
          "Subject Matter Expertise",
          "Project Management Software",
          "Organisation",
          "Problem Solving",
          "Adaptability",
        ]}
      />
      <GetConsultation />
    </Layout>
  );
};

export default ProjectManagement;
