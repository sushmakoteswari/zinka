import CourseBanner from "../../components/Course/CourseBanner";
import GetConsultation from "../../components/GetConsultation";
import Layout from "../../components/Layout";
import CourseTabSection from "../../components/Course/CourseTabSection";
import SEO from "../../components/SEO";

const DigitalMarketing = () => {
  return (
    <Layout>
      <SEO title="Digital Marketing" />
      <CourseBanner
        enrollCount={154}
        heading="Digital Marketing"
        price="5 Hours INR 2,000"
        description="Digital Marketing Methods, Setting up Sales Campaign using Digital Marketing, Consumer Behaviour in online sales, Measuring success of social media campaign, Marketing Analytics"
      >
        <img
          style={{ objectFit: "cover", height: "100%" }}
          src="/images/digitalMarketing2.jpeg"
          alt="Digital Marketing"
        />
      </CourseBanner>
      <CourseTabSection
        howItWorks={[
          "Go through each chapter at your own pace",
          "Take the sample test available after completing the chapter",
          "Go through the case studies included in the chapters",
          "Discuss with industry experts in the comment section if you have any questions",
          "Give your final test after you learn",
          "Earn the certificate if you score at least 50%",
          "If you don’t, you can retake the test",
        ]}
        courseLearn={[
          "Motivation behind data collection and analysis methods used by marketing professionals",
          "Frameworks and approaches to measuring consumers’ digital actions",
          "Evaluation and choosing appropriate web analytics tools and techniques",
        ]}
        courseCurriculumList={[
          "Digital Marketing Methods",
          "Setting up Sales Campaign using Digital Marketing",
          "Consumer Behaviour in online sales",
          "Measuring success of social media campaign",
          "Marketing Analytics",
        ]}
        courseSkillList={[
          "Digital Marketing",
          "SEO and SEM",
          "Email Marketing",
          "Paid Social Media Marketing",
        ]}
      />
      <GetConsultation />
    </Layout>
  );
};

export default DigitalMarketing;
