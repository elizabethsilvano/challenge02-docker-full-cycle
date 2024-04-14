CREATE DATABASE IF NOT EXISTS full_cycle;
USE full_cycle;

CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO people (name) VALUES ('Marcos'), ('Aline');