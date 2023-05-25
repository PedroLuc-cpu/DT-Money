import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

interface Transaction{
  id:number;
  description:string;
  type: 'income'|'outcome';
  price:number;
  category:string;
  createdAt: string
}

export function Transaction() {
    const [transaction, setTransaction] = useState<Transaction[]>([])

    async function loadTransaction(){
       const response = await fetch('http://localhost:3000/transations');
       const data = await response.json();
       console.log(data);
       setTransaction(data);
    }
    useEffect(() =>{loadTransaction()},[])

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
