import fs from "fs";

export default function readjsonSync(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return data;
  } catch (err) {
    console.error("JSON read/parse error:", err.message);
    return null;
  }
}