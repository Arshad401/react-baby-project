import React, { useContext, useState } from 'react'
import { myContext } from './Context'
import { useParams } from 'react-router-dom';
import Header from './Header';
import Button from 'react-bootstrap/Button';
function Viewmore() {
    const datas = useContext(myContext);
    const {product,cart,setCart} = datas;
    const {isLoggedIn}=useContext(myContext)
    const {id} = useParams();
     const [count,setCount] =useState(1)
     const increment = ()=>{
       setCount(count+1)
    }
    const decrement = ()=>{
      count<=1?setCount(1):setCount(count-1)
    }

    const data = product.filter((item)=> item.id === parseInt(id));

    
    const Addcart= () => {
      if (isLoggedIn) {
        if(cart.includes(data[0])){
          alert("This product is already added")
        }else{
  
          setCart(()=>[...cart,...data])
          alert("success fully added")
          console.log(data)
        }
      }else{
        alert('you are not logged in')
      }

      
    }
    


  return (
    <div>
      < Header className='sticky-top'>
        </Header>
       { data.map((item) =>(
<div>   <div>
        
        <img src={item.src}  alt='not available' />

     </div> 
     <div>
        <h1>{item.name}</h1>
        <h4>Rs{item.price}</h4>
        <p>{item.discription}</p>
     </div>
     
     <div>
     <Button onClick={Addcart}>Add to Cart</Button>&nbsp;
     {/* <button onClick={Addcart}>Add to Cart</button> */}
     <Button variant="danger">Buy Now</Button>{' '}
     {/* <button >Buy Now</button> */}
     </div>
     <div>
     <button onClick={increment}>+</button>
     {count}
     <button onClick={decrement}>-</button>
     </div>
     </div> 


      ))}

    </div>
  )
}

export default Viewmore
