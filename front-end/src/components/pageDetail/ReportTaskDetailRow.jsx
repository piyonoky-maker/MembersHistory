import React from 'react';
import { Link } from 'react-router';

const ReportTaskDetailRow = ({ reportTaskData }) => {
  return (
    <>
      <tr>
        <td className='tg-c3ow'>{reportTaskData.TASK_SEQ}</td>
        <td className='tg-c3ow'>{reportTaskData.TASK_DETAIL}</td>
        <td className='tg-c3ow'>{reportTaskData.LINK_URL}</td>
        <td className='tg-c3ow'>{reportTaskData.ADD_FILE}</td>
        <td className='tg-c3ow'>{reportTaskData.CREATE_DATE}</td>
        <td className='tg-c3ow'>{reportTaskData.HISTORY_SEQ}</td>
      </tr>
    </>
  );
};

export default ReportTaskDetailRow;
