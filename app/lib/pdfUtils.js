import PDFDocument from "pdfkit";

export async function generatePDF(product) {
  const doc = new PDFDocument();
  const buffers = [];

  doc.on("data", buffers.push.bind(buffers));
  doc.on("end", () => buffers.join(""));

  doc.fontSize(20).text(product.title, { align: "center" });

  // Add more text, images, etc., based on product schema fields.
  doc.fontSize(12).text(`Operator Notes: ${product.operatornot}`);
  doc.text(`Device Brand: ${product.cihazmarka}`);
  // Continue with other fields...

  doc.end();

  return Buffer.concat(buffers);
}
