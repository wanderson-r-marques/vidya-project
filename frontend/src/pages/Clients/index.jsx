import { useEffect } from "react";
import { useState } from "react";
import { ClientForm } from "../../components/Clients/ClientForm";
import { ClientList } from "../../components/Clients/ClientList";
import { Api } from "../../services/axios";

export const Clients = () => {
  const [clients, setClients] = useState({});

  const getClients = async (page) => {
    const url = `clients?page=${page ?? 1}`;
    const result = await Api(url);
    setClients(result.data);
  };

  useEffect(() => {
    getClients();
  }, []);
  return (
    <>
      <div className="row">
        <h2>Clientes</h2>
        <ClientForm />
        <ClientList clients={clients} />
      </div>
    </>
  );
};
