import { useEffect } from 'react'
import './App.css'
import { Pages } from './layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'
import { Provider } from 'react-redux'
import store from './store/Store'
import { oAuthRequest } from './api/oauth.api'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      // после подключения сервера раскомментировать const url = `http://localhost:${__SERVER_PORT__}`
      const url = `http://localhost`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
    oAuthRequest()
  }, [])

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            Вот тут будет жить ваше приложение :)
            <Pages />
          </div>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
