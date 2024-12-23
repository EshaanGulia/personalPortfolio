import React from 'react';

const Project: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>My Projects</h1>
      <p>Here are some of my projects and a link to download my resume:</p>

   
      <a
  href="/resume.pdf"
  download
  style={{
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'transform 0.2s, background-color 0.3s',
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
>
  Download My Resume
</a>

    </div>
  );
};

export default Project;
