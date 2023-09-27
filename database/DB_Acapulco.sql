CREATE TABLE `parque_vehicular`.`acapulco` (
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


INSERT INTO `parque_vehicular`.`acapulco` (`id`, `clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('1', '243', 'ACAPULCO', 'PEDRO FAVIAN', 'MONTERO', '', '2024', 'CARGO 150', 'ROJO', 'LWBKA0297R1100143', '62SBS6', '883E8B006X', 'NO APLICA', '2024/07/29', 'A33976', '2023/07/25', '34,694.22', '5,551.08', '40,245.3', 'BBVA', 'OK');

INSERT INTO `parque_vehicular`.`acapulco` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('275', 'ACAPULCO', 'JUAN CARLOS', 'REYES', 'SANCHEZ', '2023', 'CARGO 150', 'BLANCO', '3H1KA0546PD105310', '50SBB9', '833E8B00WM', 'NO APLICA', '2024-03-04', 'A32425', '2023-03-02', '33,181.97', '5,308.97', '3,8490.00', 'BBVA ', 'BIEN ');

INSERT INTO `parque_vehicular`.`acapulco` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('250', 'ACAPULCO', 'ISAURO', 'SUAREZ', 'MORALES', '2024', 'CARGO 150', 'BLANCO', '3H1KA0548RD201717', '61SBS6', '883E8B0081', 'NO APLICA', '2024-07-29', 'A33975', '2023-07-25', '33,021.81', '5,283.49', '38,305.30', 'BBVA', 'BIEN ');

INSERT INTO `parque_vehicular`.`acapulco` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('235', 'ACAPULCO', 'VICTOR RODOLFO', 'CONTRERAS', 'CASTRO ', '2024', 'CARGO 150', 'BLANCO', '3H1KA0542RD201633', '57SBS6', '883E8B0086', 'NO APLICA', '2024-07-29', 'A33971', '2023-07-25', '33,021.81', '5,283.49', '38,305.30', 'BBVA', 'BIEN ');

INSERT INTO `parque_vehicular`.`acapulco` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('109', 'ACAPULCO', 'JORGE ALEGANDRO', 'RODRIGUEZ ', 'GAYTAN', '2024', 'CARGO 150', 'BLANCO', '3H1KA0543RD201849', '56SBS6', '883E8B009N', 'NO APLICA', '2024-07-29', 'A33972', '2023-07-25', '33,021.81', '5283.49', '38,305.30', 'BBVA', 'BIEN ');

INSERT INTO `parque_vehicular`.`acapulco` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('167', 'ACAPULCO', 'EDGAR ANIBAL ', 'TORRES', 'FAZ', '2023', 'CARGO 150', 'BLANCO', '3H1KA0540PD104573', '29SAZ7', '823E8B02BJ', 'NO APLICA', '2024-02-21', 'A32280', '2023-02-20', '33,181.97', '5,308.97', '38,490.00', 'BBVA', 'BIEN ');

INSERT INTO `parque_vehicular`.`acapulco` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('207', 'ACAPULCO', 'JOSE GUILLERMO', 'JUAREZ', 'VALADEZ', '2024', 'CARGO 150', 'BLANCO', '3H1KA0546RD201845', '58SBS6', '883E8B0098', 'NO APLICA', '2024-07-29', 'A33973', '2023-07-25', '33,021.81', '5,283.49', '38,305.30', 'BBVA', 'BIEN ');

INSERT INTO `parque_vehicular`.`acapulco` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('9999', 'ACAPULCO', 'MARTIN ', 'PEREZ', 'ESPINOZA', '2023', 'CARGO 150 ', 'BLANCO', '3H1KA0543PD105328', '96SAT1', '813E8B003Y', 'NO APLICA', '2023-12-28', 'A31816', '2023-02-20', '33,181.03', '5,308.97', '38,490.00', 'BBVA ', 'BIEN ');

INSERT INTO `parque_vehicular`.`acapulco` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('9998', 'ACAPULCO', 'JESUS ANTONIO ', 'MEDINA ', 'TEJEA ', '2023', 'CARGO 150', 'BLANCO', '3H1KA0541PD104548', '21SAT1', '813E8B00T9', 'NO APLICA', '2024-01-06', 'A31917', '2023-01-04', '33,181.03', '5,308.97', '38,490.00', 'BBVA', 'BIEN ');

INSERT INTO `parque_vehicular`.`acapulco` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('9997', 'ACAPULCO', 'JESUS ALBERTO', 'OJEDA', 'ZAMARRON', '2023', 'CARGO 150', 'BLANCO', '3H1KA0548PD103896', '09SAM7', '8C2E8B015W', 'NO APLICA', '2023-12-09', 'A31646', '2022-05-12', '33,181.03', '5,308.97', '38,490.00', 'BBVA', 'BIEN ');

INSERT INTO `parque_vehicular`.`acapulco` (`clvEmpleado`, `sucursal`, `nomEmpleado`, `apPaterno`, `apMaterno`, `yearModelo`, `modelo`, `colorMoto`, `numSerie`, `numPlacas`, `numPoliza`, `numInciso`, `polizaVencimiento`, `numFactura`, `fechaFactura`, `subtotalFactura`, `ivaFactura`, `totalFactura`, `aseguradora`, `estadoPoliza`) VALUES ('9996', 'ACAPULCO', 'VACANTE', 'VACANTE', 'VACANTE', '2023', 'CARGO 150', 'BLANCO', '3H1KA0548PD102649', '71SCD1', '823E8B02BM', 'NO APLICA', '2024-02-21', 'A32279', '2023-02-20', '33,181.97', '5,308.97', '38,490.00', 'BBVA', 'BIEN ');
