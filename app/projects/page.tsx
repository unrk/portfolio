"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects, Project } from "../data/projects";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-black select-none">
        {/* Header with back button */}
        <div className="fixed top-0 left-0 right-0 z-20 bg-black/50 backdrop-blur-sm border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link 
              href="/"
              className="text-zinc-50 hover:text-zinc-300 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-zinc-50">
              Projects
            </h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>

        {/* Projects Section */}
        <section className="min-h-screen px-6 py-20 pt-32">
          <div className="mx-auto max-w-7xl">
            <h2
              className="mb-12 text-center text-4xl font-bold text-zinc-50"
              style={{ fontFamily: "Geist Sans, sans-serif" }}
            >
              My Work
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
  );
}
