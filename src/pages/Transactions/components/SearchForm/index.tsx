import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as Z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const seachFormSchema = Z.object({
       query: Z.string()
})

type SearchFormInput = Z.infer<typeof seachFormSchema>

export function SearchForm(){
       const {
       register,
       handleSubmit,
       formState:{
       isSubmitting,
       }} = useForm<SearchFormInput>({
              resolver: zodResolver(seachFormSchema)
       })

       async function handleSearchTransitions(data : SearchFormInput){
         await new Promise(resolver => setTimeout(resolver, 4000))
         console.log(data)     
       }
return(
       <SearchFormContainer onSubmit={handleSubmit(handleSearchTransitions)}>
              <input 
              type="text" 
              placeholder="Busque por transações"
              {...register('query')} 
              />
              <button type="submit" disabled={isSubmitting}>
              Buscar
              <MagnifyingGlass size={20}/>
              </button>
       </SearchFormContainer>
)
}