import CourseBanner from "../../components/Course/CourseBanner";
import GetConsultation from "../../components/GetConsultation";
import Layout from "../../components/Layout";
import CourseTabSection from "../../components/Course/CourseTabSection";
import SEO from "../../components/SEO";

const Finance = () => {
  return (
    <Layout>
      <SEO title="Finance" />
      <CourseBanner
        heading="Finance"
        enrollCount={98}
        price="5 Hours INR 2,000"
        description="Project Valuation, Introduction to Cost Accounting, Cash Management in Enterprises, Working Capital Management, Project Estimation, Introduction to Fintech, Bitcoins and Blockchain"
      >
        <img
          style={{ objectFit: "cover", height: "100%" }}
          src="/images/finance.jpeg"
          alt="Finance"
        />
      </CourseBanner>
      <CourseTabSection
        courseLearn={[
          "Entrepreneurial mindset - opportunity recognition",
          "Creativity",
          "How to assess business opportunities and an in-depth understanding of what typically",
          "Characterizes successes and failures",
          "Key processes necessary to bring new products and services to market and key",
          "Challenges facing the entrepreneur at different stages",
          "Theories and methods",
        ]}
        courseCurriculumList={[
          "Project Valuation",
          "Introduction to Cost Accounting",
          "Cash Management in Enterprises",
          "Working Capital Management",
          "Project Estimation",
          "Introduction to Fintech",
          "Bitcoins and Blockchain",
        ]}
        courseSkillList={[
          "Management",
          "Organizing",
          "Financial",
          "People",
          "Market",
        ]}
        howItWorks={[
          "Go through each chapter at your own pace",
          "Take the sample test available after completing the chapter",
          "Go through the case studies included in the chapters",
          "Discuss with industry experts in the comment section if you have any questions",
          "Give your final test after you learn",
          "Earn the certificate if you score at least 50%",
          "If you don’t, you can retake the test",
        ]}
      />
      <GetConsultation />
    </Layout>
  );
};

export default Finance;
