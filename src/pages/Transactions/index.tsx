import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";



export function Transaction() {

  const {transaction} = useContext(TransactionContext);

  return (
    <div>
      <Header />
      <Summary />

     <TransactionContainer>
        <SearchForm />
        <TransactionTable>
        <tbody>
          {transaction.map(transaction =>{
            return(
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td><PriceHighlight variant={transaction.type}>{transaction.price}</PriceHighlight></td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
          </tr>
            ) 
          })}
        </tbody>
      </TransactionTable>
     </TransactionContainer>
    </div>
  );
}
