import React, { useState } from 'react';
import '../styles/Skills.css';

// Importiere deine Icons
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import jsLogo from '../assets/js-logo.png';
import reactLogo from '../assets/react-logo.png';
import phpLogo from '../assets/php-logo.png';
import javaLogo from '../assets/java-logo.png';
import pythonLogo from '../assets/python-logo.png';
import nodejsLogo from '../assets/node-logo.png';
import csharpLogo from '../assets/csharp-logo.png';
import mariaDBLogo from '../assets/mariadb-logo.png';
import mongoDBLogo from '../assets/mongo-logo.png';
import redisLogo from '../assets/redis-logo.png';
import mySQLLogo from '../assets/mysql-logo.png';
import sqlLiteLogo from '../assets/sqlite-logo.png';
import gitLogo from '../assets/git-logo.png';
import dockerLogo from '../assets/docker-logo.png';
import ciLogo from '../assets/ci-logo.png';
import awsLogo from '../assets/aws-logo.png';
import kubernetesLogo from '../assets/kubernetes-logo.png';
import terraformLogo from '../assets/terraform-logo.png';
import azureLogo from '../assets/azure-logo.png';

const Skills = () => {
  const [openSkill, setOpenSkill] = useState(null);

  const toggleSkill = (skill) => {
    setOpenSkill(openSkill === skill ? null : skill);
  };

  const averageKnowledge = {
    'frontend': 80,
    'backend': 75,
    'database': 70,
    'tools': 85,
  };

  const skillTexts = {
    'frontend': 'My front-end skills include HTML, CSS, and JavaScript, with a focus on building responsive and interactive user interfaces. I’m also skilled in using modern frameworks like React for dynamic web applications.',
    'backend': 'I have experience in development with PHP, Java, Python, Node.js. and some C#',
    'database': 'Im able to manage databases like MariaDB, MongoDB, Redis, MySQL, and SQLite, and I can design and optimize schemas and queries.',
    'tools': 'Im Skilled in using tools and technologies like Git for version control and Docker for containers. Experienced with cloud services such as AWS, Kubernetes, and Azure and more.',
  };

  return (
    <section id="skills" className="Skills">
      <h2>My Skills</h2>
      <p className="skills-intro">
      Take a look at my main IT skills. Each section shows my progress and expertise, 
      giving you a snapshot of what I know and how it fits into the overall picture.
              </p>
      <div className="skills-container">
        <div className="skills-row">
          <div className="skill-item" onClick={() => toggleSkill('frontend')}>
            <h3>Front-end Development</h3>
            {openSkill === 'frontend' && (
              <div className="skill-content">
                <div className="average-knowledge">
                  <h4>Average Knowledge</h4>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${averageKnowledge['frontend']}%` }}></div>
                  </div>
                  <p className="skill-text">{skillTexts['frontend']}</p>
                </div>
                <div className="skills-list">
                  <div className="skill">
                    <img src={htmlLogo} alt="HTML" className="skill-icon" />
                    <div className="skill-details">
                      <p>HTML</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={cssLogo} alt="CSS" className="skill-icon" />
                    <div className="skill-details">
                      <p>CSS</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={jsLogo} alt="JavaScript" className="skill-icon" />
                    <div className="skill-details">
                      <p>JavaScript</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={reactLogo} alt="React" className="skill-icon" />
                    <div className="skill-details">
                      <p>React</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="skill-item" onClick={() => toggleSkill('backend')}>
            <h3>Back-end Development</h3>
            {openSkill === 'backend' && (
              <div className="skill-content">
                <div className="average-knowledge">
                  <h4>Average Knowledge</h4>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${averageKnowledge['backend']}%` }}></div>
                  </div>
                  <p className="skill-text">{skillTexts['backend']}</p>
                </div>
                <div className="skills-list">
                  <div className="skill">
                    <img src={phpLogo} alt="PHP" className="skill-icon" />
                    <div className="skill-details">
                      <p>PHP</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={javaLogo} alt="Java" className="skill-icon" />
                    <div className="skill-details">
                      <p>Java</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={pythonLogo} alt="Python" className="skill-icon" />
                    <div className="skill-details">
                      <p>Python</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={nodejsLogo} alt="Node.js" className="skill-icon" />
                    <div className="skill-details">
                      <p>Node.js</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={csharpLogo} alt="C#" className="skill-icon" />
                    <div className="skill-details">
                      <p>C#</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="skills-row">
          <div className="skill-item" onClick={() => toggleSkill('database')}>
            <h3>Database Management</h3>
            {openSkill === 'database' && (
              <div className="skill-content">
                <div className="average-knowledge">
                  <h4>Average Knowledge</h4>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${averageKnowledge['database']}%` }}></div>
                  </div>
                  <p className="skill-text">{skillTexts['database']}</p>
                </div>
                <div className="skills-list">
                  <div className="skill">
                    <img src={mariaDBLogo} alt="MariaDB" className="skill-icon" />
                    <div className="skill-details">
                      <p>MariaDB</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={mongoDBLogo} alt="MongoDB" className="skill-icon" />
                    <div className="skill-details">
                      <p>MongoDB</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={redisLogo} alt="Redis" className="skill-icon" />
                    <div className="skill-details">
                      <p>Redis</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={mySQLLogo} alt="MySQL" className="skill-icon" />
                    <div className="skill-details">
                      <p>MySQL</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={sqlLiteLogo} alt="SQLite" className="skill-icon" />
                    <div className="skill-details">
                      <p>SQLite</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="skill-item" onClick={() => toggleSkill('tools')}>
            <h3>Tools & Technologies</h3>
            {openSkill === 'tools' && (
              <div className="skill-content">
                <div className="average-knowledge">
                  <h4>Average Knowledge</h4>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${averageKnowledge['tools']}%` }}></div>
                  </div>
                  <p className="skill-text">{skillTexts['tools']}</p>
                </div>
                <div className="skills-list">
                  <div className="skill">
                    <img src={gitLogo} alt="Git" className="skill-icon" />
                    <div className="skill-details">
                      <p>Git</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={dockerLogo} alt="Docker" className="skill-icon" />
                    <div className="skill-details">
                      <p>Docker</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={ciLogo} alt="CI/CD" className="skill-icon" />
                    <div className="skill-details">
                      <p>CI/CD</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={awsLogo} alt="AWS" className="skill-icon" />
                    <div className="skill-details">
                      <p>AWS</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={kubernetesLogo} alt="Kubernetes" className="skill-icon" />
                    <div className="skill-details">
                      <p>Kubernetes</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={terraformLogo} alt="Terraform" className="skill-icon" />
                    <div className="skill-details">
                      <p>Terraform</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill">
                    <img src={azureLogo} alt="Azure" className="skill-icon" />
                    <div className="skill-details">
                      <p>Azure</p>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
