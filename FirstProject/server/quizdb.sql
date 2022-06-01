-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Jun-2022 às 02:08
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `quizdb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `pergunta`
--

CREATE TABLE `pergunta` (
  `pergunta_id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `tempo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pergunta`
--

INSERT INTO `pergunta` (`pergunta_id`, `titulo`, `tempo`) VALUES
(1, 'Quais o menor e o maior país do mundo?', 10),
(2, 'Quantas casas decimais tem o número pi?', 10),
(3, 'Atualmente, quantos elementos químicos a tabela pe', 10),
(4, 'Qual o número mínimo de jogadores numa partida de ', 5),
(5, 'Quanto tempo a luz do Sol demora para chegar à Ter', 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `responde`
--

CREATE TABLE `responde` (
  `user_id` int(11) NOT NULL,
  `pergunta_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas`
--

CREATE TABLE `respostas` (
  `pontuacao` int(11) NOT NULL,
  `resposta_id` int(11) NOT NULL,
  `resposta` varchar(50) NOT NULL,
  `resultado` decimal(1,0) NOT NULL,
  `pergunta_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `respostas`
--

INSERT INTO `respostas` (`pontuacao`, `resposta_id`, `resposta`, `resultado`, `pergunta_id`) VALUES
(5, 2, 'Vaticano e Rússia', '1', 1),
(5, 3, 'Infinitas', '1', 2),
(6, 4, '118', '1', 3),
(5, 5, '7', '1', 4),
(5, 6, '8 minutos', '1', 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizador`
--

CREATE TABLE `utilizador` (
  `user_id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `utilizador`
--

INSERT INTO `utilizador` (`user_id`, `username`, `email`, `senha`) VALUES
(1, 'sky', 'indiramadeira17@gmail.com', 'ead781dc411fc220b685eb180d8dee936c7797bd92163e5de4463f2a57ef527c');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `pergunta`
--
ALTER TABLE `pergunta`
  ADD PRIMARY KEY (`pergunta_id`),
  ADD UNIQUE KEY `titulo` (`titulo`);

--
-- Índices para tabela `responde`
--
ALTER TABLE `responde`
  ADD PRIMARY KEY (`user_id`,`pergunta_id`),
  ADD KEY `pergunta_id` (`pergunta_id`);

--
-- Índices para tabela `respostas`
--
ALTER TABLE `respostas`
  ADD PRIMARY KEY (`resposta_id`),
  ADD UNIQUE KEY `resposta` (`resposta`),
  ADD KEY `pergunta_id` (`pergunta_id`);

--
-- Índices para tabela `utilizador`
--
ALTER TABLE `utilizador`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `pergunta`
--
ALTER TABLE `pergunta`
  MODIFY `pergunta_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `respostas`
--
ALTER TABLE `respostas`
  MODIFY `resposta_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `utilizador`
--
ALTER TABLE `utilizador`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `responde`
--
ALTER TABLE `responde`
  ADD CONSTRAINT `responde_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `utilizador` (`user_id`),
  ADD CONSTRAINT `responde_ibfk_2` FOREIGN KEY (`pergunta_id`) REFERENCES `pergunta` (`pergunta_id`);

--
-- Limitadores para a tabela `respostas`
--
ALTER TABLE `respostas`
  ADD CONSTRAINT `respostas_ibfk_1` FOREIGN KEY (`pergunta_id`) REFERENCES `pergunta` (`pergunta_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
