import React from "react";
import PageContainer from "./PageContainer";

export default function BlankPage({ title }) {
  return (
    <PageContainer className="py-16">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-4 text-gray-600">
        Blank page placeholder for the website revamp.
      </p>
    </PageContainer>
  );
}
