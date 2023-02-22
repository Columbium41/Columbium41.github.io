import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProjectPage({ data, setDocumentTitle }) {
    const params = useParams();
    const projectTitle = params.id;
    const projectsList = Object.entries(data.content.portfolio.projects);
    const navigate = useNavigate();
    
    var projectData = '';
    
    for (const project of projectsList) {
        if (project[0] === projectTitle) {
            projectData = project[1];
        }
    }

    console.log(Object.entries(projectData.links));

    useEffect(() => {
        setDocumentTitle(projectTitle.replace("_", " "));
    }, [])

    return (
        <div className="project-page">
            <h3 className="back-to-projects" onClick={() => {navigate("/projects")}}>
                {'<'} Back to Projects
            </h3>

            <h2 className="align-center">{ projectTitle.replace("_", " ") }</h2>
            <div className="text-section">
                <p>{projectData.long_description}</p>
            </div>

            <div className="project-metadata-container">
                <div className="project-metadata">
                    <h4>Date Created:</h4>
                    <p>{ projectData.date_created }</p>
                </div>

                <div className="project-metadata topics-section">
                    <h4>Topics:</h4>
                    {projectData.topics.map((topic) => (
                        <p className="topic-item" key={topic}>{topic}</p>
                    ))}
                </div>

                {Object.entries(projectData.links).map((array, index) => (
                    <div className="project-metadata" key={index}>
                        <h4>{ array[0].replace("_", " ") + ":" }</h4>
                        <p>
                            <a href={ array[1] } target="_blank" >{ array[1] }</a>
                        </p>
                    </div>
                ))}
            </div>
                    
            {projectData.thumbnails.map((thumbnail, index) => (
                <img key={index} src={thumbnail} alt={"thumbnail " + index} className="project-thumbnail" />
            ))}
        </div>
    )
}

export default ProjectPage;