// PDF Helper for Vite + GitHub Pages

// Import all PDFs
import fullStackCert from "../certificates/CareerSchool_Full Stack Development.pdf";
import pythonStarCert from "../certificates/PythonStarBatch.pdf";
import aiCert from "../certificates/AI  Certificate.pdf";
import problemSolvingCert from "../certificates/problem_solving_intermediate certificate.pdf";
import sqlCert from "../certificates/sql_intermediate certificate-1.pdf";
import pythonDevCert from "../certificates/Python development Novitech.pdf";
import pythonCert from "../certificates/python.pdf";

// Function to get correct PDF URL
export const getPdfUrl = (importedPdf) => {
  // In development, use the imported path directly
  if (import.meta.env.DEV) {
    return importedPdf;
  }
  // In production (GitHub Pages), ensure correct path
  return importedPdf;
};

// Export all PDFs with their metadata
export const pdfFiles = {
  fullStack: fullStackCert,
  pythonStar: pythonStarCert,
  ai: aiCert,
  problemSolving: problemSolvingCert,
  sql: sqlCert,
  pythonDev: pythonDevCert,
  python: pythonCert
};