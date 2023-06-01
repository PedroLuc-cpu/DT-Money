import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './style';
import { ArrowCircleUp, ArrowULeftDown, X } from 'phosphor-react';
import * as Z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const newTransactionModalSchema = Z.object({
       description : Z.string(),
       price: Z.number(),
       category: Z.string(),
       type: Z.enum(['income', 'outcome']),
       
})

type newTransactionFormInputs = Z.infer<typeof newTransactionModalSchema>



export function NewTransactionsModal() {
       
       const {
              control,
              register,
              handleSubmit,
              formState:{
                     isSubmitting
              }
       } = useForm<newTransactionFormInputs>({
              resolver: zodResolver(newTransactionModalSchema),
              defaultValues:{
                     type:'income'
              }                      
       })
       
       async  function handleCreateNewTransaction(data: newTransactionFormInputs){
              await new Promise(resolver => setTimeout(resolver, 5000))
              console.log(data)
       }
       
       return (
              <Dialog.Portal>
              <Overlay />
              <Content>
              <Dialog.Title>Nova transação</Dialog.Title>
              <CloseButton asChild>
              <X size={24}/>
              </CloseButton>
              <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
              <input 
              type="text" 
              placeholder='Descrição' 
              required
              {...register('description')}
              />
              <input 
              type="number" 
              placeholder='Preço' 
              required
              {...register('price',{valueAsNumber:true})}
              />
              <input 
              type="text" 
              placeholder='Categoria' 
              required
              {...register('category')}
              />
              
              <Controller 
              control={control}
              name='type'
              render={({field}) => {
                     return(
                            <TransactionType onValueChange={field.onChange} value={field.value}>
                            <TransactionTypeButton variant='income' value='income'>
                            <ArrowCircleUp size={24} />
                            Entrada
                            </TransactionTypeButton>
                            
                            <TransactionTypeButton variant='outcome' value='outcome'>
                            <ArrowULeftDown size={24} />
                            Saída
                            </TransactionTypeButton>
                            </TransactionType>
                            )
                     }}
                     />
                     
                     
                     
                     <button type='submit' disabled={isSubmitting}>
                     Cadastrar
                     </button>
                     </form>
                     </Content>
                     </Dialog.Portal>
                     )
              }