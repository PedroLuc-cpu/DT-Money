import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Transaction } from './pages/Transactions'
import { TransactionProvider } from './contexts/TransactionsContext'

export function App() {
return (
       <ThemeProvider theme={defaultTheme}>
       <GlobalStyle />
       <TransactionProvider>
       <Transaction />
       </TransactionProvider>
       </ThemeProvider>
)
}
