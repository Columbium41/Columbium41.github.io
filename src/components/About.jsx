import { Typewriter } from 'react-simple-typewriter';

function About() {
    const textOptions = [" Computer Science Student", " Aspiring Software Developer"];

    return (
        <div className="about">
            <div className="typewriter-container w-100">
                <span>{'>'} Hello, I am a</span>
                <span className="typewriter">
                    <Typewriter 
                        words={textOptions} 
                        cursor={true}
                        cursorBlinking={false}
                        loop={true}
                        typeSpeed={60}
                        deleteSpeed={40}
                    />
                </span>
            </div>

            <div className="profile w-100">
                <div>
                    <h1>Charley Liu</h1>
                    <p className="occupation">Computer Science Student</p>
                </div>
                <img src="/src/assets/headshot.jpeg" alt="headshot" className="headshot" />
            </div>
            
            <div className="text-section w-100">
                <h2 className="section-header">About Me</h2>
                <p>
                    Hello, my name is Charley. 
                    I'm a first-year undergrad student at the University of Ottawa with a passion for desigining software.
                    Currently, I'm pursuing a 5 year Computer Science co-op degree while also learning web development.
                    My hobbies include Music, Chess, Badminton, and Rhythm Games.
                    When I'm not doing academic work or enjoying leisure time, I like to work on fun and interesting projects.
                </p>
            </div>
        </div>
    );
}

export default About;