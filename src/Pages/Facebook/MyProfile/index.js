import React ,{useEffect,useState}from 'react';
import { Row,Col } from 'antd';
import profilePic from '../Images/profilePic.jpg';
import fairyLady from "../Images/fairyLady.jpg";
import randomUserPic from "../Images/randomUserPic.jpg";
import random_User from "../Images/random_User.jpg";
import randomUser from "../Images/randomUser.jpg";

const MyProfile = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
    const ProfileArray = [{
        Pic:profilePic,
        Name:"Rima Senda(Rehmna Senda Dass)",
    },];
    const ImageArray = [
      {
        Pic: fairyLady,
        Name:"Harry Vilas",
      },
      {
        Pic: randomUserPic,
        Name:"Nikolene Rene",
      },
      {
        Pic: random_User,
        Name:"Devid Pinke",
      },
      {
        Pic: randomUser,
        Name:"Denna Micky",
      },     
    ];

    useEffect(() => {
      setArray(ImageArray);
  }, []);
    console.log(`input`, input);
    console.log(`array`, array)


    
    return (
        <div>
            {ProfileArray?.length>0 && 
            <Row>
           {ProfileArray?.map((item)=>(
                 <Col  xs={0} sm={0} md={12} lg={12} xl={12}>
                <div className="bg-white flex  p-2  m-2 rounded-lg">
                <img src={item?.Pic} className="mt-3 mx-4 rounded-full w-64"/>
                <div className="mt-16 -mx-4 font-bold text-2xl">
                {item?.Name}
                
                <div className="flex items-center" >
                
                <input value={input} className="rounded h-6 mx-4 focus:outline-none" 
                 value={input}  placeholder="Add Friend Here" 
                 onChange={(event)=>setInput(event.target.value)}/>
                <button
                  className=" my-4 flex -mx-4  items-center bg-blue-500 text-white font-bold px-2 rounded-full hover:bg-red-500 focus:outline-none hover:text-white"
                  onClick={()=> {
                    if(input==="")
                    {
                        alert("no input is added");
                    }
                    else{
                    setArray([
                        ...array,
                        {
                          id:Math.floor(Math.random() * (200-1) + 1),
                            Name:input,
                            
                        },
                    ]);
                    setInput("");

                }
                }}
                >
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-people-fill" viewBox="0 0 16 16">
                className="mr-2"
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                 <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
               </svg>
                 Add Friends
                </button>  
                </div>   
                <button className=" my-4 flex mx-24  items-center bg-blue-500 text-white font-bold px-2 rounded-full hover:bg-red-500 focus:outline-none hover:text-white">
                  Friends
                  </button>
                  
                <div className="bg-blue-200 mt-4 mx-4 rounded-lg p-4 w-full">
                  {array?.length>0 ? 
                  array?.map((item)=>(
                    <div className="text-lg bg-white p-2 mx-2 my-2 "> Friends:{item?.Name}
                    </div>
                  )):"Web Deveolper"}
                </div>
               
                      
              </div>
                </div>
                </Col>
            ))
            }
            </Row>
            }
        </div>
    )
}

export default MyProfile;
