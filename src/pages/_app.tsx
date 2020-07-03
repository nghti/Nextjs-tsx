import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'

import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css'

import { wrapper } from '@/redux/store'
import DashboardLayout from '@/layouts/DashboardLayout'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <div>
      <ToastContainer />
      {router.pathname !== '/auth' ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  )
}

export default wrapper.withRedux(App)
