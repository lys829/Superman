-- init database

drop database if exists monitor;

create database monitor;

use monitor;

grant select, insert, update, delete on monitor.* to 'root'@'localhost' identified by 'root';

create table users (
    `id` int AUTO_INCREMENT not null,
    `password` varchar(50) not null,
    `admin` bool not null,
    `username` varchar(500) not null,
    `avatar` varchar(500) not null,
    `created_at` real not null,
    unique key `idx_email` (`username`),
    key `idx_created_at` (`created_at`),
    primary key (`id`)
) engine=innodb default charset=utf8;
