import { Outlet } from 'react-router';

const CommonLayout = () => {
  return (
    <>
      <h1>Outlet을 알아보자</h1>
      <article>
        <Outlet /> {/**자식 컴포넌트가 렌더링될 위치를 Outlet 으로 지정 */}
      </article>
    </>
  );
};

export default CommonLayout;
