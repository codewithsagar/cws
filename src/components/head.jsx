import React from "react";
import { Helmet } from "react-helmet";
export default (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />

      <title>
        {props.title ? `Sagar Jasani | ${props.title}` : "Sagar Jasani"}
      </title>

      <meta name="description" content={`${props.dis}`} />
      <meta name="keywords" content={props.keyword} />
      <meta
        property="og:title"
        content="Sagar Jasani - Developer, Designer & Professor"
      />
      <meta property="og:locale" content="uk_ua" />
      <meta property="og:url" content="https://codewithsagar.com/" />
      <meta property="og:type" content="Website" />
      <meta
        property="og:description"
        content="Sagar Jasani - Developer, Designer & Professor"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Muli:300,400,600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
        rel="stylesheet"
      />
    </Helmet>
  );
};
