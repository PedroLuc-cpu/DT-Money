import { HeaderContainer, HeaderContent, NewTransaction } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImage from '../../assets/Logo.svg'
import { NewTransactionsModal } from '../NewTransactionsModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransaction>Nova Transaçao</NewTransaction>
          </Dialog.Trigger>
          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
