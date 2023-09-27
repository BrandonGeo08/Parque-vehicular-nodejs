CREATE TABLE `parque_vehicular`.`solidaridad` (
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


  INSERT INTO `parque_vehicular`.`solidaridad` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('196', 'SOLIDARIDAD', 'JOSUE EFRAIN  ', 'ARVIZU', 'CARRIZALEZ', '2023', 'CARGO 150', 'BLANCO', '3H1KA0549PD105320', '30SAT8', '813E8B01XA', 'NO APLICA', 
  '2024/01/19', 'A31992', '2023/01/16', '33,181.97', '5,308.97', '38,490.00', 'BBVA', 'OK');

  INSERT INTO `parque_vehicular`.`solidaridad` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('2', 'SOLIDARIDAD', 'VACANTE ', 'VACANTE ', 'VACANTE ', '2023', 'CARGO 150', 'BLANCO', '3H1KA0543PD105314', '58SBA9', '833E8B00FJ', 'NO APLICA', 
  '2024-02-28', 'A32336', '2023-02-23', '33,181.97', '5,308.97', '38,490.00', 'BBVA', 'OK');

  INSERT INTO `parque_vehicular`.`solidaridad` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('277', 'SOLIDARIDAD', 'LUIS ANTONIO', 'ALVAREZ', 'TORRES', '2023', 'CARGO 150', 'BLANCO', '3H1KA05XPD107562', '91SBC7', '833E8B01XG', 'NO APLICA', 
  '2024-03-17', 'A32559', '2023-03-16', '33,181.97', '5,308.97', '38,490.00', 'BBVA', 'OK');

  INSERT INTO `parque_vehicular`.`solidaridad` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`, `observaciones`) 
  VALUES ('278', 'SOLIDARIDAD', 'JAIR AZAEL', 'SOLIS ', 'AYALA', '2023', 'CARGO 150', 'BLANCO', '3H1KA0545PD102799', '56SCG7', '843E8B00J2', 'NO APLICA', 
  '2024-04-02', 'A32677', '2023-03-30', '33,181.97', '5,308.97', '38,490.00', 'BBVA', 'OK', 'EL DIA 10/07/2023 SE REMPLAZA PLACA 15SBF8 ,  CAMBIO DE PLACA 89SBR1');

  INSERT INTO `parque_vehicular`.`solidaridad` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`, `observaciones`) 
  VALUES ('5', 'SOLIDARIDAD', 'VACANTE ', 'VACANTE ', 'VACANTE ', '2023', 'CARGO 150', 'BLANCO', '3H1KA0549PD107567', '31SBP1', '833E8B019P', 'NO APLICA', 
  '2024-03-09', 'A32487', '2023-03-08', '33,181.97', '5,308.97', '38,490.00', 'BBVA', 'OK', 'SE ACTUALIZO PLACA 74SBC6 POR RECUPERACION DE TARJETA DE CIRCULACION');

  INSERT INTO `parque_vehicular`.`solidaridad` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('245', 'SOLIDARIDAD', 'JESUS', 'AGUIRRE', 'COLORADO', '2023', 'CARGO 150', 'BLANCO', '3H1KA054XRD201838', '51SBS6', '883E8B0089', 'NO APLICA', 
  '2024-07-29', 'A33968', '2023-07-25', '33,021.81', '5,283.49', '38,305.30', 'BBVA ', 'OK');

  INSERT INTO `parque_vehicular`.`solidaridad` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('273', 'SOLIDARIDAD', 'HUMBERTO IVAN', 'ESTRADA', 'FERNANDEZ', '2023', 'CARGO 150', 'BLANCO', '3H1KA0548RD201622', '60SBS6', '883E8B009Q', 'NO APLICA', 
  '2024-07-29', 'A33974', '2023-07-25', '33,021.81', '5,283.49', '38,305.30', 'BBVA', 'OK');

  INSERT INTO `parque_vehicular`.`solidaridad` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, 
  `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) 
  VALUES ('276', 'SOLIDARIDAD', 'JOSE JAIME DANIEL', 'OYERVIDES', 'GARCIA', '2023', 'CARGO 150', 'BLANCO', '3H1KA0545RD201853', '50SBS6', '883E8B008W', 'NO APLICA', 
  '2024-07-29', 'A33967', '2023-07-25', '33,021.81', '5,283.49', '38,305.30', 'BBVA', 'OK');