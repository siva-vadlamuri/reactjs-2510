import React,{useState,useEffect} from 'react';

const Counter = ()=>{
    
    // when you call the useState hook which a function, you get an array of two values
    // the first value is the current state of the counter
    // the second value is a function that allows you to update the state
    // what ever we are passing inside the use state will be the 
    const [count,setCount] = useState(0);
    const [users,setUsers] = useState([])


    // a function is passed as argument to another function: callback function

    // useEffect is a combination of componentDidMount, componentDidUpdate and componentWillUnmount
    
    // componentDidMount --> for the first time when the component is mounted on the DOM at the point of time componentDidMount will be called by react


    // componentDidMount in useEffect is if you give an empty depedency array  to the useEffect as a second parameter 
    const getTheUser =async ()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data =  await response.json()
    //   we are updating the state
      setUsers(data)
      
    }
    // 1 st --> it will make the API call only for the first time
    // 2nd --> whenever the count is updated the react will make an API call again and again
    console.log(users)

    // combo of componentDidMount and componentDidUpdate
    // when the componentDidUpdate,

    // useEffect will be called every time when the state or props is updated
useEffect(()=>{

})

// useEffect(()=>{

// },[])

    useEffect(()=>{
       getTheUser()
    },[count])
    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleDecrement = ()=>{
        setCount(count-1)
    }

    return(
        <div>
            <p>counter: {count}</p> 
            <button className="btn btn-info" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-info" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;