import { useState } from "react";
import { PROJECTS, type Project } from "../../../data/projects";
import { Lightbox } from "../../../components/common/Lightbox/Lightbox";
import type { LightboxItem } from "../../../components/common/Lightbox/Lightbox.types";
import "./ProjectsSection.css";

export function ProjectsSection() {
  const [lightboxItem, setLightboxItem] = useState<LightboxItem>(null);

  const { title, payload } = PROJECTS;

  const openLightbox = (project: Project) => {
    setLightboxItem({
      id: project.id,
      media: project.media,
      title: project.title,
    });
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">{title}</h2>

        <div className="projects-grid">
          {payload.map((project) => {
            const firstMedia = project.media[0];

            return (
              <div key={project.id} className="project-card">
                <button
                  type="button"
                  className="project-image"
                  onClick={() => openLightbox(project)}
                  aria-label={`${project.title} önizlemesini aç`}
                >
                  <img src={project.thumbnail} alt={project.title} />

                  {firstMedia?.type === "video" && (
                    <span className="play-badge">▶</span>
                  )}
                </button>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={
                          "project-tag" + (tag.special ? " special" : "")
                        }
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={link.iconClass}></i>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Lightbox
          key={lightboxItem?.id ?? "closed"}
          item={lightboxItem}
          onClose={closeLightbox}
        />
      </div>
    </section>
  );
}
