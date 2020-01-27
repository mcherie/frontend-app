export function formatAmount(amount, isCAD = false) {

  if (!amount) return "-";

  if (isCAD) {
    return amount.toLocaleString('en-CA', {
      currency: 'CAD',
      style: 'currency'
    });
  }

  return amount.toLocaleString('en-US', {
    currency: 'USD',
    style: 'currency'
  });
}

export function filterRow(row, query){
  let i = 0
  query = query.toLowerCase();

  // console.log("date ", (new Date(row.time).toLocaleDateString().includes(query)))
  // console.log("amount_cad ", row.amount_cad, String(row.amount_cad).includes(query))
  // console.log("amount ", row.amount, String(row.amount).includes(query))
  // console.log("account_balance ", row.account_balance, String(row.account_balance).includes(query))

  // return true
  return ((new Date(row.time).toLocaleDateString().includes(query)) ||
  (String(row.amount_cad).includes(query))||
  (String(row.amount).includes(query)) ||
  (String(row.account_balance).includes(query)) ||
  (row.description.toLowerCase().includes(query)) ||  (row.investment_name.toLowerCase().includes(query)))



  

  // for (i; i< tableHeaders.length; i++){
  //     let key = tableHeaders[i]
      
  //     if (key == "time"){
  //         if (new Date(row[key]).toLocaleDateString().includes(query)) {
  //             return true
  //         }
  //      }

  //     if (key == "amount_cad"){
  //         // let amount = '$' + formatAmount((+row[key]).toFixed(2),true)
  //         // amount = amount.replace(/\s/g, ''); //remove spaces
  //         if (String(amount).includes(query.toLowerCase())){
  //             return true
  //         }
  //     }

  //     if (key == "amount" || key == "account_balance" ){
  //         let amount = formatAmount(+row[key])
  //         amount = amount.replace(/\s/g, ''); //remove spaces
  //         if (String(amount).includes(query.toLowerCase()) ||
  //         String(row[key]).includes(query.toLowerCase()))
  //         {
  //             return true
  //         }
  //     }

  //     if (String(row[key]).toLowerCase().includes(query.toLowerCase())){
  //         return true
  //     }
       
  // }
  // return false
}
