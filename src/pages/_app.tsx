import RootLayout from '@/components/RootLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Provider} from 'react-redux';
import { store } from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className='font-bodyFont bg-gray-200'>
    <Provider store={store}>
     <RootLayout>
      <Component {...pageProps} />
     </RootLayout>
    </Provider>
   </div>
     )
}
