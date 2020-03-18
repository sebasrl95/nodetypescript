CREATE DATABASE nodetypescript;
USE nodetypescript;

CREATE TABLE tbl_menu (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	active INT NOT NULL,
	weight INT NOT NULL,
	date TIMESTAMP,
	PRIMARY KEY(id)
);

INSERT INTO tbl_menu (name,active,weight,date) VALUES ("Accede a información", 1, 1, current_timestamp());
INSERT INTO tbl_menu (name,active,weight,date) VALUES ("Contrata soluciones", 0, 2, current_timestamp());
INSERT INTO tbl_menu (name,active,weight,date) VALUES ("Ayuda", 0, 3, current_timestamp());
INSERT INTO tbl_menu (name,active,weight,date) VALUES ("Blog", 1, 4, current_timestamp());
INSERT INTO tbl_menu (name,active,weight,date) VALUES ( "Regístrate", 0, 5, current_timestamp());