import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";


const ActionItems = (props) => {

    const { _id, productName, productPrice, productDescription , productImage} = props.item;
    const { adminPanel } = useParams();
    const history = useHistory();

    const redirectEdit = () => {
        props.setEditProduct(props.item)
        history.replace({ pathname: "/dashboard/editProduct" });
    }

  return (
    <>
      <tbody style={{ fontWeight: "500" }}>
        <tr>
           <td>
              <Image height="50" src={productImage} rounded />
          </td>
          <td>{productName}</td>
          <td>{productDescription || ""}</td>
          <td>${productPrice}</td>
          <td>
            {adminPanel === "editProduct" ? (
              <Button
                variant="outline-success"
                className="p-1 shadow-none mb-0"
                onClick={() => props.setEditProduct(props.item)}
              >
                <FiEdit style={{ fontSize: "1.2rem" }} /> Edit
              </Button>
            ) : (
              <>
                <Button
                  variant="outline-success"
                  className="p-1 mb-0 shadow-none"
                  onClick={redirectEdit}
                >
                  <FiEdit style={{ fontSize: "1.2rem" }} />
                </Button>
                <Button
                  variant="outline-danger"
                  className="p-1 ml-2 mb-0 shadow-none"
                  onClick={() => props.handleDeleteItem(_id)}
                >
                  <RiDeleteBinLine style={{ fontSize: "1.3rem" }} />
                </Button>
              </>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ActionItems;
