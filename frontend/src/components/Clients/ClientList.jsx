export const ClientList = ({ clients }) => {
  return (
    <>
      <table className="table mt-4">
        <thead className="table-light">
          <tr>
            <th>Empresa</th>
            <th>CNPJ</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.data &&
            clients.data.map((client) => {
              return (
                <tr key={client.id}>
                  <td>{client.fantasy_name}</td>
                  <td>{client.cnpj}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>
                    <a href="#" className="mx-1">
                      <i className="fa fa-cart-plus"></i>
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa fa-edit"></i>
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {clients.links &&
            clients.links.map((page) => {
              return page.label != "&laquo; Previous" &&
                page.label != "Next &raquo;" ? (
                <li key={page.label} className="page-item">
                  <a className="page-link" href="javascript:;">
                    {page.label}
                  </a>
                </li>
              ) : (
                ""
              );
            })}
        </ul>
      </nav>
    </>
  );
};
