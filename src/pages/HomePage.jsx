import HeroComponent from '../components/HeroComponent';
import AboutComponent from '../components/AboutComponent';
import SkillsComponent from '../components/SkillsComponent';
import ExperienceComponent from '../components/ExperienceComponent';
import ProjectsComponent from '../components/ProjectsComponent';

function HomePage() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <SkillsComponent />
      <ExperienceComponent />
      <ProjectsComponent />
    </>
  );
}

export default HomePage;