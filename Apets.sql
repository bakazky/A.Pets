create database Apets;

use Apets;

create table endereco (
id int auto_increment primary key,
rua varchar(100) not null,
numero int not null,
complemento varchar(100) not null,
cidade varchar(100) not null,
estado varchar(100) not null,
cep varchar(9) not null
);

create table usuario (
id int auto_increment primary key,
nome varchar(200) not null,
email varchar(100) not null, 
senha varchar(100) not null,
senha_original varchar(100) not null,
telefone varchar(11) not null,
tipo_usuario varchar(30) not null,
id_endereco int not null,
foreign key (id_endereco) references endereco (id)
);

create table organizacao (
id int auto_increment primary key,
nome varchar(100) not null,
cnpj varchar(14) not null,
email varchar(100) not null,
telefone varchar(11) not null,
id_endereco int not null,
foreign key (id_endereco) references endereco (id)
);

create table animal (
id int auto_increment primary key,
nome varchar(100) not null,
especie varchar(50) not null,
raca varchar(100) not null,
idade int not null,
sexo enum("macho", "femea") not null,
status_animal enum("disponivel", "em andamento", "nao disponivel") not null,
data_cadastro date not null,
id_organizacao int not null,
foreign key (id_organizacao) references organizacao (id)
);

create table doacao (
id int auto_increment primary key,
valor decimal(10,2) not null,
data_doacao date not null,
metodo_pagamento enum("DEBITO", "CREDITO", "PIX", "DINHEIRO") not null,
id_usuario int not null,
id_organizacao int not null,
foreign key (id_usuario) references usuario (id),
foreign key (id_organizacao) references organizacao (id)
);

create table adocao (
id int auto_increment primary key,
data_adocao date not null,
status_adocao enum("disponivel", "em andamento", "nao disponivel") not null,
id_usuario int not null,
id_animal int not null,
foreign key (id_usuario) references usuario (id),
foreign key (id_animal) references animal (id)
);

