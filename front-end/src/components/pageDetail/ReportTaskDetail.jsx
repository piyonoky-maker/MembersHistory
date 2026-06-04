import React from 'react';

const DD = () => {
  return (
    <>
      <h1>프로젝트 상세</h1>

      <table className='tg'>
        <thead>
          <tr>
            <th className='tg-c3ow'>순번</th>
            <th className='tg-c3ow'>플젝이름</th>
            <th className='tg-c3ow'>구분</th>
            <th className='tg-c3ow'>근무기간</th>
            <th className='tg-c3ow'>할당업무</th>
            <th className='tg-c3ow'>첨부파일</th>
            <th className='tg-c3ow'>링크경로</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tg-c3ow'>1</td>
            <td className='tg-c3ow'>운영</td>
            <td className='tg-c3ow'>AAAA</td>
            <td className='tg-c3ow'>1999-05~1111 - 1111-01-01</td>
            <td className='tg-c3ow'>할당업무</td>
            <td className='tg-c3ow'></td>
            <td className='tg-c3ow'></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default DD;
