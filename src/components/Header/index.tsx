import { HeaderContainer, HeaderContent, NewTransaction } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';


import logoImage from '../../assets/Logo.svg'

export function Header(){
       return(
       <HeaderContainer>
              <HeaderContent>
                     <img src={logoImage}/>
                     <Dialog.Root>
                            <Dialog.Trigger asChild>
                                   <NewTransaction>Nova Transaçao</NewTransaction>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                   <Dialog.Overlay/>
                                   <Dialog.Content>
                                          <Dialog.Title>Nova transação</Dialog.Title>
                                          <Dialog.Close />
                                   </Dialog.Content>
                            </Dialog.Portal>
                     </Dialog.Root>
              </HeaderContent>
       </HeaderContainer>
       )
}