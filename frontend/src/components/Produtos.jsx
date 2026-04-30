import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "projeto-api1-esps-weld.vercel.app/produtos";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({ nome: "", descricao: "" });

  //CONSULTAR  PRODUTOS AO CARREGAR A PÁGINA

 useEffect(() => {
    Produtos();
  }, []);

  const Produtos = async () => {
    try {
      const response = await axios.get(API_URL);
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar Produtos", error);
    }
  };

 


  const criarProduto = async () => {
    if (!novoProduto.nome || !novoProduto.descricao) {
      alert("Campos Obrigatórios");
      return;
    }
    try {
      const response = await axios.post(API_URL, novoProduto);
      setProdutos([...produtos, response.data]);
      setNovoProduto({ nome: "", descricao: "" });
    } catch (error) {
      console.error("Erro ao Cadastrar o Produto", error);
    }
  };

  const handleSubmit = () => {
    criarProduto();
  };

  return (
    
 <div className="container">
            <h1>Cadastro de Produtos</h1>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Nome"
                    value={novoProduto.nome}
                    onChange={(e) => setNovoProduto({ ...novoProduto, nome: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Descrição"
                    value={novoProduto.descricao}
                    onChange={(e) => setNovoProduto({ ...novoProduto, descricao: e.target.value })}
                />
                <button onClick={handleSubmit}>Cadastrar</button>
            </div>
            
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <strong>{produto.nome}</strong> {produto.descricao}
                        <button>Editar</button>
                        <button>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
  )
};

export default Produtos;
