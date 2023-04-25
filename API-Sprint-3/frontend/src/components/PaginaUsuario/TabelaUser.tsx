import { useState } from "react";
import styles from "./PagUsuario.module.css";

export const data = [
  ["Task", "Hours Per Day"],
  ["Ativos", 10],
];

export default function TabelaUser({ acoes }) {


  const [paginaAtual, setPaginaAtual] = useState(1)
  const RegistrosPagina = 10;
  const ultimoIndex = paginaAtual * RegistrosPagina;
  const primeiroIndex = ultimoIndex - RegistrosPagina;
  const records = acoes && acoes.slice && acoes.slice(primeiroIndex, ultimoIndex);
  const totalPaginas = Math.ceil(acoes.length / RegistrosPagina) // Calcula o número total de páginas
  const ultimaPagina = totalPaginas; // Calcula a última página

  function prePage () {
      if (paginaAtual !== 1) {
          setPaginaAtual(paginaAtual - 1)
      }
  }

  function nextPage() {
      if (paginaAtual < ultimaPagina  ) {
          setPaginaAtual(paginaAtual + 1)
      }
  }

  return (
    <div className={styles.containerGeralTableUser}>
      <div className={styles.containerTableDireitaUser}>
        <div className={styles.tableUser}>
          <div className={styles.filtroBarraUser}>
            <span className={styles.filtroUser}>
              <select>
                <option value="" disabled>
                  - Categorias -
                </option>
                <option value="opcao1">Ação</option>
                <option value="opcao2">Data</option>
              </select>
            </span>
            <span className={styles.barraUser}>
              <input type="text" />
              <button>Pesquisar</button>
            </span>
          </div>
          <table>
            <thead>
              <tr>
                <th className={styles.mesclaUser} colSpan={2}>
                  Histórico de atividades da conta
                </th>
              </tr>

              <tr>
                <th>Ação</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {records &&
                records.map &&
                records.map((item, i) => (
                  <tr key={i}>
                    <td>{item.tipo_acao}</td>
                    <td>{item.to_char}</td>
                  </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td className={styles.mesclaUser} colSpan={2}>
                  <div className={styles.paginacaoUser}>
                    <button className={styles.botaoPaginacao01User} onClick={prePage}>◄</button>
                    <button className={styles.botaoPaginacao02User} onClick={nextPage}>►</button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
