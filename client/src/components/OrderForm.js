import React, {useState} from 'react';
import '../css/OrderForm.css';
import Request from '../helpers/request';


const OrderForm = ({customer, basket, basketValue}) => {

const [stateOrder, setStateOrder] = useState(
    {
        customer: {customer},
        specialNotes: "",
        orderItems: {basket},
        quantity: 0,
        total: {basketValue},
        rating: null
        // table: null,

    }
)

const handleChange = function(event){
    let propertyName = event.target.value;
    let copiedOrder = {...stateOrder}
    copiedOrder[propertyName] = event.target.value;
    setStateOrder(copiedOrder)
}


// const handleTable = function(event) {
//     const index = parseInt(event.target.value)
//     const SelectedTable = tables[index]
//     let copiedOrder = {...stateOrder};
//     copiedOrder['Table'] = SelectedTable
//     setStateOrder(copiedOrder)
// }

const handleOrderPost = function(order){
    const request = new Request();
    request.post("/orders", order)
    
  }


const handleSubmit = function(event){
    event.preventDefault();
    handleOrderPost(stateOrder); 
}



// const tableOptions = table.map((table, index) => {
//     return <option key={index} value={index}>{table.number}</option>
// })

// if (!OrderItems.length === 0){
//     return <p>Loading...</p>
//     }


    return (
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="special notes" name="specialNotes" onChange={handleChange} value={stateOrder.specialNotes} />
        {/* <select name="table" onChange={handleTable} defaultValue="select-table">
        <option disabled value='select-ship'>Select a Table</option>
            {tableOptions}
        </select>  */}

        <button className= "order-btn" type="submit">Submit</button>

        </form>
        </>



       
    )
}

export default OrderForm;

 // public Order(Customer customer) {
        //     this.customer = customer;
        //     this.specialNotes = "";
        //     this.orderItems = new ArrayList<>();
        //     this.quantity = 0;
        //     this.total = 0;
        //     this.rating = null;
        // }


    //     {/* will take basket of items <Arraylist></Arraylist>
        
    //      will take a total of item prices from checkout
         
    //    need a <option>scrolldown table menu </option> table option scroll menu, 
       
    //    needs a <button>submit button</button>   needs to persist to database with a postmethod similar 
    //    to how done in createPirate and in Login Page with customer*/

    //    //reference CreatePirate and use Insomnia for testing the route to basket 
       
    //    }