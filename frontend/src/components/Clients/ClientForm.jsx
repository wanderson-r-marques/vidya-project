import { useForm } from "react-hook-form";

export const ClientForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">CNPJ</label>
                  <input
                    type="text"
                    {...register("cnpj")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Razão Social</label>
                  <input
                    type="text"
                    {...register("corporate_name")}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Nome Fantasia</label>
                  <input
                    type="text"
                    {...register("fantasy_name")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">E-mail</label>
                  <input
                    type="text"
                    {...register("email")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Telefone</label>
                  <input
                    type="text"
                    {...register("phone")}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">CEP</label>
                  <input
                    type="text"
                    {...register("zipcode")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Endereço</label>
                  <input
                    type="text"
                    {...register("address")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Número</label>
                  <input
                    type="text"
                    {...register("number")}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Complemento</label>
                  <input
                    type="text"
                    {...register("complement")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Bairro</label>
                  <input
                    type="text"
                    {...register("district")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Cidade</label>
                  <input
                    type="text"
                    {...register("city")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Estado</label>
                  <input
                    type="text"
                    {...register("state")}
                    className="form-control"
                  />
                </div>
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
