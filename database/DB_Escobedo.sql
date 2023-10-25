CREATE TABLE `parque_vehicular`.`escobedo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clvEmpleado` INT NOT NULL,
  `sucursal` VARCHAR(20) NULL,
  `nomEmpleado` VARCHAR(20) NULL,
  `apPaterno` VARCHAR(20) NULL,
  `apMaterno` VARCHAR(20) NULL,
  `yearModelo` INT NULL,
  `modelo` VARCHAR(20) NULL,
  `colorMoto` VARCHAR(20) NULL,
  `numSerie` VARCHAR(25) NULL,
  `numPlacas` VARCHAR(20) NULL,
  `numPoliza` VARCHAR(20) NULL,
  `numInciso` VARCHAR(20) NULL,
  `polizaVencimiento` DATE NULL,
  `numFactura` VARCHAR(20) NULL,
  `fechaFactura` DATE NULL,
  `subtotalFactura` VARCHAR(20) NULL,
  `ivaFactura` VARCHAR(20) NULL,
  `totalFactura` VARCHAR(20) NULL,
  `aseguradora` VARCHAR(20) NULL,
  `estadoPoliza` VARCHAR(20) NULL,
  `observaciones` VARCHAR(100) NULL,
  PRIMARY KEY (`id`)
  );

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('269', 'ESCOBEDO ', 'GUILLERMO', 'AVILA ', 'DIAZ', '2023', 'CARGO 150', '3H1KA0548PD103896', '78SAP7', '813E8B003Q', 'NO APLICA', 
  '2023-12-28', 'A31815', '2023-12-22', '33,181.03', '5,308.97', '38,490.00', 'BBVA', 'BIEN ');

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`) 
  VALUES ('248', 'ESCOBEDO', 'CRISTOPHER ALEJANDRO', 'ALEMAN', 'HERNANDEZ', '2023', 'CARGO 150', '', '3H1KA0544PD105306', '29SAT8', '813E8B01YO', 'NO APLICA',
   '2024-01-19', 'A31991', '2023-01-16', '33,181.03', '5,308.97', '38,490.00', 'BBVA');
  
  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('9999', 'ESCOBEDO', 'KEVIN ALBERTO', 'JARAMILLO ', 'VARGAS', '2023', 'CARGO 150', '', '3HIKA054XPD100899', '76SAG2', '7B2B0502B3', 'NO APLICA', 
  '2023-11-14', 'A31468', '2023-11-11', '33,181.03', '5,308.97', '38,490.00', 'BBVA', 'BIEN ');

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('9998', 'ESCOBEDO', 'VACANTE', 'VACANTE', 'VACANTE', '2023', 'CARGO 150 ', '', '3HIKA0542PD105286', '59SBA9', '833E8B00FL', 'NO APLICA', 
  '2024-02-28', 'A32335', '2023-02-23', '33,181.03', '5,308.97', '38,490.00', 'BBVA', 'BIEN ');

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('000265', 'ESCOBEDO ', 'ISAI ', 'ORTIZ', 'UREÑO ', '2023', 'CARGO 150', '', '3H1KA054XPD100918', '31SBR2', '7b2b0502b3', 'NO APLICA', 
  '2023-11-14', 'A31470', '2022-11-11', '33,181.03', '5,308.97', '38,490.00', 'BBVA', 'BIEN ');

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('249', 'ESCOBEDO', 'BRANDON URIEL ', 'CAZARES ', 'AGUILAR', '2024', 'CARGO 150', '3H1KA0540RD201629', '52SBS6', '883E8B008L', 'NO APLICA', 
  '2024-07-29', 'A33968', '2023-07-25', '33,021.81', '5,283.49', '38,305.3', 'BBVA', 'BIEN ');

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('270', 'ESCOBEDO', 'RICARDO DANIEL ', 'SALAZAR ', 'ALVAREZ ', '2023', 'CARGO 150', '3H1KA0548PD103266 ', '71SBC6', '833E8B0191', 'NO APLICA ', 
  '2023-03-09', 'A32486', '2023-03-08', '33,021.81', '5,283.49', '38,305.30', 'BBVA', 'BIEN ');

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`, `observaciones`) 
  VALUES ('243', 'ESCOBEDO', 'FAVIAN ', 'MONTERO ', 'PEDRO ', '2024', 'GL-150', 'LWBKA0297R1100143', '62SBS6', '883E8B006X', 'NO APLICA ', 
  '2024-07-29', 'A33976', '2023-07-25', '34,694.22', '5,551.08', '40,245.30', 'BBVA', 'BIEN ', 'MOTO NUEVA 2024');

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`, `observaciones`) 
  VALUES ('245', 'ESCOBEDO', 'JESUS ', 'AGUIRRE ', 'COLORADO', '2024', 'CARGO 150', '3H1KA054XRD201833', '51SBS6', '883E8B0089', 'NO APLICA', 
  '2023-07-29', 'A33968', '2023-07-25', '33,021.8', '5,283.49', '38,305.30', 'BBVA', 'BIEN ', 'MOTO NUEVA 2024');

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('161', 'ESCOBEDO ', 'IVAN ISRAEL ', 'SANCHEZ ', 'ORTIZ ', '2024', 'GL 150', '', 'LWBKA0293P1801954', '89SAY3', '823E8B01R6', 'NO APLICA ', 
  '2024-02-15', 'A32201', '2023-02-10', '34,474.14', '5,515.86', '39,990.00', 'BBVA ', 'BIEN ');

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('9997', 'ESCOBEDO ', 'VACANTE ', 'VACANTE ', 'VACANTE ', '2024', 'GL 150', '', '3H1KA0543PD102638', '16SBR5', '8C2E8B0XU', 'NO APLICA', 
  '2023-12-20', 'A316B2', '2023-02-09', '33,181.03', '5,308.97', '38,490.00', 'BBVA ', 'BIEN ');

  INSERT INTO `parque_vehicular`.`escobedo` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `numSerie`, `numPlacas`, 
  `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`, `observaciones`) 
  VALUES ('238', 'ESCOBEDO', 'ERICK ', 'ALVARADO ', 'MIRANDA', '2024', 'GL 150', '3H1KA0541RD201851', '59SBS6', '883E8B008R', 'NO APLICA ', 
  '2024-07-29', 'A33970', '2023-07-25', '33,021.8', '5,283.49', '38,305.30', 'BBVA ', 'BIEN ', 'MOTO NUEVA 2024');

  ALTER TABLE escobedo
    ADD timeago TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP