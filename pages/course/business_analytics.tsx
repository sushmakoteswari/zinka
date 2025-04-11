import CourseBanner from "../../components/Course/CourseBanner";
import GetConsultation from "../../components/GetConsultation";
import Layout from "../../components/Layout";
import CourseTabSection from "../../components/Course/CourseTabSection";
import SEO from "../../components/SEO";

const BusinessAnalytics = () => {
  return (
    <Layout>
      <SEO title="Business Analytics" />
      <CourseBanner
        enrollCount={137}
        price="5 hours INR 2,000"
        heading="Business Analytics"
        description="Statistics for Analytics, Data Warehousing, Marketing Metrics, Business Performance and Evaluation using Analytics, Predictive Modeling and Pattern Discovery, Decision and Risk Analysis, Business Forecasting, Data Visualization"
      >
        <img
          style={{ objectFit: "cover", height: "100%" }}
          src="/images/businessAnalytics2.jpeg"
          alt="Business Analytics"
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
          "How and where data is used",
          "Data driven decision making",
          "Applied business analytics",
          "Tools in predictive modelling",
        ]}
        courseCurriculumList={[
          "Statistics for Analytics",
          "Data Warehousing",
          "Marketing Metrics",
          "Business Performance and Evaluation using Analytics",
          "Predictive Modeling and Pattern Discovery",
          "Decision and Risk Analysis",
          "Business Forecasting",
          "Data Visualization",
        ]}
        courseSkillList={[
          "Visualization",
          "Critical Thinking",
          "Statistical Tools",
          "Problem Solving",
        ]}
      />
      <GetConsultation />
    </Layout>
  );
};

export default BusinessAnalytics;
