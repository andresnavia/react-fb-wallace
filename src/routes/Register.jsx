import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const [email, setEmail] = useState("wallacepru@gmail.com");
  const [password, setPassword] = useState("123123");
  const { registerUser } = useContext(UserContext);
  const navegate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm({ defaultValues: { email: "wallace3@gmail.com" } });

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      console.log("Usuario Creado");
      navegate("/");
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("email", {
            message: "El correo ya esta en uso.",
          });
          break;
        default:
          console.log("Ocurrio un mensaje de servidor");
      }
    }
  };

  /* const handleSubmit = async (e) => {
    
  }; */
  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Ingrese Email"
          {...register("email", {
            required: { message: "Campo Obligatorio", value: true },
            pattern: {
              value: /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+$/,
              message: "Formato de email invalido",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Ingrese Password"
          {...register("password", {
            minLength: { value: 6, message: "Mínimo 6 cáracteres" },
            validate: {
              trim: (v) => {
                if (!v.trim()) {
                  return "Escribi algo cacorro";
                }
                return true;
              },
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Ingrese Password"
          {...register("repassword", {
            validate: {
              equals: (v) =>
                v === getValues("password") || "El password no coincide.",
            },
          })}
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}
        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default Register;
