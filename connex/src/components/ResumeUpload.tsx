import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export default function ServerUploadPage() {
  async function upload(data: FormData) {
    "use server";

    const file: File | null = data.get("file") as unknown as File;
    if (!file) {
      throw new Error("No file uploaded");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = "./uploads";

    await mkdir(uploadDir, { recursive: true });

    // Construct the file path within the upload directory
    const filePath = join(uploadDir, file.name);

    // Write the file to the specified path
    await writeFile(filePath, buffer);
    console.log(`File uploaded successfully. Path: ${filePath}`);

    return { success: true };
  }
  return (
    <main>
      <h1>React Server Component: Upload</h1>
      <form action={upload}>
        <input type="file" name="file" />
        <input type="submit" value="Upload" />
      </form>
    </main>
  );
}
