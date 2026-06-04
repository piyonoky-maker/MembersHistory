import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginUser } from '../services/memberApi';

const HomePageDetail = () => {
  const navigate = useNavigate();
  const [loginId, setloginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    //reactSearch(e);

    try {
      const isLogin = ((await loginUser({ memId: loginId, memPass: password }))[0].MEM_SEQ);

      if (isLogin) {
        navigate('/ReportMemInfo');
      }
    } catch (error) {
      console.error('로그인 실패', error);
      alert('해당 회원이 존재 하지 않습니다');
    }
  };

  const handleSetLoginId = (value) => {
    setloginId(value);
  };

  const handleSetPassword = (value) => {
    setPassword(value);
  };

  /* 
    value={loginId}:  111 
    value={password}: 111  
  */

  return (
    <>
      아이디
      <input
        name='mem_id'
        placeholder='아이디를 입력해주세요'
        value={loginId}
        onChange={(e) => handleSetLoginId(e.target.value)}
      />
      <br />
      비밀번호{' '}
      <input
        name='mem_pass'
        placeholder='비밀번호를 입력해주세요'
        value={password}
        onChange={(e) => handleSetPassword(e.target.value)}
      />
      <br />
      <button type='submit' onClick={handleLogin}>
        로그인
      </button>
    </>
  );
};
export default HomePageDetail;
