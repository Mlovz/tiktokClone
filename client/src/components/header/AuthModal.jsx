import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GLOBALTYPES } from "../../redux/actions/globalAction";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Title from "../Title";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { login } from "../../redux/actions/authAction";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AuthModal = () => {
  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state);
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Поле имя обязательное')
      .max(15, "Максимальное количество символов 15")
      .min(5, "Минимальное количество символов 5"),
    password: yup
      .string()
      .required('Поле пароль обязательное')
      .min(6, "Минимальное количество символов 6"),
  });

  console.log(alert);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login({ data }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="auth__modal"
    >
      <motion.div
        initial={{ height: "50px" }}
        animate={{ height: "500px", transition: { duration: 0.3 } }}
        exit={{
          height: "500px",
          y: "-40px",
          opacity: 0,
          transition: { duration: 0.2 },
        }}
        className="auth__modal__box"
      >
        <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: 1, transition: { duration: 0.4 } }}
          exit={{ scale: 1 }}
          className="d-flex align-items-center flex-column w-100"
        >
          <Title
            size={30}
            fw={600}
            margin="60px 0 20px 0"
          >
            Войти
          </Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("username")}
              type="text"
              id="username"
              name="username"
              placeholder="имя пользователя"
              error={errors.username}
            />
            <span className='valid__text'>{errors?.username?.message}</span>
            <Input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              placeholder="пароль"
              error={errors.password}
            />
            <span className='valid__text'>{errors?.password?.message}</span>
            <div style={{ marginBottom: "10px", position: "relative" }}>
              <Button
                variant="contained"
                color="#FE2C55"
                fullWidth
                disabled={alert.loading}
                margin="15px 0 0 0"
              >
                {alert.loading ? (
                  <div className="text-dark">
                    <span
                      className="spinner-border spinner-border-sm mx-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </div>
                ) : (
                  "Войти"
                )}
              </Button>
            </div>
            <Title
              size={15}
              fw={400}
              margin="10px 0 15px 0"
            >
              <Link to="/forgot">Забыли пароль?</Link>
            </Title>
          </Form>
        </motion.div>
        <div className="auth__modal__footer">
          <Title
            size={15}
            fw={400}
            margin="10px 0 20px 0"
          >
            Еще нет аккаунта?
          </Title>
          <Title
            size={15}
            fw={700}
            color="#FE2C55"
            margin="10px 0 20px 0"
          >
            Регистрация
          </Title>
        </div>
        <span
          onClick={() =>
            dispatch({ type: GLOBALTYPES.AUTH_MODAL, payload: false })
          }
          className="auth__modal__close"
        >
          <i className="fal fa-times"></i>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;
