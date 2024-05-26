create database dulcita;
use dulcita;

/* criando a tabela categorias */

create table categorias (
    id_categoria int auto_increment primary key,
    nome_categoria varchar(255) not null
);