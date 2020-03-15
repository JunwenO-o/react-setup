import React from 'react';
import { useParams } from 'react-router-dom';

const Report = ({ children }) => {
  const { id } = useParams();
  return (
    <div>
      this is Reports page id:
      {' '}
      {id}
      {children}
    </div>
  );
};

export default Report;
