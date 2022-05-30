CREATE TABLE utilizador
(
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(32) NOT NULL,
  email VARCHAR(32) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE (email)
);

CREATE TABLE pergunta
(
  pergunta_id INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  tempo INT NOT NULL,
  PRIMARY KEY (pergunta_id),
  UNIQUE (titulo)
);

CREATE TABLE respostas
(
  pontuacao INT NOT NULL,
  resposta_id INT NOT NULL AUTO_INCREMENT,
  resposta VARCHAR(50) NOT NULL,
  resultado NUMERIC(1) NOT NULL,
  pergunta_id INT NOT NULL,
  PRIMARY KEY (resposta_id),
  FOREIGN KEY (pergunta_id) REFERENCES pergunta(pergunta_id),
  UNIQUE (resposta)
);

CREATE TABLE responde
(
  user_id INT NOT NULL,
  pergunta_id INT NOT NULL,
  PRIMARY KEY (user_id, pergunta_id),
  FOREIGN KEY (user_id) REFERENCES utilizador(user_id),
  FOREIGN KEY (pergunta_id) REFERENCES pergunta(pergunta_id)
);