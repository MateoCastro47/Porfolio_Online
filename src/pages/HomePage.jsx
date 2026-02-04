import HeroComponent from '../components/HeroComponent';
import AboutComponent from '../components/AboutComponent';
import SkillsComponent from '../components/SkillsComponent';
import ProjectsComponent from '../components/ProjectsComponent';

function HomePage() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <SkillsComponent />
      <ProjectsComponent />
    </>
  );
}

export default HomePage;