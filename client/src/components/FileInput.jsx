import React from "react";
import { Controller } from "react-hook-form";
import DropZone from "react-dropzone";
import Title from "./Title";

const FileInput = ({ name, control }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => {
        console.log(value);
        return (
          <DropZone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{
                  padding: "2px",
                  height: "100%",
                }}
                {...getRootProps()}
              >
                <i style={{fontSize: '30px', color:'#999999'}} className="far fa-cloud-upload-alt"></i>
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <Title fw={700} margin='15px 0 0 0'>Выберите видео для загрузки</Title>
                <Title size={15}>или перетащите файл</Title>
                <Title margin='15px 0 0 0' color='#999999'>MP4 или WebM</Title>
                <Title color='#999999'>Разрешение 800x600 или выше</Title>
                <Title color='#999999'>До 120 с</Title>
                <Title color='#999999'>Менее 100mb</Title>
              </div>
            )}
          </DropZone>
        );
      }}
    ></Controller>
  );
};

export default FileInput;
