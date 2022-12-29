import { useForm } from "react-hook-form";
import { number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { mask, unMask } from "remask";
import { useState } from "react";
import axios from "axios";
import { removeSpecialCharacters } from "../../helpers/removeSpecialCharacters";
import { toast } from "react-toastify";

const schema = object({
  version: string().required("O campo NOME é obrigatório."),
  name: string().required("O campo NOME é obrigatório."),
  descrition: string().required("O campo DESCRIÇÃO é obrigatório."),
});

export const ProductForm = () => {
  // React Hook Form Config
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    await productRegister(data);
    reset();
  };

  const productRegister = async (data) => {
    try {
      const resp = await axios.post("http://localhost/api/products", data);

      if (resp.statusText === "Created") {
        toast.success("Cadastrado com sucesso!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error("Cadastrado com sucesso!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (err) {
      // Handle Error Here
      toast.error(err, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-secondary w-40"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-cart-plus"></i>
          </span>
          <span className="btn-inner--text"> Cadastrar produtos</span>
        </button>
      </div>

      <div className="collapse mb-5" id="collapseExample">
        <div className="card card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    id="cnpj"
                    {...register("name")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.name?.message}</span>
              </div>

              <div className="col-md-6">
                <div className={`input-group input-group-outline mt-3`}>
                  <label className="form-label">Versão</label>
                  <input
                    type="text"
                    {...register("version")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.version?.message}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className={`input-group input-group-outline mt-3`}>
                  <label className="form-label">Descrição</label>
                  <input
                    type="text"
                    {...register("descrition")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">
                  {errors?.descrition?.message}
                </span>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <button type="submit" className="btn btn-secondary">
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
