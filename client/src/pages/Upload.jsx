import React from "react";
import FileInput from "../components/FileInput";
import Title from "../components/Title";
import { useForm } from "react-hook-form";
import Form from "../components/Form";
import Input from "../components/Input";
import Select from "../components/Select";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";

const Upload = () => {
  const {
    register,
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="upload">
      <div className="container">
        <div className="upload__body">
          <div className="upload__body__title">
            <Title size={25} fw={600} margin="0 0 5px 0">
              Загрузка видео
            </Title>
            <div>
              <Title size={18} fw={600} color="#999999">
                Опубликовать видео
              </Title>
            </div>
          </div>
          <div className="upload__body__content">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="upload__body__content__file">
                <FileInput name="files" control={control} />
              </div>
              <div className="upload__body__content__form">
                <Title size={17} fw={600} margin="0 0 5px 0">
                  Заголовок
                </Title>
                <Input
                  {...register("title")}
                  type="text"
                  id="title"
                  name="title"
                  placeholder=""
                  fullwidth="100%"
                  // error={errors.password}
                />

                <Title size={17} fw={600} margin="20px 0 5px 0">
                  Обложка
                </Title>
                <Input
                  {...register("obl")}
                  type="file"
                  id="obl"
                  name="obl"
                  fullwidth="100%"
                  // error={errors.password}
                />

                <Title size={17} fw={600} margin="20px 0 5px 0">
                  Кто может просматривать это видео
                </Title>
                <Select 
                  {...register("private")}
                  id='private'
                  name='private'
                />

                <Title size={17} fw={600} margin="20px 0 5px 0">
                  Позволить людям:
                </Title>
                <div className="d-flex align-items-center">
                  <CheckBox 
                  {...register("comment")}
                  id='comment' 
                  name='comment' 
                  type='checkbox'
                  margin="0 0 0 0"
                  txt="Комментарии" 
                  />
                </div>
                <div className="upload__body__content__btn">
                  <Button variant='outlined' color='#bbbbbb' colorText='#353535'>Удалить</Button>
                  <Button variant='contained' color='#FE2C55' margin='0 0 0 20px'>Опубликовать</Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
