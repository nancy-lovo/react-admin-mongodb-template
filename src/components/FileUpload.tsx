import { useState, useRef, useCallback } from "react";
import { useNotify, useRefresh } from "react-admin";
import { uploadImgFile } from "../utils/upload";

const UploadFile = ({ source }: { source: string }) => {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);

  const inputImg: any = useRef(null);

  const notify = useNotify();
  const refresh = useRefresh();

  const selectFile = useCallback(() => {
    setSelectedFile(inputImg.current.files[0]);
  }, [inputImg]);

  const upload = () => {
    let currentFile = selectedFile;
    setProgress(0);
    setCurrentFile(currentFile);

    uploadImgFile(source, currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response: any) => {
        notify(response.data.message, "success");
        refresh();
      })
      .catch(() => {
        setProgress(0);
        notify("Could not upload the file!", "warning");
        setCurrentFile(undefined);
      });

    setSelectedFile(undefined);
  };

  return (
    <div>
      {currentFile && (
        <div className="progress">
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      <label className="btn btn-default">
        <input
          ref={inputImg}
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={selectFile}
        />
      </label>

      <button
        className="btn btn-success"
        disabled={!selectedFile}
        onClick={upload}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadFile;
