import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { mask, unMask } from "remask";
import { useState } from "react";

const schema = object({
  cnpj: string().required("O campo CNPJ é obrigatório."),
  corporate_name: string().required("O campo RAZÃO SOCIAL é obrigatório."),
  fantasy_name: string().required("O campo NOME FANTASIA é obrigatório."),
  email: string().required("O campo E-MAIL é obrigatório."),
  phone: string().required("O campo TELEFONE é obrigatório."),
  zipcode: string().required("O campo CEP é obrigatório."),
  address: string().required("O campo ENDEREÇO é obrigatório."),
  number: string().required("O campo NÚMERO é obrigatório."),
  complement: string("O campo COMPLEMENTO precisa ser um texto."),
  district: string().required("O campo BAIRRO é obrigatório."),
  city: string().required("O campo CIDADE é obrigatório."),
  state: string().required("O campo ESTADO é obrigatório."),
});

export const ClientForm = () => {
  // React Hook Form Config
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);
  // Inputs Masks
  const [cnpj, setCnpj] = useState();
  const handleCnpjMask = (event) => {
    setCnpj(mask(event.target.value, ["99.999.999/9999-99"]));
  };

  const [cep, setCep] = useState();
  const handleCepMask = (event) => {
    setCep(mask(event.target.value, ["99999-999"]));
  };

  const [phone, setPhone] = useState();
  const handlePhoneMask = (event) => {
    setPhone(mask(event.target.value, ["(99)9-9999-9999"]));
  };

  return (
    <>
      <button
        className="btn btn-secondary "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-user"></i>
        </span>
        <span className="btn-inner--text"> Cadastrar cliente</span>
      </button>

      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">CNPJ</label>
                  <input
                    type="text"
                    value={cnpj}
                    onChange={handleCnpjMask}
                    inputProps={register("cnpj")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.cnpj?.message}</span>
              </div>

              <div className="col-md-6">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">Razão Social</label>
                  <input
                    type="text"
                    {...register("corporate_name")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">
                  {errors?.corporate_name?.message}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">Nome Fantasia</label>
                  <input
                    type="text"
                    {...register("fantasy_name")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">
                  {errors?.fantasy_name?.message}
                </span>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">E-mail</label>
                  <input
                    type="text"
                    {...register("email")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.email?.message}</span>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">Telefone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneMask}
                    inputProps={register("phone")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.phone?.message}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">CEP</label>
                  <input
                    type="text"
                    value={cep}
                    onChange={handleCepMask}
                    inputProps={register("cep")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.zipcode?.message}</span>
              </div>
              <div className="col-md-6">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">Endereço</label>
                  <input
                    type="text"
                    {...register("address")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.address?.message}</span>
              </div>
              <div className="col-md-2">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">Número</label>
                  <input
                    type="text"
                    {...register("number")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.number?.message}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">Complemento</label>
                  <input
                    type="text"
                    {...register("complement")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">
                  {errors?.complement?.message}
                </span>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">Bairro</label>
                  <input
                    type="text"
                    {...register("district")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">
                  {errors?.district?.message}
                </span>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">Cidade</label>
                  <input
                    type="text"
                    {...register("city")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.city?.message}</span>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-outline mt-3">
                  <label className="form-label">Estado</label>
                  <input
                    type="text"
                    {...register("state")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.state?.message}</span>
              </div>
            </div>
            <div className="row">
              <div class="col-12">
                <button type="submit" class="btn btn-secondary">
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
