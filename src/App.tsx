import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Transaction } from './pages/Transactions'

export function App() {
return (
       <ThemeProvider theme={defaultTheme}>
       <GlobalStyle />

       <Transaction />
       </ThemeProvider>
)
}
