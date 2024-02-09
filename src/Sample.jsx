import {
    Dropzone,
    FileMosaic,
    FullScreen,
    ImagePreview,

  } from "@files-ui/react";
  import * as React from "react";
import { Container } from "react-bootstrap";
  
  const BASE_URL = "https://www.myserver.com";



function Sample() {

    
      

    const [extFiles, setExtFiles] = React.useState([]);//images files
    const [imageSrc, setImageSrc] = React.useState(undefined);

  
    const updateFiles = (incommingFiles) => {
      console.log("incomming files", incommingFiles);
      setExtFiles(incommingFiles);
    };
    const onDelete = (id) => {
      setExtFiles(extFiles.filter((x) => x.id !== id));
    };
    const handleSee = (imageSource) => {
      setImageSrc(imageSource);
    };

    const handleStart = (filesToUpload) => {
      console.log("advanced demo start upload", filesToUpload);
    };
    const handleFinish = (uploadedFiles) => {
      console.log("advanced demo finish upload", uploadedFiles);
    };
    const handleAbort = (id) => {
      setExtFiles(
        extFiles.map((ef) => {
          if (ef.id === id) {
            return { ...ef, uploadStatus: "aborted" };
          } else return { ...ef };
        })
      );
    };
    const handleCancel = (id) => {
      setExtFiles(
        extFiles.map((ef) => {
          if (ef.id === id) {
            return { ...ef, uploadStatus: undefined };
          } else return { ...ef };
        })
      );
    };
    return (
      <Container>
        <Dropzone
          onChange={updateFiles}
          minHeight="195px"
          value={extFiles}
          accept="image/*"
          maxFiles={5}
          maxFileSize={2 * 1024 * 1024}
          label="Drag'n drop files here or click to browse"
          uploadConfig={{
            // autoUpload: true
            url: BASE_URL + "/file",
            cleanOnUpload: true
          }}
          onUploadStart={handleStart}
          onUploadFinish={handleFinish}
           fakeUpload
          actionButtons={{
            position: "after",
            // abortButton: {},
            deleteButton: {},
            uploadButton: {}
          }}
        >
          {extFiles.map((file) => (
            <FileMosaic
              {...file}
              key={file.id}
              onDelete={onDelete}
               onSee={handleSee}
            //   onWatch={handleWatch}
              onAbort={handleAbort}
              onCancel={handleCancel}
            //   resultOnTooltip
              alwaysActive
              preview
           //   info
            />
          ))}
        </Dropzone>
        <FullScreen
          open={imageSrc !== undefined}
          onClose={() => setImageSrc(undefined)}
        >
          <ImagePreview src={imageSrc} />
        </FullScreen>
     
       </Container>
         );
}

export default Sample