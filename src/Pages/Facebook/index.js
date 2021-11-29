import React,{useState} from 'react';
import Header from './Header';
import Friends from './Friends';
import MyProfile from './MyProfile';
import moment from 'moment';
import { Row,Col } from 'antd';


const Facebook = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <div className="overflow-y-auto">
      <div className=" bg-blue-100 border    ">
      <Header/>
      <div className="flex ml-4 overflow-y-auto">
          <div className="w-2/4 h-64">
      <Friends isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}/>
      </div>
      <div className="w-full ">
      <MyProfile/>
      </div>
      </div>
      </div>
    </div>
    )
}

export default Facebook
