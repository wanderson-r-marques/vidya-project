export const ProductList = ({ products }) => {
  return (
    <>
      <table className="table mt-4">
        <thead className="table-light">
          <tr>
            <th>Produto</th>
            <th>Versão</th>
            <th>Descrição</th>

            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.data &&
            products.data.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.version}</td>
                  <td>{product.descrition}</td>
                  <td className="text-center">
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
          {products.links &&
            products.links.map((page) => {
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
