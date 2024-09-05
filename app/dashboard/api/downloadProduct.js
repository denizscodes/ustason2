import { connectToDB } from "../../lib/utils";
import { Product } from "../../lib/models";
import { generatePDF } from "../../lib/pdfUtils";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connectToDB();

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const pdfBuffer = await generatePDF(product);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${product.title}.pdf`
    );
    return res.send(pdfBuffer);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to generate PDF" });
  }
}
