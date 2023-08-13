import React, { useContext, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Columns from "../components/columns/Columns";
import AddNewColumn from "../components/columns/AddNewColumn";
import Popup from "../components/popup/Popup";
import { DataCxt } from "../context/dataCxt";

const PlatformLaunch = () => {
  const { data, loading, error } = useContext(DataCxt);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");
  const [columns, setColumns] = useState([]);

  let columnsToRender = [];

  if (data) {
    columnsToRender = data.map((item) => ({
      data: item,
      title: item.nameColumn,
    }));
    // console.log(columnsToRender);
  }

  const handleAddColumn = () => {
    if (newColumnName.trim() === "") {
      return;
    }

    const newColumn = { title: newColumnName };
    setColumns([...columns, newColumn]);
    setButtonPopup(false);
    setNewColumnName("");
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar title={"Platform Launch"} />
      <div className="container-fluid custom-columns px-4">
        <div className="row gap-3 flex-nowrap">
          {columnsToRender.map((column, index) => (
            <Columns
              key={index}
              title={column.title}
              data={column.data}
            />
          ))}

          <div
            className="add-new-column d-flex justify-content-center align-items-center"
            onClick={() => setButtonPopup(true)}
          >
            + Add New Column
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <AddNewColumn
              setNewColumnName={setNewColumnName}
              onAddColumn={handleAddColumn}
            />
          </Popup>
        </div>
      </div>
    </>
  );
};

export default PlatformLaunch;
