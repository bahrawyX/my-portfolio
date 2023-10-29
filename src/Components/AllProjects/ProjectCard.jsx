import React from 'react'
import styles from './Allprojects.module.css'; // Import your CSS

function ProjectCard({ imgSrc, apps, title, description, liveLink }) {
return <>


<div className={styles.Card}>
          <img src={imgSrc} alt={title} />
          <div className={styles.Apps}>
            <ul>
              {apps.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </div>
          <div className={styles.Desc}>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className={`up ${styles.Button}`}>
              <a href={liveLink} target="_blank">
                Live -&gt;
              </a>
            </div>
          </div>
        </div>
        </>
        
      
}

export default ProjectCard