import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./QRCodeGenerator.css";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const qrRef = useRef(null);

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "QRCode.png";
    link.click();
  };

  return (
    <div className="qr-container">
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div ref={qrRef}>
        {input && <QRCodeCanvas value={input} size={250} />}
      </div>
      {input && <button onClick={downloadQRCode}>Download QR Code</button>}
    </div>
  );
};

export default QRCodeGenerator;
