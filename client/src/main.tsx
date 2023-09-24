import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import i18n from './translation'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './store.ts'

axios.defaults.baseURL = 'http://localhost:8000'
// const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
          <Toaster position='top-right' reverseOrder={false} />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
    {/* </QueryClientProvider> */}
  </React.StrictMode>
)
