import React from "react";
import CourseBanner from "../../components/Course/CourseBanner";
import GetConsultation from "../../components/GetConsultation";
import Layout from "../../components/Layout";
import CourseTabSection from "../../components/Course/CourseTabSection";
import SEO from "../../components/SEO";

const Entrepreneurship = () => {
  return (
    <Layout>
      <SEO title="Entrepreneurship" />
      <CourseBanner
        enrollCount={178}
        heading="Entrepreneurship"
        price="5 Hours INR 2,000"
        description="Starting your business, Forms of Ownership, Planning, Organising and Managing, Financing, Developing Marketing Strategies, Promotion and Distribution, Managing Human Resources, Making business plans"
      >
        <img
          style={{ objectFit: "cover", height: "100%" }}
          src="/images/Entrepreneurship.jpeg"
          alt="Entrepreneurship"
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
          "Entrepreneurial mindset - opportunity recognition",
          "Creativity",
          "How to assess business opportunities and an in-depth understanding of what typically",
          "Characterizes successes and failures",
          "Key processes necessary to bring new products and services to market and key",
          "Challenges facing the entrepreneur at different stages",
          "Theories and methods",
        ]}
        courseCurriculumList={[
          "Starting your business",
          "Forms of Ownership",
          "Planning, Organising and Managing",
          "Financing",
          "Developing Marketing Strategies",
          "Promotion and Distribution",
          "Managing Human Resources",
          "Making business plans",
        ]}
        courseSkillList={[
          "Management",
          "Organising",
          "Financial",
          "People",
          "Market",
        ]}
      />
      <GetConsultation />
    </Layout>
  );
};

export default Entrepreneurship;
