// <React.Fragment>를 사용하기 위해 'import React from 'react';'는 필요합니다.
import React from 'react';

// 우리가 만든 BasicPagination 컴포넌트를 불러옵니다.
import BasicPagination from './BasicPagination';
// MUI의 전역 CSS 초기화를 위해 CssBaseline을 불러옵니다.
import CssBaseline from '@mui/material/CssBaseline';

// 기본 Vite 템플릿의 CSS 파일은 이제 필요 없으므로 삭제하거나 import하지 않아도 됩니다.
// import './index.css'; 또는 import './App.css';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>세진님의 웹 페이지</h1>
                <p>MUI BasicPagination 컴포넌트:</p>
                <BasicPagination />
                <p style={{ marginTop: '30px' }}>
                    이제 이 안에서 웹을 만들어나가시면 됩니다!
                </p>
            </div>
        </React.Fragment>
    );
}

export default App;
