import React from 'react';
import { CSSProperties } from 'react';
import { createEmptyJsonFile } from '../fileUtils';

interface FloatingWindowStyle extends CSSProperties {
    position: 'fixed';
  }

const FloatingWindow: React.FC = () => {

const floatingWindowStyle: FloatingWindowStyle = {
  position: 'fixed',
  top: '50%',
  right: '20px',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  zIndex: 9999,
};

  return (
    <div style={floatingWindowStyle}>
      <h2>Floating Window</h2>
      <p>This is a floating window.</p>
      <button onClick={createEmptyJsonFile}>Create data.json</button>
    </div>
  );
};

export default FloatingWindow;