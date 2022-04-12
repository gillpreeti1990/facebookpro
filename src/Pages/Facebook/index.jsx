import React, { useState, useEffect } from "react";
import { Select, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setRelation } from "../redux/reducers/facebook";

const Facebook = () => {
  const { Option } = Select;
  const [Relation, setRelationForUser] = useState("");
  const [inputField, setInputField] = useState("");
  const [friendName, setFriendName] = useState("");
  const [firstFriendList, setfirstFriendList] = useState([]);
  const [firstPerson, setFirstPerson] = useState({});
  const [secondPerson, setSecondPerson] = useState({});
  const [secondFriendList, setSecondFriendList] = useState([]);
  const [newUpdatedArray, setNewUpdatedArray] = useState([]);

  //arr is globalstate in reducer and facebook is new name of randomimage reducer given in configureStore
  const { arr, newarray } = useSelector(({ facebook }) => ({
    arr: facebook.arr,
  }));

  // const UpdatedArrayString = [
  //   firstPerson?.name,
  //   // firstPerson?.friendName,
  //   secondPerson?.name,
  // ];

  const dispatch = useDispatch();

  const handleChange = (value) => {
    console.log(`Selected Name${value}`);
    setRelationForUser(value);
  };

  const changeFriend = (value) => {
    console.log(`selected Friend ${value}`);
    setFriendName(value);
  };

  const usersList = (value) => {
    console.log(`List of users ${value}`);
  };

  const friendList = (value) => {
    console.log(`friend List  ${value}`);
  };

  console.log(`newUpdatedArray`, newUpdatedArray);
  // console.log(`UpdatedArrayString`, UpdatedArrayString);
  // console.log(`arr`, arr);
  // console.log(`relation`, Relation);
  // console.log(`friendname`, friendName);
  // console.log(`hello firstFriendList`, firstFriendList);
  // console.log(`SecondFriendList`, secondFriendList);
  console.log(`firstPerson`, firstPerson);
  console.log(`secondPerson`, secondPerson);

  return (
    <div className="flex justify-between bg-blue-300 m-4 p-4 rounded shadow-xl items-center">
      <div className="bg-pink-600 h-80 w-2/4 border-2 py-8">
        <div className="text-blue-700 text-2xl font-bold">
          PersonaL Information
        </div>
        <span className="text-white font-bold">Name</span>
        <input
          className="bg-grey-lightest border-2 outline-none w-48 h-12 p-2 m-4 rounded-lg shadow-inner "
          placeholder="Name"
          type="text"
          value={inputField}
          onChange={(e) => setInputField(e.target.value)}
        />
        <div>
          <span className="text-white font-bold mx-2 ">Relation</span>
          <Select
            value={Relation}
            defaultValue="Select a relation"
            style={{ width: 220, backgroundColor: "white" }}
            onChange={handleChange}
          >
            <Option value="friend">Friend</Option>
            <Option value="none">None</Option>
          </Select>
        </div>
        {Relation === "friend" && inputField ? (
          <div className=" my-4 font-bold text-blue-700">
            <span className="text-white font-bold mx-4 ">Friend</span>
            <Select
              style={{ width: 220, backgroundColor: "white" }}
              onChange={changeFriend}
            >
              {arr?.length > 0 &&
                arr?.map((item) => (
                  <Option value={item?.name}>{item?.name}</Option>
                ))}
            </Select>
          </div>
        ) : (
          <div className="my-4">
            {arr?.length === 0 && (
              <div className="text-white bg-blue-300 font-bold text-2xl my-8 mx-16 border-2 w-3/4">
                No Friend is Here
              </div>
            )}
          </div>
        )}

        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => {
            console.log(`inputfield`, inputField);
            console.log(`relation`, Relation);
            const newArray = {
              name: inputField,
              relation: Relation,
              friendName: friendName,
              id: Math.floor(Math.random() * (200 - 1) + 1),
            };
            const updatedArray = arr.concat(newArray);
            console.log(`updatedArray`, updatedArray);
            console.log(`arr`, arr);
            dispatch(setRelation([...updatedArray]));
            setInputField("");
            setRelationForUser("");
          }}
        >
          Submit
        </Button>
      </div>
      <div className="bg-pink-600 h-80 w-2/4 border-2 py-8">
        <div className="text-blue-700 text-2xl font-bold">
          Degree Of Friend List
        </div>
        <span className="text-white font-bold mx-4 ">Original List</span>
        <Select
          defaultValue="Select a person"
          style={{ width: 220, backgroundColor: "white", marginTop: 12 }}
          onChange={(value) => {
            // setfirstFriendList(arr?.find((data)=> data?.id === value));
            setfirstFriendList(arr?.filter((data) => data?.id !== value));
            setFirstPerson(arr?.find((data) => data?.id === value));
          }}
        >
          {arr?.length > 0 &&
            arr?.map((item) => <Option value={item?.id}>{item?.name}</Option>)}
        </Select>
        <div>
          <span className="text-white font-bold mx-6 ">Friend List</span>
          <Select
            defaultValue="Select a friend"
            style={{ width: 220, backgroundColor: "white", marginTop: 12 }}
            onChange={(value) => {
              // friendList();
              setSecondPerson(arr?.find((data) => data?.id === value));
            }}
          >
            {firstFriendList?.map((item) => (
              <Option value={item?.id}>{item?.name}</Option>
            ))}
          </Select>
        </div>
        <div className="my-6">
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={() => {
              console.log(`firstFriendList`, firstFriendList);
              console.log(`secondFriendList`, secondFriendList);
              console.log(`arr`, arr);
              if (firstPerson?.friendName === secondPerson?.name) {
                const UpdatedArrayString = [
                  firstPerson?.name,
                  secondPerson?.name,
                ];
                console.log(`true`, true);
                setNewUpdatedArray(UpdatedArrayString);
              } else {
                const newRelation = arr?.find(
                  (data) => data?.name === firstPerson?.friendName
                );
                if (newRelation?.friendName === secondPerson?.name) {
                  const UpdatedArrayString = [
                    firstPerson?.name,
                    firstPerson?.friendName,
                    secondPerson?.name,
                  ];
                  setNewUpdatedArray(UpdatedArrayString);
                } else {
                  console.log(`false`, false);
                  setNewUpdatedArray([]);
                }
              }
            }}
          >
            Search
          </Button>
        </div>
        {newUpdatedArray?.length > 0 && (
          <div className="flex justify-center bg-blue-300 w-48 m-auto p-2 ">
            {newUpdatedArray?.length > 0 &&
              newUpdatedArray?.map((item, index) => (
                <div className="text-white font-bold">
                  {" "}
                  {item}
                  {newUpdatedArray?.length > index + 1 && ">"}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Facebook;
