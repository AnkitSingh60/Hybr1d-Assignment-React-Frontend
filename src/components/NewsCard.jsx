import React, { useState } from "react";
import ModalView from "./Modal";

const NewsCard = ({ item, objectID }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };
  
  console.log('item:', item)
  if(!item.title){
    item.title = "Title is not available yet"
  }
  if(!item.author){
    item.author = "Author is not available yet"
  } else{
    item.author = item.author.toUpperCase()
  }
  return (
    <>
    <div onClick={openModal} className="newsContainer">
      <h4><span className="span2">Title:</span>{item.title}</h4>
      
      <p className="text1"> <span className="span2">Author:</span> {item.author}</p>
    </div>
    {isModalVisible && (
      <ModalView
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      objectID={objectID}
      />
      )}
    </>
  );
};

export default NewsCard;
