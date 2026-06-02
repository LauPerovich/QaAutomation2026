# Actividad Evaluativa: Automatización de Casos de Prueba y Reporte de Bugs

## Información del Estudiante
* **Nombre:** Laura Perovich
* **Año:** 2026

---

## Descripción del Proyecto
Este repositorio contiene la resolución de la tarea práctica correspondiente a la **Clase 5**. El objetivo principal de la actividad fue la implementación de scripts automatizados y la gestión de defectos sobre la plataforma [Saucedemo](https://saucedemo.com).

El trabajo consistió en:
1. Analizar la suite de casos de prueba provista para la actividad.
2. Automatizar una selección de dichos escenarios utilizando el entorno de pruebas del repositorio.
3. Identificar comportamientos inesperados (defectos) durante la ejecución de los scripts.
4. Documentar y reportar formalmente al menos 3 bugs en la plataforma de gestión.

---

## Estructura del Repositorio
Este proyecto es un *fork* del repositorio base proporcionado en clase (`QaAutomation2026`). Toda la entrega y las modificaciones del código de automatización se estructuraron de manera independiente en esta rama.

* **Rama Activa de la Entrega:** `actividad-clase-5`

---

## 📋 Reporte de Bugs (Trello)
El levantamiento formal de los bugs detectados durante el proceso de pruebas en la plataforma Saucedemo se centralizó en un tablero público.

* **Enlace al Reporte de Bugs:** [Tablero Público de Trello - QA Saucedemo](https://trello.com/invite/b/6a1cbaa1a4ba1b97f5893ee7/ATTIe0a2ff9f30c906483186f4f0e5d8d29c1F2547FD/qaa2026-saucedemo)

---

## 🚀 Instrucciones de Ejecución
Para poder correr las pruebas automatizadas de manera local, siga los siguientes pasos desde su terminal:

### 1. Instalación de Dependencias
Antes de ejecutar los scripts por primera vez, es necesario instalar todos los módulos y paquetes requeridos por el proyecto:
```bash
npm install
```

### 2. Ejecución de las Pruebas
Puede inicializar el entorno de pruebas de Cypress mediante cualquiera de las siguientes modalidades:

* **Modo Interactivo (Test Runner):** Abre la interfaz gráfica para seleccionar y visualizar la ejecución paso a paso.
  ```bash
  npx cypress open
  ```

* **Modo Headless (Consola):** Ejecuta todas las pruebas en segundo plano directamente sobre la terminal.
  ```bash
  npx cypress run
  ```

---

## Tecnologías y Herramientas Utilizadas
* **Framework de Automatización:** [Cypress](https://cypress.io)
* **Gestión y Reporte de Defectos:** [Trello](https://trello.com)
* **Plataforma bajo Prueba (SUT):** [Saucedemo](https://saucedemo.com)
* **Control de Versiones:** Git y GitHub
