import CourseBanner from "../../components/Course/CourseBanner";
import GetConsultation from "../../components/GetConsultation";
import Layout from "../../components/Layout";
import CourseTabSection from "../../components/Course/CourseTabSection";
import SEO from "../../components/SEO";

const HumanResource = () => {
  return (
    <Layout>
      <SEO title="Human Resource Management" />
      <CourseBanner
        enrollCount={120}
        heading="Human Resource Management"
        price="5 Hours INR 2,000"
        description="Roles and Responsibilities of HR Management, Management of Appraisal Cycle, Talent Management, Recruitment, Selection and Induction, Managing Learning and Development, Performance Management"
      >
        <img
          style={{ objectFit: "cover", height: "100%" }}
          src="/images/humanresource.jpeg"
          alt="Human Resource"
        />
      </CourseBanner>
      <CourseTabSection
        courseLearn={[
          "To demonstrate an understanding of key terms, theories concepts and practices within the field of HRM",
          "To demonstrate competence in development and problem-solving in the area of HR Management",
          "To provide innovative solutions to problems in the fields of HRM",
          "To have an understanding of the basic concepts, functions and processes of human resource management",
          "To be aware of the role",
          "functions and functioning of the human resource department of the organizations",
          "To develop ways in which human resources management might diagnose a business strategy and then facilitate the internal change necessary to accomplish the strategy",
        ]}
        courseCurriculumList={[
          "Roles and Responsibilities of HR Management ",
          "Management of Appraisal Cycle ",
          "Talent Management ",
          "Recruitment, Selection and Induction",
          "Managing Learning and Development",
          "Performance Management",
        ]}
        courseSkillList={[
          "Organisation",
          "Decision Making ",
          "Empathetic",
          "Budgeting",
        ]}
        howItWorks={[
          "Go through each chapter in your own pace",
          "Take the sample test available after completing the chapter",
          "Go through the case studies included in the chapters",
          "Discuss with industry experts in comment section if you have any questions",
          "Give your final test after you learn",
          "Earn the certificate if you score at least 50%",
          "If you don’t, you can retake the test",
        ]}
      />
      <GetConsultation />
    </Layout>
  );
};

export default HumanResource;
