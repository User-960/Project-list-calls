import type { AppProps } from 'next/app'

import ListCallsProvider from '@/components/providers/ListCallsProvider'

import '@/assets/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ListCallsProvider>
			<Component {...pageProps} />
		</ListCallsProvider>
	)
}
