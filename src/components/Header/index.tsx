import { HeaderContainer, HeaderContent, NewTransaction } from "./styles";

import logoImage from '../../assets/Logo.svg'

export function Header(){
       return(
       <HeaderContainer>
              <HeaderContent>
                     <img src={logoImage}/>
                     <NewTransaction>Nova Transaçao</NewTransaction>
              </HeaderContent>
       </HeaderContainer>
       )
}