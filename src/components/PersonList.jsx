



export const PersonList = () => {

  const createRows = () => {
    return (
      <tr>
        <td>
          <button className="btn btn-primary">+1</button>
        </td>
        <td>
          <input
            className="form-control"
            placeholder="Nombre"
          />
        </td>
        <td className="text-center"><h3>15</h3></td>
        <td>
          <button className="btn btn-danger">
            Borrar
          </button>
        </td>
      </tr>
    )
  }
  return (
    <>
      <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Votos</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {createRows()}
          </tbody>
      </table>
    </>
  )
}