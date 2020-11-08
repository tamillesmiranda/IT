drop database if exists projeto;
create database projeto;
use projeto;
create table horario(
	idhor serial primary key,
    clt varchar(50),
    quantidade int,
    dia varchar(30),
    hora varchar(30)
);	
create table profs(
 idclt serial primary key,
 nome varchar (100)
);