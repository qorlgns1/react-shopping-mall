import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App';
import { AppFixedWrap, GlobalStyle, StyledToastContainer } from './style';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <AppFixedWrap>
            <App />
            <StyledToastContainer />
          </AppFixedWrap>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </BrowserRouter>
  </>,
);
