import React from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import { Projects } from "../constants/projects"; // adjust if your path/file name differs

export default function IndividualProject() {
  const { slug } = useParams();

  const project = Projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageContainer className="py-16">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-4 text-gray-600">
          Check the URL or pick a project from the Projects page.
        </p>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="py-16">
      <h1 className="text-3xl font-semibold">{project.name}</h1>
      <p className="mt-4 text-gray-600">{project.description}</p>
    </PageContainer>
  );
}