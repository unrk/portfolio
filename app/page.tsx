"use client";

import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import { projects, Project } from "./data/projects";
import Silk from "@/components/Silk";
import GradientText from "@/components/GradientText";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Silk Background */}
      <div className="fixed inset-0 z-0">
        <Silk speed={5} scale={0.4} color="#242e23ff" noiseIntensity={1.5} />
      </div>
      
      {/* Content Wrapper */}
      <div className="relative z-10">
        
        {/* Hero Section / Landing Page */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
          Welcome to my
          <span className="block"><GradientText>Portfolio</GradientText></span>
        </h1>
        <p className="mb-12 max-w-2xl text-lg text-zinc-50/70 sm:text-xl">
          My name is Félix, I love photography, design, web development and cybersecurity.
        </p>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-7xl">
            <h2
            className="mb-12 text-center text-4xl font-bold text-zinc-50"
            style={{ fontFamily: "Geist Sans, sans-serif" }}
            >
            Projects
            </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                onClick={() => setSelectedProject(project)}
                
              />
            ))}
          </div>
        </div>
      </section>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            description={selectedProject.description}
            longDescription={selectedProject.longDescription}
            images={selectedProject.images}
          />
        )}
      </div>
    </div>
  );
}
