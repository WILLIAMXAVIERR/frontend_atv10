const Table = () => {
    
    return (
<>
        <h1> Atividade 10 </h1>
        <h2> William Xavier Rego - 2314290133 </h2>

        <table border="1">
  <thead>
    <tr>
      <th>Method</th>
      <th>Safe</th>
      <th>Idempotent</th>
      <th>Cacheable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>HEAD</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>OPTIONS</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>TRACE</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>No</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>No</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>No</td>
      <td>No</td>
      <td>Conditional*</td>
    </tr>
    <tr>
      <td>PATCH</td>
      <td>No</td>
      <td>No</td>
      <td>Conditional*</td>
    </tr>
    <tr>
      <td>CONNECT</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
  </tbody>
</table>
</>
    );
}

export default Table;