import React from "react";
import Title from "../components/Title";

const Upload = () => {
  return (
    <div className="upload">
      <div className="container">
        <div className="upload__body">
          <div className='upload__body__title'>
            <Title 
                size={30}
                fw={600}
                margin="0 0 20px 0">Загрузка видео</Title>
            <div>
              <Title>Опубликовать видео</Title>
            </div>
          </div>
          <div className="upload__body__content">
              <div className="upload__body__content__file"></div>
              <div className="upload__body__content__form"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Upload;
