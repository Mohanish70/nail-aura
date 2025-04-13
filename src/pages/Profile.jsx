
import React from 'react';

const Profile = () => {
  return (
    <div style={styles.container}>
      <h1>Your Profile</h1>
      <p>This is your personal space. You can view or edit your information here.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default Profile; 
