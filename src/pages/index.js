import React from "react";
import "../components/sass/main.scss";
import { useLocalJsonForm, useGlobalJsonForm } from "gatsby-tinacms-json";
import { useStaticQuery, graphql } from "gatsby";
import Head from "../components/head";
import Hero from "../components/section/hero";
import ProjectNumber from "../components/section/projectNumber";
import Is1 from "../components/section/is1";
import Clients from "../components/section/clients";
import Testi from "../components/section/testi";
import Footer from "../components/footer";
import Portfolio from "../components/section/portfolio";
export default () => {
  const data = useStaticQuery(graphql`
    query mainQuery {
      dataJson(section: { eq: "data" }) {
        global {
          name
          mobile
          mail
          instagram
          facebook
          behance
        }
        hero {
          heroTagline
        }
        sectionOne {
          is1Text
          secondTagline
        }
        projectNumber {
          projects
          clients
          experience
        }
        testimonial {
          company
          name
          testi
          id
        }
        footer {
          quote
        }
        fileRelativePath
        rawJson
      }
    }
  `);

  const [newData] = useLocalJsonForm(data.dataJson, {
    label: "Edit Info",
    fields: [
      {
        name: "rawJson.global",
        label: "Global",
        description: "Common across website",
        component: "group",
        fields: [
          {
            name: "name",
            label: "name",
            component: "text",
          },
          {
            name: "mobile",
            label: "Mobile Number",
            component: "text",
          },
          {
            name: "mail",
            label: "Email ID",
            component: "text",
          },
          {
            name: "facebook",
            label: "Facebook ID",
            component: "text",
          },
          {
            name: "instagram",
            label: "Instagram ID",
            component: "text",
          },
          {
            name: "behance",
            label: "Behance ID",
            component: "text",
          },
        ],
      },
      {
        name: "rawJson.hero",
        label: "Hero",
        description: "First section",
        component: "group",
        fields: [
          {
            name: "heroTagline",
            label: "Tagline",
            component: "text",
          },
        ],
      },
      {
        name: "rawJson.sectionOne",
        label: "About me",
        description: "About section",
        component: "group",
        fields: [
          {
            name: "secondTagline",
            label: "Tagline",
            component: "text",
          },
          {
            name: "is1Text",
            label: "Description",
            component: "text",
          },
        ],
      },
      {
        name: "rawJson.projectNumber",
        label: "Work Details",
        description: "About section",
        component: "group",
        fields: [
          {
            name: "projects",
            label: "Projects",
            component: "number",
          },
          {
            name: "clients",
            label: "Clients",
            component: "number",
          },
          {
            name: "experience",
            label: "Experience",
            component: "number",
          },
        ],
      },
      {
        label: "Testimonial",
        name: "rawJson.testimonial",
        component: "group-list",
        description: "Testimonial",
        itemProps: (item) => ({
          key: item.id,
          label: item.name,
        }),
        fields: [
          {
            label: "Name",
            name: "name",
            component: "text",
          },
          {
            label: "company",
            name: "company",
            component: "text",
          },
          {
            label: "testi",
            name: "testi",
            component: "text",
          },
        ],
      },
      {
        name: "rawJson.footer",
        label: "Footer",
        description: "Footer",
        component: "group",
        fields: [
          {
            name: "quote",
            label: "Quote",
            component: "text",
          },
        ],
      },
    ],
  });
  // console.log(newData);
  return (
    <>
      <Head dis="Designer, Developer & Professor - I design and code beautifully simple things, and I love what I do. Since beginning my journey as a freelance Developer...." />
      <Hero name={newData.global.name} heroTagline={newData.hero.heroTagline} />
      <Is1
        name={newData.global.name}
        secondTagline={newData.sectionOne.secondTagline}
        text={newData.sectionOne.is1Text}
        mobile={newData.global.mobile}
      />
      <ProjectNumber projectNumber={newData.projectNumber} />
      <Portfolio />
      <Testi testi={newData.testimonial} />
      <Clients />
      <Footer global={newData.global} quote={newData.footer.quote} />
    </>
  );
};
