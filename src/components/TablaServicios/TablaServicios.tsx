"use client";
import styles from "./tablaservicios.module.css";
import Services from "../../data/servicios.json";

export default function TablaServicios() {
  return (
    <div className={styles.container}>
      <h2>Servicios</h2>
      <table id="servicesTable" className={styles.table}>
        <thead>
          <tr>
            <th>Tipo de Servicio</th>
            <th>Tipo de Material</th>
            <th>Precio Full Set</th>
            <th>Precio Service</th>
          </tr>
        </thead>
        <tbody>
          {Services.map((service, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? styles.rowEven : styles.rowOdd}
            >
              <td>{service.tipo_servicio}</td>
              <td>{service.tipo_material}</td>
              <td>consultar</td>
              <td>consultar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
