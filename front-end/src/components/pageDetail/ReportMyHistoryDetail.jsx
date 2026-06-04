import { useEffect, useState } from 'react';
import { projectListDB } from '../services/memberApi';
import ReportMyHistoryDetailRow from './ReportMyHistoryDetailRow';
import { DefalultTable } from '../style/FormStyle';

const ReportMyHistoryList = () => {
  const [reportMyHistoryList, setReportMyHistoryList] = useState([]);
  // 사용자 입력한 검색어 담기
  const [keyword, setKeyword] = useState('');
  const [searchType, setSearchType] = useState('');

  const [state, setState] = useState(0);
  const getProjectList = async () => {
    const projects = {
      searchType: searchType,
      keyword: keyword,
    };
    //console.log(members);
    const res = await projectListDB(projects);
    setReportMyHistoryList(res);
    console.log(res);
  };

  useEffect(() => {
    //state가 변하면 getDeptList() 다시 호출됨.
    //0(초기값)-> 1 -> 2 -> 3
    getProjectList();
  }, [keyword, searchType, state]);

  const handleReset = () => {
    // 검색 초기화
    setKeyword('');
    setSearchType('');
  };

  const reactSearch = () => {
    console.log('reactSearch  호출');
    getProjectList();
  };

  return (
    <>
      <h1>프로젝트 리스트</h1>

      <div className='row'>
        <div className='col-3'>
          <select
            id='searchType'
            name='searchType'
            onChange={(event) => {
              setSearchType(event.target.value);
            }} //deptno, dname, loc
            className='form-select'
            aria-label='분류선택'
            value={searchType}
          >
            <option value=''>분류선택</option>
            <option value='memId'>회원아이디</option>
            <option value='memName'>회원이름</option>
            <option value='memTel'>연락처</option>
          </select>
        </div>
        <div className='col-6'>
          <input
            type='text'
            id='keyword'
            name='keyword'
            className='form-control'
            placeholder='검색어를 입력하세요'
            onChange={(event) => {
              setKeyword(event.target.value);
            }}
            aria-label='검색어를 입력하세요'
            aria-describedby='btn_search'
            value={keyword}
          />
        </div>
        <div className='col-3'>
          <button
            className='btn btn-danger'
            id='btn_search'
            onClick={reactSearch}
          >
            검색
          </button>
          &nbsp;
          <button className='btn btn-dark' onClick={handleReset}>
            초기화
          </button>
        </div>
      </div>

      <table className='tg'>
        <thead>
          <tr>
            <th className='tg-c3ow'>순번</th>
            <th className='tg-c3ow'>회사명</th>
            <th className='tg-c3ow'>회사전화번호</th>
            <th className='tg-c3ow'>시작일 종료일</th>
            <th className='tg-c3ow'>가입일</th>
            <th className='tg-c3ow'>회원번호</th>
          </tr>
        </thead>
        <tbody>
          {reportMyHistoryList.map((reportMemInfo) => (
            <ReportMyHistoryDetailRow
              key={reportMemInfo.HISTORY_SEQ}
              reportMyHistoryData={reportMemInfo}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ReportMyHistoryList;
