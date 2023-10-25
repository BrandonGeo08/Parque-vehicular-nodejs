CREATE TABLE `parque_vehicular`.`checklist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `nombreEmpleado` VARCHAR(50) NOT NULL,
  `sucursal` VARCHAR(50) NOT NULL,
  `realizocheck` VARCHAR(50) NOT NULL,
  `luzStop` VARCHAR(10) NOT NULL,
  `placas` VARCHAR(10) NOT NULL,
  `espokers` VARCHAR(10) NOT NULL,
  `cadena` VARCHAR(10) NOT NULL,
  `escape` VARCHAR(10) NOT NULL,
  `onPatada` VARCHAR(10) NOT NULL,
  `manijas` VARCHAR(10) NOT NULL,
  `asiento` VARCHAR(10) NOT NULL,
  `tanqueGasolina` VARCHAR(10) NOT NULL,
  `espejos` VARCHAR(10) NOT NULL,
  `odometro` VARCHAR(10) NOT NULL,
  `faroTrasero` VARCHAR(10) NOT NULL,
  `faroDelantero` VARCHAR(10) NOT NULL,
  `direccionalTrasera` VARCHAR(10) NOT NULL,
  `direccionalDelantera` VARCHAR(10) NOT NULL,
  `salpicaderaTrasera` VARCHAR(10) NOT NULL,
  `salpicaderaDelantera` VARCHAR(10) NOT NULL,
  `amortiguadorTrasero` VARCHAR(10) NOT NULL,
  `amortiguadorDelantero` VARCHAR(10) NOT NULL,
  `frenoTrasero` VARCHAR(10) NOT NULL,
  `frenoDelantero` VARCHAR(10) NOT NULL,
  `llantaTrasera` VARCHAR(10) NOT NULL,
  `llantaDelantera` VARCHAR(10) NOT NULL,
  `rines` VARCHAR(10) NOT NULL,
  `tarjetaCirculacionOriginal` VARCHAR(10)
  `tarjetaCirculacionCopia` VARCHAR(10)
  `licenciaCirculacionOriginal` VARCHAR(10)
  `licenciaCirculacionCopia` VARCHAR(10)
  `seguroOriginal` VARCHAR(10) 
  `seguroCopiar` VARCHAR(10) 
  `hologramaOriginal` VARCHAR(10) 
  `hologramaCopia` VARCHAR(10) 
  `otrosDoc` VARCHAR(45)
  `placasCaracteristicas` VARCHAR(45) NOT NULL,
  `marcaCaracteristicas` VARCHAR(45) NOT NULL,
  `modeloCaracteristicas` VARCHAR(45) NOT NULL,
  `versionCaracteristicas` VARCHAR(45) NOT NULL,
  `colorCaracteristicas` VARCHAR(45) NOT NULL,
  `estadoAceiteBueno` VARCHAR(10) 
  `estadoAceiteMalo` VARCHAR(10) 
  `estadoAceiteCambio` VARCHAR(10) 
  `estadoBujiasBueno` VARCHAR(10) 
  `estadoBujiasMalo` VARCHAR(10)
  `estadoBujiasCambio` VARCHAR(10)
  `estadoBalatasDelBueno` VARCHAR(10) 
  `estadoBalatasDelMalo` VARCHAR(10) 
  `estadoBalatasDelCambio` VARCHAR(10) 
  `estadoBalatasTraBueno` VARCHAR(10)
  `estadoBalatasTraMalo` VARCHAR(10)
  `estadoBalatasTraCambio` VARCHAR(10) 
  `estadoFiltroAireBueno` VARCHAR(10) 
  `estadoFiltroAireMalo` VARCHAR(10) 
  `estadoFiltroAireCambio` VARCHAR(10) 
  `estadoLlantasBueno` VARCHAR(10) 
  `estadoLlantasMalo` VARCHAR(10) 
  `estadoLlantasCambio` VARCHAR(10) 
  `kilometraje` INT NOT NULL,
  `proximoServ` DATE NOT NULL,
  `observaciones` VARCHAR (100) 
  PRIMARY KEY (`id`));
