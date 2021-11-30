import React from "react";
import FileInput from "../components/FileInput";
import Title from "../components/Title";
import { useForm } from "react-hook-form";
import Form from "../components/Form";
import Input from "../components/Input";

const Upload = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {};

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
              {/* <div className="upload__body__content__form">
                <Input
                  {...register("title")}
                  type="text"
                  id="title"
                  name="title"
                  placeholder=""
                  fullWidth='100%'
                  // error={errors.password}
                >
                </Input>
              </div> */}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
