import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { mask, unMask } from "remask";
import { useState } from "react";
import axios from "axios";
import { removeSpecialCharacters } from "../../helpers/removeSpecialCharacters";
import { toast } from "react-toastify";

const schema = object({
  cnpj: string(),
  corporate_name: string().required("O campo RAZÃO SOCIAL é obrigatório."),
  fantasy_name: string().required("O campo NOME FANTASIA é obrigatório."),
  email: string().required("O campo E-MAIL é obrigatório."),
  phone: string(),
  zipcode: string(),
  adreess: string().required("O campo ENDEREÇO é obrigatório."),
  number: string().required("O campo NÚMERO é obrigatório."),
  complement: string("O campo COMPLEMENTO precisa ser um texto."),
  district: string().required("O campo BAIRRO é obrigatório."),
  city: string().required("O campo CIDADE é obrigatório."),
  state: string(),
});

export const ClientForm = () => {
  // React Hook Form Config
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    data.cnpj = removeSpecialCharacters(document.querySelector("#cnpj").value);
    data.zipcode = removeSpecialCharacters(
      document.querySelector("#zipcode").value
    );
    data.phone = removeSpecialCharacters(
      document.querySelector("#phone").value
    );
    clientRegister(data);
    reset();
  };
  // Inputs Masks
  const [cnpj, setCnpj] = useState();
  const handleCnpjMask = (event) => {
    if (errors.cnpj) errors.cnpj.message = false;
    setCnpj(mask(event.target.value, ["99.999.999/9999-99"]));
  };

  const [zipcode, setZipcode] = useState();
  const handleZipcodeMask = (event) => {
    setZipcode(mask(event.target.value, ["99999-999"]));
  };

  const [phone, setPhone] = useState();
  const handlePhoneMask = (event) => {
    setPhone(mask(event.target.value, ["(99)9-9999-9999"]));
  };

  const [focus, setFocus] = useState(false);
  const [focusCnpj, setFocusCnpj] = useState(false);

  //   Api session
  const apiZipcode = async (event) => {
    const zipcode = event.target.value.replace("-", "");
    const location = await axios(`https://viacep.com.br/ws/${zipcode}/json/`);
    if (location.data) {
      setFocus(true);
      setValue("adreess", location.data.logradouro);
      setValue("complement", location.data.complemento);
      setValue("district", location.data.bairro);
      setValue("city", location.data.localidade);
      setValue("state", location.data.uf);
    }
  };

  const apiCnpj = async (event) => {
    const cnpj = event.target.value
      .replace("-", "")
      .replaceAll(".", "")
      .replace("/", "");
    const result = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://receitaws.com.br/v1/cnpj/${cnpj}`,
      {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      }
    );
    if (result.data) {
      setFocusCnpj(true);
      const dddPhone = result.data.telefone
        .split("/")[0]
        .replace(" ", "")
        .replace("(", "")
        .replace("-", "")
        .split(")");
      const ddd = dddPhone[0];
      const phone = 9 + dddPhone[1];
      const phoneComplete = ddd + phone;
      document.querySelector("#phone").value = mask(phoneComplete, [
        "(99)9-9999-9999",
      ]);
      setValue("email", result.data.email);
      setValue("corporate_name", result.data.nome);
      setValue("fantasy_name", result.data.fantasia);
      setValue("phone", result.data.telefone.split("/")[0]);
    }
  };

  const clientRegister = async (data) => {
    try {
      const resp = await axios.post("http://localhost/api/clients", data);
      if (resp.statusText === "Created") {
        toast.success("Cadastrado com sucesso!", {
          position: "bottom-left",
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
      console.error(err);
    }
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
                    id="cnpj"
                    onBlur={apiCnpj}
                    onChange={handleCnpjMask}
                    inputProps={register("cnpj")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.cnpj?.message}</span>
              </div>

              <div className="col-md-6">
                <div
                  className={`input-group input-group-outline mt-3 ${
                    focusCnpj && "is-focused"
                  }`}
                >
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
                <div
                  className={`input-group input-group-outline mt-3 ${
                    focusCnpj && "is-focused"
                  }`}
                >
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
                <div
                  className={`input-group input-group-outline mt-3 ${
                    focusCnpj && "is-focused"
                  }`}
                >
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
                <div
                  className={`input-group input-group-outline mt-3 ${
                    focusCnpj && "is-focused"
                  }`}
                >
                  <label className="form-label">Telefone</label>
                  <input
                    type="text"
                    value={phone}
                    id="phone"
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
                    value={zipcode}
                    id="zipcode"
                    onBlur={apiZipcode}
                    onChange={handleZipcodeMask}
                    inputProps={register("zipcode")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.zipcode?.message}</span>
              </div>
              <div className="col-md-6">
                <div
                  className={`input-group input-group-outline mt-3 ${
                    focus && "is-focused"
                  }`}
                >
                  <label className="form-label">Endereço</label>
                  <input
                    type="text"
                    {...register("adreess")}
                    className="form-control"
                  />
                </div>
                <span className="text-primary">{errors?.adreess?.message}</span>
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
                <div
                  className={`input-group input-group-outline mt-3 ${
                    focus && "is-focused"
                  }`}
                >
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
                <div
                  className={`input-group input-group-outline mt-3 ${
                    focus && "is-focused"
                  }`}
                >
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
                <div className={`input-group input-group-outline mt-3`}>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    {...register("state")}
                    placeholder="teste"
                  >
                    <option value="">Estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </div>
                <span className="text-primary">{errors?.state?.message}</span>
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
