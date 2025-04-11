import CourseBanner from "../../components/Course/CourseBanner";
import GetConsultation from "../../components/GetConsultation";
import Layout from "../../components/Layout";
import CourseTabSection from "../../components/Course/CourseTabSection";
import SEO from "../../components/SEO";

const StrategicManagement = () => {
  return (
    <Layout>
      <SEO title="StrategicManagement" />
      <CourseBanner
        enrollCount={112}
        heading="Strategic Management"
        price="5 Hours INR 2,000"
        description="Formulating Strategy, Implementation of Strategy, Design Thinking, Negotiation Techniques, Decision making techniques and tools"
      >
        <img
          style={{ objectFit: "cover", height: "100%" }}
          src="/images/staticmanagement.jpeg"
          alt="Strategic Management"
        />
      </CourseBanner>
      <CourseTabSection
        courseLearn={[
          "Theories background work concepts and research output in the field of strategic management",
          "Demonstrate a clear understanding of the concepts, tools & techniques used by executives",
          "Demonstrate the ability to think critically in relation to a particular problem, situation or strategic",
          "decision through real-world scenarios",
          "Formulate strategies for exploiting international business opportunities including foreign entry",
          "strategies and international location of production",
        ]}
        courseCurriculumList={[
          "Formulating Strategy",
          "Implementation of Strategy",
          "Design Thinking",
          "Negotiation Techniques",
          "Decision making techniques and tools",
        ]}
        courseSkillList={[
          "Big Picture thinking",
          "Commercial acumen",
          "Planning and Organising",
          "Critical Thinking",
          "Delegation",
          "Interpret and decide",
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

export default StrategicManagement;
