import AboutMeSection from './Sections/AboutMeSection';
import HeroSection from './Sections/HeroSection'
import ProjectSection from './Sections/ProjectsSection';
import ResumeSection from './Sections/ResumeSection';
import ContactSection from './Sections/ContactSection';

export default function MainPage() {
    return (
        <div className="col parent-div">
            <HeroSection/>
            <div style={{minHeight: '15vh'}}></div>

            <AboutMeSection/>

            <div style={{minHeight: '15vh'}}></div>

            <ProjectSection/>

            <div style={{minHeight: '15vh'}}></div>

            <ResumeSection/>

            <div style={{minHeight: '15vh'}}></div>

            <ContactSection/>
        </div>
    );
}