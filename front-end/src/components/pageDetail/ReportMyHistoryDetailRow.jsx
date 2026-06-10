import React from 'react';
import { Link } from 'react-router';

const ReportMyHistoryDetailRow = ({ reportMyHistoryData }) => {
  return (
    <>
      <tr>
        <td className='tg-c3ow'>{reportMyHistoryData.HISTORY_SEQ}</td>
        <td className='tg-c3ow'>{reportMyHistoryData.COMPANY_NAME}</td>
        <td className='tg-c3ow'>{reportMyHistoryData.COMPANY_TEL}</td>
        <td className='tg-c3ow'>{reportMyHistoryData.FROM_TO}</td>
        <td className='tg-c3ow'>{reportMyHistoryData.CREATE_DATE}</td>
        <td className='tg-c3ow'>{reportMyHistoryData.MEM_SEQ}</td>
        <td className='tg-c3ow'>
          <Link to={'/ReportTask?taskSeq=' + reportMyHistoryData.MEM_SEQ}>
            보러가기
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ReportMyHistoryDetailRow;
