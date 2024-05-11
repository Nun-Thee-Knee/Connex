"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import { api } from "~/trpc/react";

export default function AvatarUploadPage({id}:{id:string}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const uploadResume = api.resume.uploadResume.useMutation({
    onSuccess:()=>{
      console.log("uploaded");
    },
    onError:(error)=>{
      console.log(error);
    }
  });
  return (
    <>
      <h1>Upload Your Avatar</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          if (!file) {
            throw new Error("No file selected");
          }

          const response = await fetch(`/api/upload?filename=${file.name}`, {
            method: "POST",
            body: file,
          });

          const newBlob = (await response.json()) as PutBlobResult;

          //upload this blob to the database
          // const res = await fetch(`/api/upload/db`, {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({
          //     url: newBlob.url,
          //   }),
          // });

          // const {
          //   data: jobs,
          //   isLoading,
          //   error,
          // } = api.job.fetchAllJobs.useQuery();

          setBlob(newBlob);
          uploadResume.mutate({
            id: id,
            file: newBlob.url,
          });
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}
