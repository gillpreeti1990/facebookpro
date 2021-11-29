import React,{useEffect} from 'react';
import { Row ,Col} from 'antd';
import Modal from 'antd/lib/modal/Modal';
import fairyLady from "../Images/fairyLady.jpg";
import randomUserPic from "../Images/randomUserPic.jpg";
import random_User from "../Images/random_User.jpg";
import randomUser from "../Images/randomUser.jpg";
import randomUser_Pic from "../Images/randomUser_Pic.jpg";
import random_user_Pic from "../Images/random_user_Pic.jpg";
import random_pic from "../Images/random_pic.jpg";
import fairy_lady from "../Images/fairy_lady.jpg";

const Friends = ({isModalVisible,
    setIsModalVisible,}) => {
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

      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      
      const FriendsImageArray = [
        {
          Pic: fairy_lady,
          Name:"Dina Tagore",
        },
        {
          Pic: random_user_Pic,
          Name:"Nikk Johns",
        },
        {
          Pic: randomUser_Pic,
          Name:"Donnis Murge",
        },
        {
          Pic: random_pic,
          Name:"Sonny Sangha",
        },     
      ];
      
    return (
        <div className="">
        {ImageArray?.length > 0 &&
        <Row>
         {ImageArray?.map((item) => (
               <Col  xs={24} sm={24} md={12} lg={12} xl={12}>
            <div
              className="bg-white  flex items-center    p-2  m-2 rounded-lg"
            
            >
              <Row></Row>
              <div className="">
                <img
                  src={item?.Pic}
                  className="rounded-lg h-24 w-24"
                  alt="User Pic"
                />
              </div>
              <div className="ml-4">
                <div className="font-bold"> {item?.Name}</div>
           
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-facebook text-blue-700 shadow-md rounded-full mt-2 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-twitter bg-blue-400 text-white rounded-md inline shadow-md mt-2 ml-3"
                    viewBox="-2 -2 20 20"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-linkedin shadow-md rounded mt-2 ml-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
              </div>
              <div className="ml-8 p-2">
                <button
                  className="mx-4 flex  items-center bg-blue-500 text-white font-bold p-2 px-4 rounded-full hover:bg-red-500 focus:outline-none hover:text-white"
                  onClick={()=>{
                      setIsModalVisible(true);
                      <Modal/>
                    
                  }}
                >
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-people-fill" viewBox="0 0 16 16">
                className="mr-2"
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                 <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
               </svg>
                  Friends
                </button>             
              </div>
            </div>
            </Col>
          ))}
          </Row>
          }

              {/* <Modal
      title={
          <div className="text-center font-bold text-2xl">
            Harry Vilas friend's lists      
          </div>}
      visible={isModalVisible}
      style={{ top: 20 }}
      footer={false}
      onOk={() => {
        handleOk();
      }}
      onCancel={() => {
        handleCancel();
      }}
    >
      <div className="overflow-y-scroll h-80  ">
    {FriendsImageArray?.length>0 &&
    FriendsImageArray?.map((item)=>(
        <div
        className="bg-blue-200 flex items-center p-2 m-2 rounded-lg "
      
      >
        <div className="">
          <img
            src={item?.Pic}
            className="rounded-lg h-24 w-24"
            alt="User Pic"
          />
        </div>
        <div className="text-lg font-bold ml-2" >
        {item?.Name}
        </div>
        </div>
    ))}
         
      </div>
    </Modal> */}
      </div>

    )
}

export default Friends;
