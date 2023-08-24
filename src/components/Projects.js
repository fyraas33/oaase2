import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';


export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="project" id="project">
       <div className="card-container">
      <ProjectCard
        title={t('banner.WebApp')}
        content={t('banner.card1p')}
        icon="desktop" 
      />
      <ProjectCard
        title={t('banner.Digital')}
        content={t('banner.card2p')}
        icon="rocket" 
      />
      <ProjectCard
        title={t('banner.Marketing')}
        content={t('banner.card3p')}
        icon="chart" 
      />
    </div>
    
    </section>
  )
}
