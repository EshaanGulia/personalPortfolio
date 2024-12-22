import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding: '2rem', borderBottom: '1px solid #ddd' }}>
      <h2>Contact Me</h2>
      <p>
        Email: <a href="mailto:guliaeshaan@gmail.com">guliaeshaan@gmail.com</a>
      </p>
      <p>
        LinkedIn: <a href="https://linkedin.com/in/eshaangulia" target="_blank" rel="noopener noreferrer">linkedin.com/in/eshaangulia</a>
      </p>
      <p>
        GitHub: <a href="https://github.com/eshaangulia" target="_blank" rel="noopener noreferrer">github.com/eshaangulia</a>
      </p>
    </section>
  );
};

export default Contact;
