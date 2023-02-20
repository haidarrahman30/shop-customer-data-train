import 'antd/dist/reset.css';
import type { AppProps } from 'next/app'
import {ConfigProvider }from 'antd'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        components:{
          Menu:{
            colorItemBgHover:'#166088',
            colorItemTextHover:'#DBE9EE',
            colorItemBgSelected:'#166088',
            colorItemTextSelected:'#DBE9EE'
          }
        }
      }}
    >

      <Component {...pageProps} />
    </ConfigProvider>
  )
}
