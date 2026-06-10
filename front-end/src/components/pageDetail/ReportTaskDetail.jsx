import { useEffect, useState } from 'react';
import { taskListDB } from '../services/memberApi';
import ReportTaskDetailRow from './ReportTaskDetailRow';
//import { Button, Modal } from 'react-bootstrap';
import { DefalultTable } from '../style/FormStyle';

const ReportTaskList = () => {
  const [reportTaskList, setReportTaskList] = useState([]);
  // 사용자 입력한 검색어 담기
  const [keyword, setKeyword] = useState('');
  const [searchType, setSearchType] = useState('');

  const [state, setState] = useState(0);
  const getTaskList = async () => {
    const projects = {
      searchType: searchType,
      keyword: keyword,
    };
    //console.log(members);
    const res = await taskListDB(projects);
    setReportTaskList(res);
    console.log(res);
  };

  useEffect(() => {
    //state가 변하면 getDeptList() 다시 호출됨.
    //0(초기값)-> 1 -> 2 -> 3
    getTaskList();
  }, [keyword, searchType, state]);

  const handleReset = () => {
    // 검색 초기화
    setKeyword('');
    setSearchType('');
  };

  const reactSearch = () => {
    console.log('reactSearch  호출');
    getTaskList();
  };

  return (
    <>
      <h1>프로젝트 상세 - ReportTaskDetail</h1>

      <table className='tg'>
        <thead>
          <tr>
            <th className='tg-c3ow'>순번</th>
            <th className='tg-c3ow'>자세한내용</th>
            <th className='tg-c3ow'>생성일</th>
            <th className='tg-c3ow'>링크URL</th>
            <th className='tg-c3ow'>첨부이미지</th>
            <th className='tg-c3ow'>이력시퀀스</th>
          </tr>
        </thead>
        <tbody>
          {reportTaskList.map((reportTask) => (
            <ReportTaskDetailRow
              key={reportTask.TASK_SEQ}
              reportTaskData={reportTask}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ReportTaskList;
