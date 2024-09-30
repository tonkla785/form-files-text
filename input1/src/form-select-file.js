import React, { useRef } from "react";

export default function FormSelect() {
  const inputFile = useRef();
  const selectMaxNumFile = useRef();
  const selectMaxSize = useRef();

  const maxNumfiles = [1, 2, 3, 4, 5];
  const maxSize = [50, 100, 200, 500, 1000];

  const onClickButton = () => {
    const maxFiles = selectMaxNumFile.current.value;
    const maxFileSize = selectMaxSize.current.value;

    if (inputFile.current.files.length > maxFiles) {
      alert(`เลือกได้ไม่เกิน ${maxFiles} ไฟล์`);
      return;
    }

    for (let file of inputFile.current.files) {
      if (file.size > maxFileSize * 1000) {
        alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxFileSize} KB`);
        return;
      }
    }

    alert("Files OK");
  };

  return (
    <div
      className="mt-4 mx-auto p-3 rounded"
      style={{ width: "400px", background: "#cee" }}
    >
      <form>
        <div className="form-group mb-3">
          <label htmlFor="maxNumFiles" className="form-label">
            จำนวนไฟล์สูงสุด
          </label>
          <select
            id="maxNumFiles"
            className="form-select form-select-sm"
            ref={selectMaxNumFile}
          >
            {maxNumfiles.map((i) => {
              return <option value={i}>{i}</option>;
            })}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="maxSize" className="form-label">
            ขนาดไฟล์สูงสุด (KB)
          </label>
          <select
            id="maxFileSize"
            className="form-select form-select-sm"
            ref={selectMaxSize}
          >
            {maxSize.map((i) => {
              return <option value={i}>{i}</option>;
            })}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="file" className="form-label">
            เลือกไฟล์
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            className="form-control form-control-sm"
            ref={inputFile}
            multiple
          />
        </div>
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-sm btn-primary px-4 mb-4"
            onClick={onClickButton} // Assign the click handler here
          >
            OK
          </button>
        </div>
      </form>
    </div>
  );
}