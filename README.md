# Carrito de compras con React Vite, CkakraUI, Yum y Formik

Este proyecto fue designado como Trabajo Integrador Final, del programa de capacitación "Alkemy" de "JavaScript | Ministerio de Trabajo"

El Carrito de compra es un proyecto que permite integrar lo aprendido en una solo proyecto completo. 
Tiene como principales caracteristicas el aprendizaje de React, ChakraUI fue utilizado para integrar un framework con fines de diseño UI/UX. 
Dispone de un formalario de ingreso de datos de usuario, que luego se utiliza, en la simulación de la compra. Tambien un formulario para contacto. 
Esto fue implementado con Formik y Yum para realizar las validaciónes. 

## Caracteristicas

* **Login:** Cuenta con un login con usuario y clave hardcodeado que permite el accesso al carrito de compra y confirmarla. Los datos son gianmonteoavalos@gmail.com como usuario y 1234 como password.
* **Accesso a Api:** El home se realizo mediante la consulta a una api, gratuita que permite consultar una lista de productos con tus atributos, como precio, descripcion, categoria, etc.
* **Formulario de Contacto:** Formulario para realizar consultas, a la empresa.
* **Carrito de compra:** El carrito de compra puede ser modificado desde la home mediante el boton de agregar, quitar, o ingresando al detalle del producto y
* desde allí agregar el producto al carrito. Si deseo agregar más de una unidad puedo hacer click nuevamente en el boton agregar o en boton de "+" situado en el carrito.
* Cada card del home muestra un icono de carrito con una cantidad de productos agregados. En el header se observa otro icono Carrito pero con un contador de productos generales.
* En la vista de carrito, se puede limpiar compras, modificar cantidades individuales, eliminar producto, o confirmar carrito.
* En el caso de confirmar la comprar se dirije a un formulario donde de solicita los datos del cliente para realizar al simulación de facturación,
* enviado el formulario se genera una vista donde se muestra datos de las compras y datos del cliente.
