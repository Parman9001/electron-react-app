import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { WindowContextProvider } from './components/window'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <WindowContextProvider>
      <App />
    </WindowContextProvider>
  </React.StrictMode>
)
