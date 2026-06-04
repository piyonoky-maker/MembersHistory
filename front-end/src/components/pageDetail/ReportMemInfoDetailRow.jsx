import React from 'react';
import { Link } from 'react-router';

const ReportMemInfoDetailRow = ({ reportMemInfoData }) => {
  return (
    <>
      <tr>
        <td className='tg-c3ow'>{reportMemInfoData.MEM_SEQ}</td>
        <td className='tg-c3ow'>{reportMemInfoData.MEM_ID}</td>
        <td className='tg-c3ow'>{reportMemInfoData.MEM_NAME}</td>
        <td className='tg-c3ow'>{reportMemInfoData.MEM_TEL}</td>
        <td className='tg-c3ow'>{reportMemInfoData.CREATE_DATE}</td>
        <td className='tg-c3ow'>
          <Link to={'/ReportMyHistory?historySeq=' + reportMemInfoData.MEM_SEQ}>
            보러가기
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ReportMemInfoDetailRow;
