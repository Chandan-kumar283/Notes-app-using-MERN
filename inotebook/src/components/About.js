import React, { useContext, useEffect } from 'react';
import UserContext from '../userContext';

const About = () => {
  const { user, getuser } = useContext(UserContext);

    useEffect(() => {
        getuser();
        //eslint-disable-next-line
    }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <h2 className="text-center mb-4">Thank You <b> {user.name}</b> for Choosing us </h2>
          <p>
            Welcome to your ultimate note-taking companion! Our website is designed to simplify your note management process, allowing you to seamlessly create, view, update, and organize your notes. Whether you're jotting down ideas, planning tasks, or keeping track of important information, our platform has got you covered with powerful features to enhance your productivity.
          </p>
          <h4>Key Features:</h4>
          <ul>
            <li><strong>Create Notes:</strong> Effortlessly create notes with a user-friendly interface. Provide a descriptive title, detailed content, and tags to categorize your notes for better organization.</li>
            <li><strong>View Notes:</strong> Quickly access all your notes in one place. Search and filter by title, tags, or creation date for faster retrieval.</li>
            <li><strong>Update Notes:</strong> Need to make changes? Edit the title, content, or tags of your notes anytime to keep them up-to-date.</li>
            <li><strong>Delete Notes:</strong> Declutter your workspace by deleting notes you no longer need, ensuring a clean and organized note repository.</li>
            <li><strong>Track Creation Dates:</strong> Every note is timestamped to help you track when it was created, making it easier to reference and prioritize.</li>
            <li><strong>Tags for Organization:</strong> Use tags to group similar notes, making it easy to find related information when you need it.</li>
            <li><strong>Responsive Design:</strong> Enjoy a smooth experience on any device, whether you're using a desktop, tablet, or smartphone.</li>
          </ul>
          <p>
            Our note-taking website is the perfect solution for students, professionals, and anyone looking for a reliable tool to organize their thoughts and tasks. Start managing your notes efficiently today!
          </p>
          </div>
      </div>
    </div>
  );
};

export default About;
