import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";

const Signature = ({ onSave, title }) => {
  const sigPad = useRef(null);

  const saveSignature = (event) => {
    event.preventDefault(); // Varsayılan form davranışını engelle
    if (sigPad.current) {
      const dataURL = sigPad.current.getTrimmedCanvas().toDataURL("image/png");
      onSave(dataURL);
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <SignaturePad
        ref={sigPad}
        penColor="black"
        canvasProps={{
          width: 350,
          height: 200,
          className: "signature-canvas",
          style: { backgroundColor: "white", borderRadius: "10px" },
        }}
      />
      <button
        type="button"
        onClick={saveSignature}
        style={{
          backgroundColor: "#0071e4",
          borderRadius: "10px",
          color: "white",
          borderColor: "#0071e4",
          padding: "10px",
        }}
      >
        İmzayı Kaydet
      </button>
    </div>
  );
};

export default Signature;
