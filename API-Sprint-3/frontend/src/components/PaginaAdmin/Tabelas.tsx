import { Chart } from "react-google-charts";
import styles from "./PagAdmin.module.css";
import { useState } from "react";

export const data = [
  ["Task", "Hours Per Day"],
  ["Ativos", 10],
];

export default function Tabelas({ usersAll, usersActions }) {


  const [paginaAtualUsers, setPaginaAtualUsers] = useState(1)
  const RegistrosPaginaUsers = 10;
  const ultimoIndexUsers = paginaAtualUsers * RegistrosPaginaUsers;
  const primeiroIndexUsers = ultimoIndexUsers - RegistrosPaginaUsers;
  const recordsUsers = usersAll && usersAll.slice && usersAll.slice(primeiroIndexUsers, ultimoIndexUsers);
  const totalPaginasUsers = Math.ceil(usersAll.length / RegistrosPaginaUsers) // Calcula o número total de páginas
  const ultimaPaginaUsers = totalPaginasUsers; // Calcula a última página

  const [paginaAtualActions, setPaginaAtualActions] = useState(1)
  const RegistrosPaginaActions = 10;
  const ultimoIndexActions = paginaAtualActions * RegistrosPaginaActions;
  const primeiroIndexActions = ultimoIndexActions - RegistrosPaginaActions;
  const recordsActions = usersActions && usersActions.slice && usersActions.slice(primeiroIndexActions, ultimoIndexActions);
  const totalPaginasActions = Math.ceil(usersActions.length / RegistrosPaginaActions) // Calcula o número total de páginas
  const ultimaPaginaActions = totalPaginasActions; // Calcula a última página



  function prePageActions () {
    if (paginaAtualActions !== 1) {
      setPaginaAtualActions(paginaAtualActions - 1)
    }
  }

  function nextPageActions() {
    if (paginaAtualActions < ultimaPaginaActions  ) {
      setPaginaAtualActions(paginaAtualActions + 1)
    }
  }

  function prePageUsers () {
    if (paginaAtualUsers !== 1) {
      setPaginaAtualUsers(paginaAtualUsers - 1)
    }
  }

  function nextPageUsers() {
    if (paginaAtualUsers < ultimaPaginaUsers  ) {
      setPaginaAtualUsers(paginaAtualUsers + 1)
    }
  }

  return (
    <div className={styles.containerGeralTables}>
      <div className={styles.containerTablesEsquerda}>
        <div className={styles.tableHistorico}>
          <table>
            <thead>
              <tr>
                <th className={styles.mescla} colSpan={4}>
                  Histórico de atividades do usuário
                </th>
              </tr>
              <tr>
                <th>Usuário</th>
                <th>Ação</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {recordsActions &&
                recordsActions.map &&
                recordsActions.map((item, i) => (
                  <tr key={i}>
                    <td>{item.usuario_nome}</td>
                    <td>{item.tipo_acao}</td>
                    <td>{item.to_char}</td>
                  </tr>
                ))}
            </tbody>
            <tr>
              <td className={styles.mescla} colSpan={4}>
                <div className={styles.paginacao}>
                  <button className={styles.botaoPaginacao01} onClick={prePageActions}>◄</button>
                  <button className={styles.botaoPaginacao02} onClick={nextPageActions}>►</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.tableGrafico}>
          <table>
            <tr>
              <th className={styles.mescla} colSpan={3}>
                Usuários ativos x Usuários inativos
              </th>
            </tr>
            <tr>
              <td>
                <span className={styles.posicaoGrafico}>
                  <Chart
                    chartType="PieChart"
                    data={data}
                    width={"100%"}
                    height={"13rem"}
                  />
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className={styles.containerTableDireita}>
        <div className={styles.filtroBarra}>
          <span className={styles.filtro}>
            <select>
              <option value="" disabled>
                - Categorias -
              </option>
              <option value="opcao1">A-Z</option>
              <option value="opcao2">Data de Criação</option>
            </select>
          </span>
          <span className={styles.barra}>
            <input type="text" />
            <button>Pesquisar</button>
          </span>
        </div>
        <div className={styles.tableUsers}>
          <table>
            <thead>
              <tr>
                <th>Usuários</th>
                <th>Ações</th>
                <th>Data de Criação</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              {recordsUsers &&
                recordsUsers.map &&
                recordsUsers.map((item, i) => (
                  <tr>
                    <td>
                      <span className={styles.situacaoOn}>
                        <input type="button" />
                      </span>
                      <span className={styles.nomeUser}>
                        {item.usuario_nome}
                      </span>
                    </td>
                    <td>
                      <span className={styles.excluir}>
                        <a href="#">
                          <img src="Imagens/excluir.png" alt="excluir" />
                        </a>
                      </span>
                      <span className={styles.editar}>
                        <a href="#">
                          <img src="Imagens/edição.png" alt="editar" />
                        </a>
                      </span>
                    </td>
                    <td>{item.to_char}</td>
                    <td>{item.usuario_status_registro}</td>
                  </tr>
                ))}
            </tbody>

            <tr>
              <td className={styles.mescla} colSpan={4}>
                <div className={styles.paginacao}>
                  <button className={styles.botaoPaginacao01} onClick={prePageUsers}>◄</button>
                  <button className={styles.botaoPaginacao02} onClick={nextPageUsers}>►</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
