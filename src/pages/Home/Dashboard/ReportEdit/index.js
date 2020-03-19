import React from 'react';
import { useParams } from 'react-router-dom';

const ReportEdit = ({ children }) => {
  const { id } = useParams();
  return (
    <div>
      this is Reports Edit page
      {' '}
      {id}
      {children}
    </div>
  );
};

export default ReportEdit;
