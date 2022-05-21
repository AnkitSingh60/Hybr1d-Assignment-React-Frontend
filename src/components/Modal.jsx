import { Modal } from "antd";
// import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";

const ModalView = ({ isModalVisible, setIsModalVisible, objectID }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  // console.log("data:", data);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const modalData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://hn.algolia.com/api/v1/items/${objectID}`);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log("error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    modalData();
  }, []);
  // console.log("data.children = ",data.children)
  // console.log('typeOf data.children = ', typeof data.children)

  return (
    <div>
     {<Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {loading && <p className="flx">Loading...</p>}
        <p className="flx ltr"><span className="span">Title:</span> {data.title}</p>
        <p className=" flx ltr"><span className="span">Points:</span>{data.points} </p>
        <p>{}</p>
        </Modal>}

    </div>
  );
};

export default ModalView;
