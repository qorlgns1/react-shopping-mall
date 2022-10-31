import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppFixedWrap, GlobalStyle, StyledToastContainer } from './style';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AppFixedWrap>
            <App />
            <StyledToastContainer />
          </AppFixedWrap>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  </>,
);
