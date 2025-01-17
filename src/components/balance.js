import React , {useContext} from "react"
import { GlobalContext } from "./context/globalContext"

function Balance(){
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => (transaction.amount))
    const total = amounts.reduce((acc,cur)=>(acc+cur)).toFixed(2)


    return(
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>

        </div>
    )
}
export default Balance