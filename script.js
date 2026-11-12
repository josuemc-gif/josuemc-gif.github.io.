const LEVELS = [
  {
    title: "Nivel 1: Introducción a la programación",
    difficulty: "Fácil",
    reward: 5,
    penalty: 3,
    questions: [
          { question: "¿Qué es programar?", options: ["Escribir música con código.", "Dar instrucciones a una máquina para resolver tareas.", "Diseñar una página estática.", "Crear hardware físico."], correctIndex: 1 },
      { question: "¿Qué es un algoritmo?", options: ["Una herramienta gráfica para diseñar interfaces.", "Una secuencia ordenada de pasos para resolver un problema.", "Un lenguaje de programación.", "Una base de datos."], correctIndex: 1 },
      { question: "¿Qué es una variable?", options: ["Un espacio en memoria para guardar un valor.", "Una clase en JavaScript.", "Una función especial.", "Un tipo de error."], correctIndex: 0 },
      { question: "¿Qué es un lenguaje de programación?", options: ["Una colección de símbolos sin significado.", "Un sistema para comunicarse con un ordenador.", "Un archivo de texto vacío.", "Un tipo de navegador."], correctIndex: 1 },
          { question: "¿Qué es una variable en programación?", options: ["Un número", "Un espacio para guardar datos", "Una función", "Un ciclo"], correctIndex: 1 },
      { question: "¿Qué representa un dato entero?", options: ["Un texto.", "Un número sin decimales.", "Una imagen.", "Una lista de archivos."], correctIndex: 1 },
      { question: "¿Qué es un compilador?", options: ["Una máquina que imprime código.", "Un programa que traduce código a lenguaje entendible por la computadora.", "Una base para dibujar una interfaz.", "Una librería de estilos."], correctIndex: 1 },
      { question: "¿Qué hace un IDE?", options: ["Genera energía al equipo.", "Permite escribir, depurar y ejecutar programas.", "Crea videos para redes sociales.", "Convierte texto en sonido."], correctIndex: 1 },
      { question: "¿Cuál es la estructura básica de un programa?", options: ["Entrada, proceso y salida.", "Sonido, texto y video.", "Color, fondo y sombra.", "Ninguna de las anteriores."], correctIndex: 0 },
      { question: "¿Qué es un error de sintaxis?", options: ["Un fallo de operación del sistema.", "Un error al escribir una instrucción con una estructura incorrecta.", "Un problema del teclado.", "Una mala conexión a Internet."], correctIndex: 1 },
      { question: "¿Qué hace console.log()?", options: ["Muestra mensajes en la consola.", "Inicia un servidor web.", "Limpia el disco duro.", "Crea un archivo."], correctIndex: 0 },
      { question: "¿Qué es un comentario en código?", options: ["Una instrucción ejecutada por el programa.", "Un texto útil para documentar el código y no ejecutarse.", "Un valor falso.", "Un operador matemático."], correctIndex: 1 },
      { question: "¿Qué es una instrucción?", options: ["Una orden o acción que el programa ejecuta.", "Un tipo de software antivirus.", "Un formato de imagen.", "Una etiqueta HTML."], correctIndex: 0 },
      { question: "¿Qué significa ejecutar un programa?", options: ["Escribir el código en un cuaderno.", "Hacer que la computadora lo ejecute paso a paso.", "Guardar una imagen.", "Reiniciar el monitor."], correctIndex: 1 },
      { question: "¿Qué es una constante?", options: ["Un valor que no cambia durante la ejecución.", "Una variable sin nombre.", "Un comando de red.", "Un texto vacío."], correctIndex: 0 }
    ]
  },
  {
    title: "Nivel 2: Fundamentos de programación",
    difficulty: "Fácil",
    reward: 5,
    penalty: 3,
    questions: [
      { question: "¿Qué es un tipo de dato?", options: ["Una categoría para clasificar los valores.", "Una acción repetitiva.", "Un bucle especial.", "Un archivo de configuración."], correctIndex: 0 },
      { question: "¿Cuál es un tipo de dato numérico entero?", options: ["'hola'", "42", "true", "['a','b']"], correctIndex: 1 },
      { question: "¿Qué sucede si se intenta reasignar una constante en JavaScript?", options: ["El cambio siempre se acepta.", "Se produce un error.", "Se convierte en una función.", "Se reinicia el navegador."], correctIndex: 1 },
      { question: "¿Qué hace el operador +?", options: ["Compara valores.", "Concatena o suma datos.", "Crea un bucle.", "Reinicia el programa."], correctIndex: 1 },
      { question: "¿Qué es un operador lógico?", options: ["Un símbolo para comparar o combinar condiciones.", "Una variable global.", "Un archivo CSS.", "Una base de datos."], correctIndex: 0 },
      { question: "¿Qué significa && en lógica?", options: ["O", "Y", "No", "Igual"], correctIndex: 1 },
      { question: "¿Qué es la entrada de datos?", options: ["La información que recibe el programa.", "La respuesta del sistema antes de ejecutar.", "El nombre del archivo.", "El estilo visual."], correctIndex: 0 },
      { question: "¿Qué es la salida de datos?", options: ["La forma en que el programa entrega resultados.", "La conexión del teclado.", "El tamaño de la pantalla.", "La carpeta del proyecto."], correctIndex: 0 },
      { question: "¿Cuál es la operación correcta para sumar dos números?", options: ["x * y", "x + y", "x / y", "x % y"], correctIndex: 1 },
      { question: "¿Qué devuelve una comparación con == ?", options: ["Un valor booleano.", "Una imagen.", "Un texto.", "Un objeto."], correctIndex: 0 },
      { question: "¿Qué es una variable local?", options: ["Una variable accesible solo dentro de una función o bloque.", "Una variable global.", "Un tipo de base de datos.", "Un comentario."], correctIndex: 0 },
      { question: "¿Qué es una variable global?", options: ["Una variable accesible desde cualquier parte del programa.", "Una función matemática.", "Un dato temporal.", "Una constante."], correctIndex: 0 },
      { question: "¿Qué hace el operador %?", options: ["Suma valores.", "Calcula el residuo de una división.", "Compara cadenas.", "Crea una clase."], correctIndex: 1 },
      { question: "¿Qué es una cadena?", options: ["Un conjunto de caracteres tipo texto.", "Un tipo de ciclo.", "Un error de compilación.", "Una función de entrada."], correctIndex: 0 },
      { question: "¿Qué representa true?", options: ["Un valor falso.", "Un valor booleano verdadero.", "Un texto vacío.", "Un número negativo."], correctIndex: 1 }
    ]
  },
  {
    title: "Nivel 3: Estructuras de control",
    difficulty: "Intermedia",
    reward: 8,
    penalty: 5,
    questions: [
      { question: "¿Para qué sirve if?", options: ["Para crear ciclos.", "Para ejecutar código solo si se cumple una condición.", "Para definir clases.", "Para guardar datos."], correctIndex: 1 },
      { question: "¿Qué hace else?", options: ["Define un bucle.", "Ejecuta una acción alternativa cuando if es falso.", "Crea una función.", "Declara una variable."], correctIndex: 1 },
      { question: "¿Qué es un switch?", options: ["Una instrucción para evaluar múltiples casos de una variable.", "Un tipo de dato.", "Una librería gráfica.", "Una variable temporal."], correctIndex: 0 },
      { question: "¿Qué hace un for?", options: ["Ejecuta instrucciones un número determinado de veces.", "Valida acceso a una base de datos.", "Modifica el DOM.", "Declara tipos de datos."], correctIndex: 0 },
      { question: "¿Qué es un while?", options: ["Un bucle que se repite mientras una condición sea verdadera.", "Un operador de suma.", "Una clase abstracta.", "Un tipo de base de datos."], correctIndex: 0 },
      { question: "¿Qué es un do while?", options: ["Un bucle que ejecuta al menos una vez antes de validar la condición.", "Un comentario.", "Un operador lógico.", "Un método de array."], correctIndex: 0 },
      { question: "¿Qué pasa si la condición de un while es falsa desde el inicio?", options: ["Se ejecuta una vez.", "Nunca se ejecuta.", "Se convierte en for.", "Se genera un error de compilación."], correctIndex: 1 },
      { question: "¿Cuál es la sintaxis más común de un if?", options: ["if (condicion) { ... }", "switch {}", "for () {}", "class {}"], correctIndex: 0 },
      { question: "¿Qué es una condición?", options: ["Una comparación que puede ser verdadera o falsa.", "Una función de salida.", "Un operador de concatenación.", "Un objeto JSON."], correctIndex: 0 },
      { question: "¿Qué significa else if?", options: ["Una condición alternativa distinta a la principal.", "Una variable especial.", "Una base de datos.", "Un tipo de iteración."], correctIndex: 0 },
      { question: "¿Cuál de estas estructuras se usa para múltiples casos?", options: ["switch", "for", "if", "else"], correctIndex: 0 },
      { question: "¿Qué controla un ciclo for?", options: ["La cantidad de veces que se repite.", "La base de datos.", "El color del texto.", "La dirección del servidor."], correctIndex: 0 },
      { question: "¿Qué es un break dentro de un bucle?", options: ["Termina la ejecución del bucle.", "Evita errores de sintaxis.", "Define una función.", "Carga una variable."], correctIndex: 0 },
      { question: "¿Qué hace continue en un ciclo?", options: ["Detiene el programa.", "Salta la iteración actual y continúa con la siguiente.", "Reinicia la aplicación.", "Declara una base de datos."], correctIndex: 1 },
      { question: "¿Cuál es una ventaja de usar condicionales?", options: ["Tomar decisiones según el estado del programa.", "Reducir la memoria RAM.", "Crear animaciones 3D.", "Configurar el sistema operativo."], correctIndex: 0 }
    ]
  },
  {
    title: "Nivel 4: Programación intermedia",
    difficulty: "Intermedia",
    reward: 8,
    penalty: 5,
    questions: [
      { question: "¿Qué es una función?", options: ["Un bloque de código reutilizable.", "Un dato primitivo.", "Un objeto HTML.", "Una instrucción if."], correctIndex: 0 },
      { question: "¿Qué son los parámetros?", options: ["Valores que una función recibe para operar.", "Valores que no cambian.", "Los nombres de las clases.", "Ciclos anidados."], correctIndex: 0 },
      { question: "¿Qué son los argumentos?", options: ["Los valores reales que se pasan a una función.", "Los objetos del DOM.", "Las variables declaradas globales.", "Los operadores lógicos."], correctIndex: 0 },
      { question: "¿Qué es un arreglo?", options: ["Un conjunto ordenado de valores.", "Una forma de guardar texto.", "Un condicional.", "Un proceso de compilación."], correctIndex: 0 },
      { question: "¿Qué es un objeto?", options: ["Una estructura que agrupa propiedades y métodos.", "Un tipo de bucle.", "Una lista de archivos.", "Una base de datos."], correctIndex: 0 },
      { question: "¿Qué es un método?", options: ["Una función propia de un objeto.", "Una variable de texto.", "Un botón HTML.", "Un tipo de HTML."], correctIndex: 0 },
      { question: "¿Qué es el alcance de una variable?", options: ["La parte del programa donde la variable es visible.", "El tipo de dato que contiene.", "La suma de todos sus valores.", "La cantidad de memoria que consume."], correctIndex: 0 },
      { question: "¿Qué significa return en una función?", options: ["Devuelve un valor al punto donde se llamó la función.", "Sale del programa.", "Crea una clase.", "Elimina un arreglo."], correctIndex: 0 },
      { question: "¿Cómo se accede a un elemento de un arreglo?", options: ["Con su índice.", "Con un switch.", "Con un if.", "Con un comentario."], correctIndex: 0 },
      { question: "¿Qué es la recursividad?", options: ["Una función que se llama a sí misma.", "Un tipo de array.", "Un comentario multilinea.", "Una operación de cálculo."], correctIndex: 0 },
      { question: "¿Qué es un parámetro por defecto?", options: ["Un valor asignado si no se pasa un argumento.", "Un método abstracto.", "Un tipo de switch.", "Un objeto global."], correctIndex: 0 },
      { question: "¿Qué es la desestructuración?", options: ["Extraer valores de arreglos u objetos en variables.", "Un estilo de codificación.", "Un algoritmo de ordenación.", "Una instrucción de salida."], correctIndex: 0 },
      { question: "¿Qué es un método mutante?", options: ["Un método que modifica el objeto de origen.", "Un tipo de variable.", "Un comentario especial.", "Una diferencia entre arrays."], correctIndex: 0 },
      { question: "¿Qué es un callback?", options: ["Una función que se pasa como argumento a otra.", "Un ciclo while.", "Una clase base.", "Una base de datos."], correctIndex: 0 },
      { question: "¿Qué es un scope?", options: ["El contexto en el que una variable o función puede ser accedida.", "Un lenguaje de consulta.", "Un tipo de dato.", "Una estructura de control."], correctIndex: 0 }
    ]
  },
  {
    title: "Nivel 5: Programación orientada a objetos",
    difficulty: "Difícil",
    reward: 12,
    penalty: 8,
    questions: [
      { question: "¿Qué es una clase?", options: ["Una plantilla para crear objetos.", "Un archivo HTML.", "Un arreglo ordenado.", "Una condición."], correctIndex: 0 },
      { question: "¿Qué describe la identidad de un objeto?", options: ["La clase de estilo que lo muestra.", "La referencia que permite distinguir esa instancia de otras.", "El valor de retorno de su constructor.", "La cantidad de métodos estáticos."], correctIndex: 1 },
      { question: "¿Qué es la herencia?", options: ["La capacidad de una clase de reutilizar atributos y métodos de otra.", "Una forma de guardar texto.", "Un ciclo while.", "Una instrucción if."], correctIndex: 0 },
      { question: "¿Qué es el encapsulamiento?", options: ["Ocultar detalles internos y exponer solo lo necesario.", "Crear nuevos arreglos.", "Cambiar el color del DOM.", "Definir acceso a un servidor."], correctIndex: 0 },
      { question: "¿Qué es el polimorfismo?", options: ["La capacidad de objetos distintos de responder de forma distinta al mismo mensaje.", "Un tipo de síntaxis.", "Una prueba de lógica.", "Una variable de texto."], correctIndex: 0 },
      { question: "¿Qué es la abstracción?", options: ["Simplificar entidades complejas para trabajar con lo esencial.", "Un arreglo multinivel.", "Una estructura de repetición.", "Un tipo de dato binario."], correctIndex: 0 },
      { question: "¿Qué es un constructor?", options: ["Un método que inicializa un objeto.", "Una instrucción de salida.", "Un tipo de array.", "Una variable booleana."], correctIndex: 0 },
      { question: "¿Qué significa instanciar una clase?", options: ["Crear un objeto a partir de la clase.", "Compilar el programa.", "Eliminar una función.", "Modificar el HTML."], correctIndex: 0 },
      { question: "¿Qué es una propiedad en un objeto?", options: ["Un dato o atributo del objeto.", "Una representación gráfica.", "Un operador matemático.", "Un archivo JSON."], correctIndex: 0 },
      { question: "¿Qué es un método público?", options: ["Un método accesible desde fuera del objeto.", "Un valor constante.", "Un ciclo repetitivo.", "Un tipo de arreglo."], correctIndex: 0 },
      { question: "¿Qué es un setter?", options: ["Un método para asignar o actualizar un valor de un objeto.", "Un operador de comparación.", "Una prueba del navegador.", "Un tipo de comentario."], correctIndex: 0 },
      { question: "¿Qué es un getter?", options: ["Un método para obtener un valor del objeto.", "Un ciclo for.", "Una variable temporal.", "Una librería de estilos."], correctIndex: 0 },
      { question: "¿Qué es una clase abstracta?", options: ["Una clase pensada para ser heredada, no instanciada directamente.", "Una clase sin propiedades.", "Un archivo de JavaScript.", "Un comentario."], correctIndex: 0 },
      { question: "¿Qué es la sobrecarga?", options: ["Definir varias versiones de un método con distinta firma.", "Una estructura de datos.", "Un tipo de DOM.", "Un operador lógico."], correctIndex: 0 },
      { question: "¿Qué es la composición?", options: ["Crear objetos integrando otros objetos para reutilizar comportamientos.", "Un filtro visual.", "Un tipo de variable local.", "Un bloque if."], correctIndex: 0 }
    ]
  },
  {
    title: "Nivel 6: Desarrollo web",
    difficulty: "Difícil",
    reward: 12,
    penalty: 8,
    questions: [
      { question: "¿Qué lenguaje se usa para estructurar páginas web?", options: ["HTML", "SQL", "Python", "CSS"], correctIndex: 0 },
      { question: "¿Qué lenguaje se usa para dar estilo a una página?", options: ["CSS", "PHP", "C++", "JSON"], correctIndex: 0 },
      { question: "¿Qué lenguaje permite la interactividad en el navegador?", options: ["JavaScript", "Markdown", "Bash", "SQL"], correctIndex: 0 },
      { question: "¿Qué significa DOM?", options: ["Document Object Model", "Data Object Map", "Dynamic Online Module", "Document Operator Method"], correctIndex: 0 },
      { question: "¿Qué es un evento en JavaScript?", options: ["Una acción del usuario o del navegador que dispara código.", "Una clase de CSS.", "Un archivo HTML.", "Un tipo de base de datos."], correctIndex: 0 },
      { question: "¿Qué hace addEventListener?", options: ["Asocia una función a un evento del elemento.", "Crea un servidor.", "Declara una variable.", "Cambia el color del sistema."], correctIndex: 0 },
      { question: "¿Qué es diseño responsivo?", options: ["Diseñar interfaces que se adaptan a distintos tamaños de pantalla.", "Diseñar solo para escritorio.", "Eliminar CSS.", "Crear animaciones en 3D."], correctIndex: 0 },
      { question: "¿Qué es una etiqueta semántica de HTML?", options: ["Una etiqueta con significado claro como header o section.", "Un tipo de variable.", "Un archivo de estilo.", "Una lista de funciones."], correctIndex: 0 },
      { question: "¿Qué es una clase en CSS?", options: ["Un selector para aplicar estilos a varios elementos.", "Un operador lógico.", "Un archivo de JavaScript.", "Un tipo de estructura de control."], correctIndex: 0 },
      { question: "¿Qué son los media queries?", options: ["Reglas para adaptar estilos según el tamaño de la pantalla.", "Consultas a la base de datos.", "Acciones de depuración.", "Operadores matemáticos."], correctIndex: 0 },
      { question: "¿Qué se usa para seleccionar un elemento con id?", options: ["#id", ".class", "element", "*"], correctIndex: 0 },
      { question: "¿Qué se usa para seleccionar todos los elementos de una clase?", options: [".nombreClase", "#nombreClase", "@nombreClase", "nombreClase"], correctIndex: 0 },
      { question: "¿Qué hace querySelector?", options: ["Busca el primer elemento que coincide con un selector.", "Hace una consulta SQL.", "Crea un objeto.", "Compila un documento."], correctIndex: 0 },
      { question: "¿Qué es un formulario HTML?", options: ["Un contenedor para ingresar y enviar datos.", "Un algoritmo de ordenación.", "Un tipo de bucle.", "Un comentario del código."], correctIndex: 0 },
      { question: "¿Qué hace innerHTML?", options: ["Modifica el contenido HTML interno de un elemento.", "Declara una constante.", "Cambía la API del navegador.", "Crea un compilador."], correctIndex: 0 }
    ]
  },
  {
    title: "Nivel 7: Bases de datos",
    difficulty: "Experto",
    reward: 15,
    penalty: 10,
    questions: [
      { question: "¿Qué es una base de datos?", options: ["Un conjunto organizado de datos para consultar y guardar información.", "Un lenguaje de programación.", "Un archivo CSS.", "Un navegador web."], correctIndex: 0 },
      { question: "¿Qué es una tabla en una base de datos?", options: ["Una estructura que almacena registros con columnas definidas.", "Una función recursiva.", "Un evento de JavaScript.", "Un tipo de variable."], correctIndex: 0 },
      { question: "¿Qué es un registro?", options: ["Una fila con datos de una tabla.", "Una función de consulta.", "Un enlace HTML.", "Un dominio web."], correctIndex: 0 },
      { question: "¿Qué es una clave primaria?", options: ["Un identificador único para cada registro.", "Una variable local.", "Un evento del usuario.", "Un arreglo de texto."], correctIndex: 0 },
      { question: "¿Qué es una clave foránea?", options: ["Una clave que referencia la clave primaria de otra tabla.", "Una clase abstracta.", "Un tipo de bucle.", "Un lenguaje de servidor."], correctIndex: 0 },
      { question: "¿Qué es SQL?", options: ["Un lenguaje para consultar y manipular bases de datos.", "Un framework visual.", "Una librería de CSS.", "Un sistema operativo."], correctIndex: 0 },
      { question: "¿Qué hace SELECT?", options: ["Consulta datos de una tabla.", "Inserta una nueva tabla.", "Elimina la base de datos.", "Crea una clase."], correctIndex: 0 },
      { question: "¿Qué hace INSERT INTO?", options: ["Agrega nuevos registros a una tabla.", "Actualiza CSS.", "Crea un objeto.", "Elimina un archivo."], correctIndex: 0 },
      { question: "¿Qué hace UPDATE?", options: ["Modifica registros existentes.", "Borra columnas.", "Recarga la página.", "Define un algoritmo."], correctIndex: 0 },
      { question: "¿Qué hace DELETE?", options: ["Elimina registros de una tabla.", "Crea variables.", "Muestra mensajes en consola.", "Define un if."], correctIndex: 0 },
      { question: "¿Qué es una relación entre tablas?", options: ["La conexión lógica entre datos de diferentes tablas.", "Una estructura HTML.", "Una clase CSS.", "Un bucle for."], correctIndex: 0 },
      { question: "¿Qué es la normalización?", options: ["Organizar datos para evitar redundancias y anomalías.", "Ottimizar CSS.", "Diseñar interfaces.", "Reducer la memoria del sistema."], correctIndex: 0 },
      { question: "¿Qué es un índice?", options: ["Una estructura que acelera la búsqueda de datos.", "Una variable global.", "Un elemento del DOM.", "Un bloque de código."], correctIndex: 0 },
      { question: "¿Qué hace JOIN en SQL?", options: ["Combina filas de dos o más tablas según una condición.", "Copia datos a otra tabla.", "Escribe una función.", "Limpia el navegador."], correctIndex: 0 },
      { question: "¿Qué es un esquema?", options: ["La estructura o definición de una base de datos y sus tablas.", "Una librería visual.", "Un lenguaje de programación.", "Un servicio web."], correctIndex: 0 }
    ]
  },
  {
    title: "Nivel 8: Programación avanzada",
    difficulty: "Experto",
    reward: 15,
    penalty: 10,
    questions: [
      { question: "¿Qué son las estructuras de datos?", options: ["Formas de organizar y almacenar datos para accederlos eficientemente.", "Variables globales.", "Archivos CSS.", "Herramientas del navegador."], correctIndex: 0 },
      { question: "¿Qué es una pila?", options: ["Una estructura LIFO: último en entrar, primero en salir.", "Una función de consulta.", "Una clase abstracta.", "Un evento DOM."], correctIndex: 0 },
      { question: "¿Qué es una cola?", options: ["Una estructura FIFO: primero en entrar, primero en salir.", "Un tipo de bucle.", "Un lenguaje de marcado.", "Una tabla SQL."], correctIndex: 0 },
      { question: "¿Qué puede ocurrir si una función recursiva nunca alcanza un caso base?", options: ["Las llamadas pueden continuar hasta agotar recursos.", "La función se convierte en una variable.", "El código se ejecuta una sola vez.", "El navegador agrega automáticamente un caso base."], correctIndex: 0 },
      { question: "¿Qué es un algoritmo de ordenamiento?", options: ["Un método para ordenar datos.", "Un tipo de variable.", "Un elemento del DOM.", "Un modelo de base de datos."], correctIndex: 0 },
      { question: "¿Qué es el manejo de errores?", options: ["Prever y controlar situaciones inesperadas durante la ejecución.", "Un tipo de CSS.", "Un lenguaje HTML.", "Una base de datos."], correctIndex: 0 },
      { question: "¿Qué es una API?", options: ["Una interfaz para comunicar software entre aplicaciones.", "Un lenguaje SQL.", "Una estructura de control.", "Una etiqueta HTML."], correctIndex: 0 },
      { question: "¿Qué es la asincronía?", options: ["La capacidad de ejecutar tareas sin bloquear el flujo principal.", "Un tipo de ciclo.", "Un objeto CSS.", "Una base de datos."], correctIndex: 0 },
      { question: "¿Qué es una promesa?", options: ["Un objeto que representa un valor futuro y su resultado.", "Una clase base.", "Un lenguaje de consulta.", "Un elemento del DOM."], correctIndex: 0 },
      { question: "¿Qué hace async/await?", options: ["Simplifica el manejo de código asincrónico.", "Crea un bucle infinito.", "Tiene relación con SQL.", "Declara variables globales."], correctIndex: 0 },
      { question: "¿Qué es un árbol binario?", options: ["Una estructura en la que cada nodo tiene como máximo dos hijos.", "Un tipo de base de datos.", "Un evento del navegador.", "Una función de salida."], correctIndex: 0 },
      { question: "¿Qué es un grafo?", options: ["Una estructura formada por nodos conectados por aristas.", "Una variable de texto.", "Una librería visual.", "Una clase HTML."], correctIndex: 0 },
      { question: "¿Qué es Big O?", options: ["Una notación para describir la complejidad temporal o espacial de un algoritmo.", "Un tipo de archivo CSS.", "Un método de acceso a la base de datos.", "Una clase abstracta."], correctIndex: 0 },
      { question: "¿Qué es un algoritmo de búsqueda?", options: ["Un procedimiento para localizar datos dentro de una estructura.", "Una consulta SQL.", "Una variable constante.", "Un operador matemático."], correctIndex: 0 },
      { question: "¿Qué es un stack trace?", options: ["Un registro que muestra la secuencia de llamadas que provocó un error.", "Un elemento HTML.", "Un método de ordenación.", "Una estructura de base de datos."], correctIndex: 0 }
    ]
  }
];

const RETRY_QUESTIONS = [
  [
    { question: "¿Qué representa un diagrama de flujo?", options: ["Los pasos de un proceso mediante símbolos conectados.", "Una lista de variables del sistema.", "Un lenguaje ejecutable.", "Un archivo de datos."], correctIndex: 0 },
    { question: "¿Qué es el pseudocódigo?", options: ["Una versión compilada de un programa.", "Una base de datos temporal.", "Una descripción de un algoritmo con lenguaje sencillo.", "Un tipo de hardware."], correctIndex: 2 },
    { question: "¿Qué se entiende por código fuente?", options: ["Las instrucciones escritas en un lenguaje de programación.", "El resultado de una impresión.", "Una copia de seguridad automática.", "La memoria física del equipo."], correctIndex: 0 },
    { question: "¿Qué hace un intérprete al ejecutar código?", options: ["Diseña pantallas para el usuario.", "Almacena archivos en la nube.", "Reemplaza el sistema operativo.", "Lee y ejecuta instrucciones del programa."], correctIndex: 3 },
    { question: "¿Qué significa depurar un programa?", options: ["Cambiar el nombre del archivo.", "Buscar y corregir errores en el código.", "Traducirlo a otro idioma.", "Borrar todas sus variables."], correctIndex: 1 },
    { question: "¿Qué es el lenguaje máquina?", options: ["Instrucciones codificadas que el procesador puede ejecutar.", "Una colección de diagramas.", "Un editor de texto sencillo.", "Un formato de hoja de cálculo."], correctIndex: 0 },
    { question: "¿Qué representa un literal en el código?", options: ["Una instrucción para repetir acciones.", "Una referencia a una carpeta.", "Un valor escrito directamente en el código.", "Un error del programa."], correctIndex: 2 },
    { question: "¿Qué es un entorno de ejecución?", options: ["Una herramienta para dibujar algoritmos.", "Un conjunto de reglas para nombrar archivos.", "Una conexión entre dos monitores.", "El entorno que permite ejecutar un programa."], correctIndex: 3 },
    { question: "¿Cómo se suele llamar a un defecto que causa un fallo en un programa?", options: ["Un parámetro.", "Un bug.", "Una constante.", "Una salida."], correctIndex: 1 },
    { question: "¿Para qué sirve una prueba de escritorio?", options: ["Para instalar el programa.", "Para medir la velocidad de Internet.", "Para seguir manualmente los pasos y valores de un algoritmo.", "Para cambiar el diseño de una ventana."], correctIndex: 2 },
    { question: "¿Qué suele indicar un error de ejecución?", options: ["Que ocurrió un problema mientras el programa funcionaba.", "Que el teclado está apagado.", "Que la pantalla tiene poco brillo.", "Que el archivo usa una extensión válida."], correctIndex: 0 },
    { question: "¿Para qué sirve documentar un programa?", options: ["Para evitar que el código se ejecute.", "Para cambiar sus resultados automáticamente.", "Para ocupar menos memoria.", "Para explicar su propósito y facilitar su comprensión."], correctIndex: 3 },
    { question: "¿Qué tarea permite realizar un editor de código?", options: ["Reparar componentes físicos.", "Escribir y modificar archivos de código.", "Crear una conexión eléctrica.", "Convertir una imagen en una base de datos."], correctIndex: 1 },
    { question: "¿Qué es una biblioteca de código?", options: ["Un dispositivo que guarda archivos.", "Una lista de errores del sistema.", "Código reutilizable que ofrece funciones o herramientas.", "Un tipo de monitor."], correctIndex: 2 },
    { question: "¿Qué característica debe tener un algoritmo que termina correctamente?", options: ["Debe finalizar después de una cantidad finita de pasos.", "Debe repetir cada paso para siempre.", "Debe depender de Internet.", "Debe usar únicamente números."], correctIndex: 0 }
  ],
  [
    { question: "¿Qué tipo de valor puede guardar una variable booleana?", options: ["Una dirección web.", "Un valor verdadero o falso.", "Una imagen.", "Una lista ordenada."], correctIndex: 1 },
    { question: "¿Cuál de estos valores es un número decimal?", options: ["\"nueve\"", "false", "8.5", "[2, 4]"], correctIndex: 2 },
    { question: "¿Qué operador compara tanto el valor como el tipo en JavaScript?", options: ["===", "=", "+", "%"], correctIndex: 0 },
    { question: "¿Qué operador lógico invierte una condición?", options: ["&&", "||", "==", "!"], correctIndex: 3 },
    { question: "¿Qué es una expresión en programación?", options: ["Una carpeta con archivos.", "Una combinación que se evalúa para producir un valor.", "Un comentario que se ejecuta.", "Una tecla del teclado."], correctIndex: 1 },
    { question: "¿Qué hace el operador ++ aplicado a una variable numérica?", options: ["Aumenta su valor en uno.", "La convierte en texto.", "La elimina de memoria.", "La divide entre dos."], correctIndex: 0 },
    { question: "¿Cuál es el resultado de calcular 10 / 2?", options: ["5", "8", "12", "20"], correctIndex: 0 },
    { question: "¿Qué tipo de dato representa el valor \"42\" entre comillas?", options: ["Booleano.", "Número entero.", "Objeto.", "Cadena de texto."], correctIndex: 3 },
    { question: "¿Qué acción realiza el operador de asignación =?", options: ["Compara dos valores.", "Guarda un valor en una variable.", "Multiplica dos números.", "Invierte una condición."], correctIndex: 1 },
    { question: "¿Qué devuelve typeof 42 en JavaScript?", options: ["\"text\"", "\"boolean\"", "\"number\"", "\"object\""], correctIndex: 2 },
    { question: "¿Qué expresa normalmente el valor null?", options: ["La ausencia intencional de un valor.", "Un número infinito.", "Una cadena con espacios.", "Un ciclo terminado."], correctIndex: 0 },
    { question: "¿Qué indica NaN en JavaScript?", options: ["Una variable nueva.", "Un número negativo.", "Una condición verdadera.", "Un resultado que no es un número válido."], correctIndex: 3 },
    { question: "¿Qué operador representa el OR lógico en JavaScript?", options: ["&&", "||", "!", "==="], correctIndex: 1 },
    { question: "¿Qué valor produce Number(\"8\") en JavaScript?", options: ["El número 8.", "El texto Number.", "El valor false.", "El valor null."], correctIndex: 0 },
    { question: "¿Qué resultado puede producir una expresión booleana?", options: ["Una imagen o un audio.", "Una función o una clase.", "Verdadero o falso.", "Una dirección de archivo."], correctIndex: 2 }
  ],
  [
    { question: "¿Qué operador se usa para escribir una condición ternaria?", options: ["??", "=>", "?:", "&&"], correctIndex: 2 },
    { question: "¿Qué función cumple default dentro de un switch?", options: ["Se ejecuta si ningún case coincide.", "Repite todos los casos.", "Declara una variable global.", "Finaliza siempre el programa."], correctIndex: 0 },
    { question: "¿Qué es un ciclo anidado?", options: ["Un ciclo sin condición.", "Una condición dentro de un dato.", "Un ciclo colocado dentro de otro ciclo.", "Un programa sin instrucciones."], correctIndex: 2 },
    { question: "¿Qué puede ocurrir si la condición de un while nunca cambia?", options: ["El ciclo se convierte en una función.", "El ciclo puede continuar indefinidamente.", "El programa borra la condición.", "El ciclo se ejecuta una vez."], correctIndex: 1 },
    { question: "¿En qué momento se comprueba la condición de do while?", options: ["Antes de ejecutar el cuerpo.", "Solo al cerrar el programa.", "Después de ejecutar el cuerpo del ciclo.", "Nunca se comprueba."], correctIndex: 2 },
    { question: "¿Qué instrucción suele terminar un caso de switch para evitar continuar al siguiente?", options: ["break", "returning", "repeat", "skip"], correctIndex: 0 },
    { question: "¿Qué es una rama en una estructura condicional?", options: ["Un valor almacenado en memoria.", "Un camino de instrucciones elegido según una condición.", "Una repetición sin fin.", "Una operación de suma."], correctIndex: 1 },
    { question: "¿Qué puede pasar si un case de switch no termina con break?", options: ["Se borra el valor evaluado.", "Se reinicia el switch.", "La siguiente rama puede ejecutarse también.", "Se declara una función."], correctIndex: 2 },
    { question: "¿Qué hace continue en la iteración actual de un ciclo?", options: ["Salta al siguiente paso del ciclo.", "Finaliza todos los ciclos.", "Cambia una condición verdadera a falsa.", "Ejecuta una rama default."], correctIndex: 0 },
    { question: "¿Qué expresión suele actualizar el contador de un for?", options: ["Una etiqueta HTML.", "Una condición de salida del programa.", "Una declaración de clase.", "Un incremento o decremento del contador."], correctIndex: 3 },
    { question: "¿Qué describe la condición de salida de un ciclo?", options: ["El nombre de la variable global.", "Cuándo debe dejar de repetirse el ciclo.", "La cantidad de funciones.", "El formato de una cadena."], correctIndex: 1 },
    { question: "Si una condición de if es verdadera en una cadena if/else if, ¿qué ocurre normalmente?", options: ["Se ejecuta esa rama y se omiten las alternativas restantes.", "Se ejecutan todas las ramas.", "El programa convierte if en un ciclo.", "Se borra la condición."], correctIndex: 0 },
    { question: "¿Para qué puede anidarse una condición dentro de otra?", options: ["Para guardar una imagen.", "Para detener la computadora.", "Para comprobar una condición adicional dentro de un caso.", "Para convertir un número en texto."], correctIndex: 2 },
    { question: "¿Qué se evalúa normalmente en cada repetición de un while?", options: ["El título del archivo.", "La cantidad de funciones.", "La salida de pantalla.", "La condición que controla el ciclo."], correctIndex: 3 },
    { question: "¿Qué es un ciclo controlado por contador?", options: ["Un ciclo que usa un contador para controlar sus repeticiones.", "Un ciclo que procesa imágenes.", "Una condición que no se evalúa.", "Un switch con varios valores."], correctIndex: 0 }
  ],
  [
    { question: "¿Qué método de arreglo crea una nueva lista transformando cada elemento?", options: ["map", "push", "pop", "join"], correctIndex: 0 },
    { question: "¿Qué método de arreglo conserva solo los elementos que cumplen una condición?", options: ["shift", "filter", "fill", "join"], correctIndex: 1 },
    { question: "¿Qué método puede combinar los elementos de un arreglo en un solo resultado?", options: ["slice", "unshift", "reduce", "reverse"], correctIndex: 2 },
    { question: "¿Qué es una función flecha en JavaScript?", options: ["Una forma sintáctica de escribir una función usando =>.", "Una función que solo dibuja gráficos.", "Un ciclo que recorre una cadena.", "Una clase sin métodos."], correctIndex: 0 },
    { question: "¿Qué describe una función pura?", options: ["Siempre modifica una variable global.", "Devuelve el mismo resultado para la misma entrada sin efectos secundarios.", "Solo puede ejecutarse una vez.", "No puede recibir parámetros."], correctIndex: 1 },
    { question: "¿Qué es un efecto secundario de una función?", options: ["Un cambio observable fuera de su valor de retorno.", "El nombre de su primer parámetro.", "El resultado de una suma.", "Una función sin cuerpo."], correctIndex: 0 },
    { question: "¿Qué permite el operador spread en un arreglo?", options: ["Detener una función.", "Declarar una condición.", "Expandir sus elementos en otro arreglo o llamada.", "Convertirlo en una clase."], correctIndex: 2 },
    { question: "¿Qué significa que una función sea de orden superior?", options: ["Que recibe funciones o devuelve una función.", "Que solo acepta números enteros.", "Que se ejecuta antes del programa.", "Que no puede retornar valores."], correctIndex: 0 },
    { question: "¿Qué puede devolver una función si no incluye return?", options: ["Siempre cero.", "undefined.", "Una cadena vacía.", "Un error de sintaxis."], correctIndex: 1 },
    { question: "¿Qué palabra clave permite exportar una función desde un módulo ES?", options: ["include", "public", "export", "module"], correctIndex: 2 },
    { question: "¿Qué debe tener una función recursiva para detener sus llamadas?", options: ["Un caso base.", "Una variable global.", "Una clase abstracta.", "Un selector CSS."], correctIndex: 0 },
    { question: "¿Qué ofrece el encadenamiento opcional con ?.?", options: ["Acceso a una propiedad sin error si el valor previo es nullish.", "Una forma de repetir un arreglo.", "Una comparación estricta.", "Una declaración constante."], correctIndex: 0 },
    { question: "¿Qué representa el parámetro rest en una función?", options: ["El primer argumento únicamente.", "Un comentario.", "Los argumentos restantes reunidos en un arreglo.", "Un valor que detiene la función."], correctIndex: 2 },
    { question: "¿Qué ventaja ofrece separar código en módulos?", options: ["Organizar funcionalidades en archivos reutilizables.", "Evitar que se usen funciones.", "Hacer globales todas las variables.", "Eliminar la necesidad de nombres."], correctIndex: 0 },
    { question: "¿Qué es una clausura o closure?", options: ["Una función que conserva acceso al ámbito donde fue creada.", "Una función que termina el navegador.", "Un operador lógico.", "Una lista ordenada de clases."], correctIndex: 0 }
  ],
  [
    { question: "¿Qué es un método estático?", options: ["Un método que pertenece a la clase y no requiere una instancia.", "Un método que solo modifica el HTML.", "Un constructor privado.", "Un atributo sin nombre."], correctIndex: 0 },
    { question: "Dentro de un método de instancia, ¿a qué suele referirse this?", options: ["Siempre a la clase padre.", "Al objeto que está usando el método.", "A la última variable declarada.", "Al archivo de la clase."], correctIndex: 1 },
    { question: "¿Qué significa sobrescribir un método heredado?", options: ["Eliminar toda la clase.", "Cambiar el nombre del constructor.", "Definir en la subclase una versión propia del método.", "Convertirlo en una propiedad CSS."], correctIndex: 2 },
    { question: "¿Cómo se declara un campo privado en una clase moderna de JavaScript?", options: ["Con un signo # al inicio del nombre.", "Con dos puntos al final.", "Con la palabra global.", "Con un asterisco al final."], correctIndex: 0 },
    { question: "¿Para qué se usa super dentro de una subclase?", options: ["Para crear una variable global.", "Para llamar al constructor o métodos de la clase padre.", "Para hacer pública una propiedad.", "Para cerrar el programa."], correctIndex: 1 },
    { question: "¿Qué comprueba el operador instanceof?", options: ["Si un valor es una instancia de cierto constructor o clase.", "Si dos cadenas tienen igual longitud.", "Si una función está vacía.", "Si un archivo es CSS."], correctIndex: 0 },
    { question: "¿Qué es una propiedad estática?", options: ["Una propiedad que pertenece a la clase, no a cada instancia.", "Una propiedad sin valor.", "Un atributo exclusivo del constructor padre.", "Un dato guardado en un arreglo."], correctIndex: 0 },
    { question: "¿Qué es el prototipo de un objeto en JavaScript?", options: ["Un archivo de estilos.", "Un objeto del que puede heredar propiedades y métodos.", "Una función que ordena números.", "Una copia de la interfaz."], correctIndex: 1 },
    { question: "¿Qué describe una asociación entre clases?", options: ["Una relación en la que objetos colaboran o se conocen.", "La eliminación de una clase.", "Una clase sin métodos.", "La conversión de texto a número."], correctIndex: 0 },
    { question: "¿Qué busca normalmente una clase de tipo fábrica?", options: ["Crear y devolver objetos.", "Imprimir el código fuente.", "Reemplazar todos los métodos.", "Convertir una clase en CSS."], correctIndex: 0 },
    { question: "¿Qué es un invariante de una clase?", options: ["Una condición que debe mantenerse válida para sus objetos.", "Una instrucción que detiene el programa.", "Un método sin retorno.", "Una variable que cambia de tipo."], correctIndex: 0 },
    { question: "¿Qué caracteriza a un objeto de valor?", options: ["Se identifica principalmente por sus datos y suele tratarse como inmutable.", "Siempre contiene una base de datos.", "Solo existe como clase abstracta.", "Se identifica por su ubicación en pantalla."], correctIndex: 0 },
    { question: "¿Qué significa delegar comportamiento en programación orientada a objetos?", options: ["Pedir a otro objeto que realice una responsabilidad.", "Duplicar cada método en todas las clases.", "Eliminar relaciones entre objetos.", "Convertir propiedades en variables globales."], correctIndex: 0 },
    { question: "¿Qué indica una relación de composición fuerte entre objetos?", options: ["Que el contenedor administra partes que dependen de él.", "Que dos objetos no pueden comunicarse.", "Que una clase no tiene constructor.", "Que todos los métodos son estáticos."], correctIndex: 0 },
    { question: "¿Qué ventaja puede ofrecer una interfaz en un lenguaje que la admite?", options: ["Definir un contrato de operaciones que una clase debe proporcionar.", "Guardar automáticamente cada instancia.", "Ejecutar métodos sin código.", "Reemplazar todos los tipos de datos."], correctIndex: 0 }
  ],
  [
    { question: "¿Qué suele solicitar una petición HTTP GET?", options: ["Obtener un recurso del servidor.", "Borrar archivos locales.", "Cambiar estilos CSS.", "Cerrar el navegador."], correctIndex: 0 },
    { question: "¿Qué organiza principalmente Flexbox en CSS?", options: ["Elementos en una dimensión, por fila o columna.", "Tablas en una base de datos.", "Eventos del teclado.", "Archivos del servidor."], correctIndex: 0 },
    { question: "¿Para qué sirve la etiqueta meta viewport?", options: ["Adaptar el área de visualización a la pantalla del dispositivo.", "Crear un menú desplegable.", "Enviar datos de formulario.", "Añadir una imagen."], correctIndex: 0 },
    { question: "¿Qué aporta el atributo alt de una imagen?", options: ["Un texto alternativo que describe la imagen.", "Una hoja de estilos automática.", "Una dirección de base de datos.", "Un evento de clic."], correctIndex: 0 },
    { question: "¿Para qué se asocia una etiqueta label con un campo de formulario?", options: ["Para identificar el campo y facilitar su uso.", "Para convertirlo en un enlace externo.", "Para ocultar el valor ingresado.", "Para ejecutar una consulta."], correctIndex: 0 },
    { question: "¿Qué describe la propagación de eventos en el DOM?", options: ["Cómo un evento puede recorrer elementos relacionados en el árbol.", "Cómo se descarga una imagen.", "Cómo se ordenan reglas CSS.", "Cómo se guarda un archivo."], correctIndex: 0 },
    { question: "¿Qué permite hacer la función fetch en el navegador?", options: ["Realizar solicitudes de red y recibir respuestas.", "Crear una clase CSS.", "Cambiar el tamaño de pantalla.", "Compilar HTML a SQL."], correctIndex: 0 },
    { question: "¿Qué tipo de información puede guardar localStorage?", options: ["Pares de claves y valores de texto en el navegador.", "Procesos del sistema operativo.", "Archivos del servidor.", "Conexiones físicas de red."], correctIndex: 0 },
    { question: "¿Qué significa normalmente el código HTTP 404?", options: ["El recurso solicitado no fue encontrado.", "La solicitud se completó correctamente.", "El navegador cambió de idioma.", "El servidor creó una tabla."], correctIndex: 0 },
    { question: "¿Para qué se usa principalmente un elemento a de HTML?", options: ["Crear un enlace a otro recurso o ubicación.", "Agrupar filas de una tabla.", "Definir una condición.", "Aplicar un diseño de cuadrícula."], correctIndex: 0 },
    { question: "¿Qué tipo de contenido suele colocarse dentro de main?", options: ["El contenido principal de la página.", "Solo los metadatos.", "Los estilos globales.", "Los errores del navegador."], correctIndex: 0 },
    { question: "¿Qué controla el modelo de caja de CSS?", options: ["Contenido, relleno, borde y margen de un elemento.", "Los permisos de una base de datos.", "El orden de ejecución de JavaScript.", "La dirección de una solicitud."], correctIndex: 0 },
    { question: "¿En qué se especializa CSS Grid?", options: ["Organizar elementos en filas y columnas.", "Reproducir archivos de audio.", "Validar contraseñas.", "Enviar solicitudes al servidor."], correctIndex: 0 },
    { question: "¿Qué efecto tiene el atributo defer en un script externo?", options: ["Lo ejecuta después de analizar el documento HTML.", "Lo convierte en una hoja de estilos.", "Lo ejecuta antes de descargar el HTML.", "Impide que se cargue."], correctIndex: 0 },
    { question: "¿Qué identifica una URL?", options: ["La ubicación de un recurso en una red.", "El tipo de dato de una variable.", "La clase principal de CSS.", "La memoria del navegador."], correctIndex: 0 }
  ],
  [
    { question: "¿Qué garantiza normalmente una restricción UNIQUE?", options: ["Que ciertos valores no se repitan en una columna o combinación.", "Que todas las filas tengan el mismo valor.", "Que la tabla no tenga columnas.", "Que una consulta no use filtros."], correctIndex: 0 },
    { question: "¿Qué es una transacción en una base de datos?", options: ["Un grupo de operaciones que se trata como una unidad.", "Un tipo de índice visual.", "Una columna calculada del navegador.", "Una instrucción para crear una clase."], correctIndex: 0 },
    { question: "¿Qué significa ACID en el contexto de transacciones?", options: ["Atomicidad, consistencia, aislamiento y durabilidad.", "Acceso, consulta, índice y dato.", "Archivo, copia, inserción y eliminación.", "Autorización, clave, identidad y dominio."], correctIndex: 0 },
    { question: "¿Qué cláusula filtra filas antes de agrupar resultados en SQL?", options: ["WHERE", "ORDER BY", "SELECT", "AS"], correctIndex: 0 },
    { question: "¿Para qué se usa GROUP BY?", options: ["Agrupar filas que comparten valores en ciertas columnas.", "Ordenar archivos del proyecto.", "Eliminar todas las tablas.", "Cambiar el tipo de consulta."], correctIndex: 0 },
    { question: "¿Qué permite filtrar grupos después de aplicar GROUP BY?", options: ["HAVING", "VALUES", "INSERT", "LIMIT"], correctIndex: 0 },
    { question: "¿Qué hace ORDER BY en una consulta SQL?", options: ["Ordena las filas del resultado.", "Agrega una columna.", "Cambia la clave primaria.", "Inicia una transacción."], correctIndex: 0 },
    { question: "¿Qué representa el valor NULL en una columna?", options: ["La ausencia o falta de un valor conocido.", "El número cero en todos los casos.", "Una cadena vacía obligatoria.", "Una clave primaria duplicada."], correctIndex: 0 },
    { question: "¿Qué es una clave primaria compuesta?", options: ["Una clave formada por más de una columna.", "Una clave que siempre contiene texto.", "Una clave compartida por todas las tablas.", "Un índice que no puede consultarse."], correctIndex: 0 },
    { question: "¿Qué es la integridad referencial?", options: ["La coherencia de las referencias entre tablas relacionadas.", "El orden alfabético de todas las columnas.", "Una forma de comprimir copias.", "Un formato de páginas web."], correctIndex: 0 },
    { question: "¿Qué devuelve COUNT(*) en SQL?", options: ["La cantidad de filas seleccionadas.", "El promedio de una columna.", "El nombre de la tabla.", "La primera clave primaria."], correctIndex: 0 },
    { question: "¿Qué es una vista en una base de datos relacional?", options: ["Una consulta guardada que presenta datos como una tabla virtual.", "Una copia física de cada índice.", "Una contraseña de acceso.", "Un archivo de estilos."], correctIndex: 0 },
    { question: "¿Qué instrucción confirma los cambios de una transacción?", options: ["COMMIT", "ROLLBACK", "SELECT", "GROUP"], correctIndex: 0 },
    { question: "¿Qué hace ROLLBACK en una transacción?", options: ["Deshace los cambios no confirmados.", "Ordena filas por fecha.", "Agrega una clave foránea.", "Cuenta las columnas."], correctIndex: 0 },
    { question: "¿Qué ventaja puede ofrecer un índice de base de datos?", options: ["Acelerar ciertas búsquedas, a cambio de espacio y mantenimiento.", "Eliminar la necesidad de guardar datos.", "Garantizar que toda consulta sea más rápida.", "Convertir tablas en páginas web."], correctIndex: 0 }
  ],
  [
    { question: "¿Qué técnica guarda resultados previos para evitar repetir cálculos?", options: ["Memoización.", "Encapsulamiento.", "Normalización.", "Propagación."], correctIndex: 0 },
    { question: "¿Qué caracteriza a la programación dinámica?", options: ["Resolver subproblemas y reutilizar sus resultados.", "Duplicar todos los cálculos.", "Elegir siempre una opción al azar.", "Eliminar las condiciones de salida."], correctIndex: 0 },
    { question: "¿Qué estrategia usa un algoritmo voraz?", options: ["Elegir una opción localmente mejor en cada paso.", "Probar todas las soluciones en paralelo.", "Ordenar siempre los datos al revés.", "Guardar cada resultado en una base de datos."], correctIndex: 0 },
    { question: "¿Qué propiedad mantiene un algoritmo de ordenamiento estable?", options: ["Conserva el orden relativo de elementos con claves iguales.", "Siempre usa memoria constante.", "Ordena únicamente números negativos.", "Produce el mismo arreglo sin importar la entrada."], correctIndex: 0 },
    { question: "¿Qué operación suele ser eficiente en una tabla hash?", options: ["Buscar un valor por su clave, en promedio.", "Recorrer elementos siempre en orden.", "Encontrar el mínimo sin inspeccionar datos.", "Ordenar todos los valores automáticamente."], correctIndex: 0 },
    { question: "¿Qué explora primero una búsqueda en anchura (BFS)?", options: ["Los vecinos por niveles desde el nodo inicial.", "Solo el nodo con mayor valor.", "La ruta más profunda antes de volver.", "Los nodos en orden alfabético."], correctIndex: 0 },
    { question: "¿Qué hace una búsqueda en profundidad (DFS)?", options: ["Explora una rama tanto como puede antes de retroceder.", "Visita solo los nodos del primer nivel.", "Ordena los vértices por tamaño.", "Elimina las aristas repetidas."], correctIndex: 0 },
    { question: "¿Qué propiedad organiza los valores en un heap máximo?", options: ["Cada padre tiene un valor mayor o igual que sus hijos.", "Cada nodo tiene exactamente dos padres.", "Todos los valores aparecen en orden alfabético.", "Cada hoja contiene una clave única."], correctIndex: 0 },
    { question: "¿Qué describe el análisis amortizado de un algoritmo?", options: ["El costo promedio por operación a lo largo de una secuencia.", "El tiempo de una instrucción en todos los equipos.", "El tamaño máximo de un archivo.", "La cantidad de errores de compilación."], correctIndex: 0 },
    { question: "¿Qué busca una condición base en la recursividad?", options: ["Detener las llamadas recursivas cuando se alcanza un caso sencillo.", "Crear un nuevo proceso en cada llamada.", "Repetir el caso más complejo.", "Convertir la función en una clase."], correctIndex: 0 },
    { question: "¿Cuál es la diferencia entre concurrencia y paralelismo?", options: ["La concurrencia organiza tareas que progresan juntas; el paralelismo las ejecuta simultáneamente.", "Son siempre términos idénticos.", "El paralelismo solo existe en bases de datos.", "La concurrencia requiere una única tarea."], correctIndex: 0 },
    { question: "¿Qué papel cumple el event loop en un entorno asíncrono?", options: ["Coordina tareas pendientes cuando el hilo puede atenderlas.", "Ordena las propiedades de una clase.", "Convierte promesas en archivos HTML.", "Elimina la cola de eventos."], correctIndex: 0 },
    { question: "¿Qué es una fuga de memoria?", options: ["Memoria que ya no se necesita pero sigue retenida por referencias.", "Una variable que cambia de nombre.", "Un archivo sin datos.", "Una consulta que retorna cero filas."], correctIndex: 0 },
    { question: "¿Qué implica trabajar con datos inmutables?", options: ["Crear nuevos valores en lugar de modificar los existentes.", "Cambiar cada valor varias veces.", "Guardar todo como texto.", "Evitar el uso de funciones."], correctIndex: 0 },
    { question: "¿Qué ayuda a detectar un perfilador de rendimiento?", options: ["Las partes del programa que consumen más tiempo o recursos.", "La ortografía de los comentarios.", "Las contraseñas del usuario.", "Los colores de una interfaz."], correctIndex: 0 }
  ]
];

const QUESTION_TIME_SECONDS = 20;
const TYPEWRITER_DELAY_MS = 42;
const ANSWER_REVEAL_DELAY_MS = 160;
const PROGRESS_STORAGE_KEY = "aprueba-la-clase-completed-levels";
const QUESTION_HISTORY_STORAGE_KEY = "aprueba-la-clase-seen-questions";
const SAVED_GAMES_STORAGE_KEY = "aprueba-la-clase-saved-games";
const QUESTIONS_PER_LEVEL = 15;

const state = {
  levelIndex: 0,
  questionIndex: 0,
  score: 50,
  completedLevels: 0,
  totalQuestions: 15,
  questionOffset: 0,
  questionDeck: [],
  answerPositionOrder: [],
  usedQuestions: new Set(),
  gameId: null,
  currentLevel: null,
  currentQuestion: null,
  answerLocked: false,
  isPaused: false,
  options: [],
  timerId: null,
  questionTypingId: null
};

const scoreValueEl = document.getElementById("scoreValue");
const scoreFillEl = document.getElementById("scoreFill");
const timerValueEl = document.getElementById("timerValue");
const timerFillEl = document.getElementById("timerFill");
const timerBarEl = timerFillEl.parentElement;
const levelValueEl = document.getElementById("levelValue");
const questionValueEl = document.getElementById("questionValue");
const questionPanelEl = document.getElementById("questionPanel");
const questionTextEl = document.getElementById("questionText");
const answersAreaEl = document.getElementById("answersArea");
const toastEl = document.getElementById("toast");
const resultOverlayEl = document.getElementById("resultOverlay");
const resultTitleEl = document.getElementById("resultTitle");
const resultTextEl = document.getElementById("resultText");
const startScreenEl = document.getElementById("startScreen");
const startButtonEl = document.getElementById("startButton");
const savedGamesButtonEl = document.getElementById("savedGamesButton");
const savedGamesScreenEl = document.getElementById("savedGamesScreen");
const savedGamesBackButtonEl = document.getElementById("savedGamesBackButton");
const savedGamesListEl = document.getElementById("savedGamesList");
const savedGamesEmptyEl = document.getElementById("savedGamesEmpty");
const levelsButtonEl = document.getElementById("levelsButton");
const levelsScreenEl = document.getElementById("levelsScreen");
const levelsBackButtonEl = document.getElementById("levelsBackButton");
const levelsGridEl = document.getElementById("levelsGrid");
const pauseButtonEl = document.getElementById("pauseButton");
const pauseOverlayEl = document.getElementById("pauseOverlay");
const resumeExamButtonEl = document.getElementById("resumeExamButton");
const exitExamButtonEl = document.getElementById("exitExamButton");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getLevelQuestions(levelIndex) {
  return [...LEVELS[levelIndex].questions, ...RETRY_QUESTIONS[levelIndex]];
}

function randomInteger(maxExclusive) {
  const cryptoApi = globalThis.crypto;
  if (!cryptoApi || typeof cryptoApi.getRandomValues !== "function") {
    return Math.floor(Math.random() * maxExclusive);
  }

  const range = 0x100000000;
  const unbiasedLimit = range - (range % maxExclusive);
  const randomValue = new Uint32Array(1);
  do {
    cryptoApi.getRandomValues(randomValue);
  } while (randomValue[0] >= unbiasedLimit);
  return randomValue[0] % maxExclusive;
}

function shuffle(items) {
  const shuffledItems = [...items];
  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = randomInteger(index + 1);
    [shuffledItems[index], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[index]
    ];
  }
  return shuffledItems;
}

function createAnswerPositionOrder(questionCount, optionCount) {
  const order = [];
  for (let index = 0; index < questionCount; index += 1) {
    let answerPosition;
    do {
      answerPosition = randomInteger(optionCount);
    } while (
      index >= 3 &&
      order[index - 1] === answerPosition &&
      order[index - 2] === answerPosition &&
      order[index - 3] === answerPosition
    );
    order.push(answerPosition);
  }
  return order;
}

function updateHud() {
  scoreValueEl.textContent = String(state.score);
  scoreFillEl.style.width = `${state.score}%`;
  levelValueEl.textContent = String(state.levelIndex + 1);
  questionValueEl.textContent = `${state.questionOffset + state.questionIndex + 1} / ${state.totalQuestions}`;
}

function loadCompletedLevels() {
  try {
    const savedValue = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (savedValue === null) {
      return 0;
    }

    const completedLevels = Number(savedValue);
    if (Number.isInteger(completedLevels) && completedLevels >= 0 && completedLevels <= LEVELS.length) {
      return completedLevels;
    }

    console.error("El progreso guardado tiene un formato no válido.");
  } catch (error) {
    console.error("No se pudo cargar el progreso guardado.", error);
  }
  return 0;
}

function saveCompletedLevels() {
  try {
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, String(state.completedLevels));
  } catch (error) {
    console.error("No se pudo guardar el progreso.", error);
  }
}

function loadQuestionHistory() {
  try {
    const savedValue = window.localStorage.getItem(QUESTION_HISTORY_STORAGE_KEY);
    if (savedValue === null) {
      return new Set();
    }

    const questions = JSON.parse(savedValue);
    if (Array.isArray(questions) && questions.every((question) => typeof question === "string")) {
      return new Set(questions);
    }

    console.error("El historial de preguntas guardado tiene un formato no válido.");
  } catch (error) {
    console.error("No se pudo cargar el historial de preguntas.", error);
  }
  return new Set();
}

function saveQuestionHistory() {
  try {
    window.localStorage.setItem(
      QUESTION_HISTORY_STORAGE_KEY,
      JSON.stringify([...state.usedQuestions])
    );
  } catch (error) {
    console.error("No se pudo guardar el historial de preguntas.", error);
  }
}

function loadSavedGames() {
  try {
    const savedValue = window.localStorage.getItem(SAVED_GAMES_STORAGE_KEY);
    if (savedValue === null) {
      return [];
    }

    const savedGames = JSON.parse(savedValue);
    const isValid = Array.isArray(savedGames) && savedGames.every((game) =>
      game &&
      typeof game.id === "string" &&
      Number.isInteger(game.levelIndex) &&
      game.levelIndex >= 0 &&
      game.levelIndex < LEVELS.length &&
      Number.isFinite(game.score) &&
      Number.isInteger(game.questionsAnswered) &&
      Number.isInteger(game.totalQuestions) &&
      game.questionsAnswered >= 0 &&
      game.questionsAnswered <= game.totalQuestions &&
      game.totalQuestions <= QUESTIONS_PER_LEVEL &&
      Number.isFinite(game.savedAt)
    );
    if (isValid) {
      return savedGames;
    }

    console.error("La lista de partidas guardadas tiene un formato no válido.");
  } catch (error) {
    console.error("No se pudieron cargar las partidas guardadas.", error);
  }
  return [];
}

function storeSavedGames(savedGames) {
  try {
    window.localStorage.setItem(SAVED_GAMES_STORAGE_KEY, JSON.stringify(savedGames));
  } catch (error) {
    console.error("No se pudieron guardar las partidas.", error);
  }
}

function saveActiveGame(questionsAnswered = state.questionOffset + state.questionIndex) {
  if (!state.gameId) {
    return;
  }

  const savedGames = loadSavedGames();
  const savedGame = {
    id: state.gameId,
    levelIndex: state.levelIndex,
    score: state.score,
    questionsAnswered,
    totalQuestions: state.totalQuestions,
    savedAt: Date.now()
  };
  const existingIndex = savedGames.findIndex((game) => game.id === state.gameId);
  if (existingIndex === -1) {
    savedGames.unshift(savedGame);
  } else {
    savedGames[existingIndex] = savedGame;
  }
  storeSavedGames(savedGames);
}

function deleteSavedGame(gameId) {
  storeSavedGames(loadSavedGames().filter((game) => game.id !== gameId));
}

function createGameId() {
  const cryptoApi = globalThis.crypto;
  if (cryptoApi && typeof cryptoApi.randomUUID === "function") {
    return cryptoApi.randomUUID();
  }
  return `${Date.now()}-${randomInteger(0x100000000).toString(16)}`;
}

function renderSavedGames() {
  const savedGames = loadSavedGames();
  savedGamesListEl.innerHTML = "";
  savedGamesEmptyEl.hidden = savedGames.length > 0;

  savedGames.forEach((game) => {
    const card = document.createElement("article");
    card.className = "saved-game-card";
    const info = document.createElement("div");
    info.className = "saved-game-info";

    const title = document.createElement("strong");
    title.textContent = LEVELS[game.levelIndex].title;
    const progress = document.createElement("span");
    const displayedQuestion = Math.min(game.questionsAnswered + 1, game.totalQuestions);
    progress.textContent = `Puntos: ${game.score} · Pregunta ${displayedQuestion} / ${game.totalQuestions}`;
    const savedAt = document.createElement("span");
    savedAt.textContent = `Guardada: ${new Date(game.savedAt).toLocaleString()}`;
    info.append(title, progress, savedAt);

    const actions = document.createElement("div");
    actions.className = "saved-game-actions";
    const resumeButton = document.createElement("button");
    resumeButton.type = "button";
    resumeButton.className = "saved-game-resume";
    resumeButton.textContent = "Reanudar";
    resumeButton.addEventListener("click", () => resumeSavedGame(game));
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "saved-game-delete";
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => {
      deleteSavedGame(game.id);
      renderSavedGames();
    });
    actions.append(resumeButton, deleteButton);
    card.append(info, actions);
    savedGamesListEl.appendChild(card);
  });
}

function resumeSavedGame(savedGame) {
  savedGamesScreenEl.classList.add("hidden");
  startScreenEl.classList.add("hidden");
  state.isPaused = false;
  state.gameId = savedGame.id;
  state.levelIndex = savedGame.levelIndex;
  state.score = savedGame.score;
  state.questionOffset = savedGame.questionsAnswered;
  state.totalQuestions = savedGame.totalQuestions;

  if (state.score >= 100) {
    finalizeLevel(true);
    return;
  }
  if (state.score <= 0 || savedGame.questionsAnswered >= savedGame.totalQuestions) {
    finalizeLevel(false);
    return;
  }

  startLevel(savedGame.levelIndex, savedGame);
}

function startNewGame(levelIndex) {
  state.gameId = createGameId();
  state.isPaused = false;
  startLevel(levelIndex);
}

function renderLevels() {
  levelsGridEl.innerHTML = "";

  LEVELS.forEach((level, index) => {
    const isPassed = index < state.completedLevels;
    const hasUnusedQuestions = getLevelQuestions(index).some(
      (question) => !state.usedQuestions.has(question.question)
    );
    const isAvailable = index <= state.completedLevels && hasUnusedQuestions;
    const status = !hasUnusedQuestions
      ? isPassed ? "Aprobado · Agotado" : "Agotado"
      : isPassed ? "Aprobado" : isAvailable ? "Disponible" : "Bloqueado";
    const levelButton = document.createElement("button");
    levelButton.type = "button";
    levelButton.className = `level-card ${isPassed ? "passed" : isAvailable ? "available" : "locked"}`;
    levelButton.disabled = !isAvailable;
    levelButton.setAttribute("aria-label", `${level.title}: ${status}`);

    const levelNumber = document.createElement("span");
    levelNumber.className = "level-card-number";
    levelNumber.textContent = `Nivel ${index + 1}`;
    const levelTitle = document.createElement("span");
    levelTitle.className = "level-card-title";
    levelTitle.textContent = level.title.replace(/^Nivel \d+:\s*/, "");
    const levelStatus = document.createElement("span");
    levelStatus.className = "level-card-status";
    levelStatus.textContent = status;

    levelButton.append(levelNumber, levelTitle, levelStatus);
    if (isAvailable) {
      levelButton.addEventListener("click", () => {
        levelsScreenEl.classList.add("hidden");
        startScreenEl.classList.add("hidden");
        startNewGame(index);
      });
    }
    levelsGridEl.appendChild(levelButton);
  });
}

function stopQuestionTimer() {
  if (state.timerId !== null) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function stopQuestionTyping() {
  if (state.questionTypingId !== null) {
    clearTimeout(state.questionTypingId);
    state.questionTypingId = null;
  }
  questionTextEl.classList.remove("typing");
  state.options.forEach((option) => option.textEl.classList.remove("typing"));
}

function typeText(element, text, onComplete) {
  let visibleCharacters = 0;

  element.textContent = "";
  element.classList.add("typing");
  const typeNextCharacter = () => {
    visibleCharacters += 1;
    element.textContent = text.slice(0, visibleCharacters);

    if (visibleCharacters === text.length) {
      element.classList.remove("typing");
      onComplete();
      return;
    }

    state.questionTypingId = setTimeout(typeNextCharacter, TYPEWRITER_DELAY_MS);
  };

  state.questionTypingId = setTimeout(typeNextCharacter, TYPEWRITER_DELAY_MS);
}

function revealCard(element) {
  element.classList.remove("revealing");
  void element.offsetWidth;
  element.classList.add("revealing");
}

function typeQuestionAndOptions(question) {
  stopQuestionTyping();
  revealCard(questionPanelEl);

  const revealOptions = (index) => {
    if (index >= state.options.length) {
      state.options.forEach((option) => {
        option.button.disabled = false;
      });
      startQuestionTimer();
      return;
    }

    const option = state.options[index];
    revealCard(option.button);
    typeText(option.textEl, option.text, () => {
      state.questionTypingId = setTimeout(
        () => revealOptions(index + 1),
        ANSWER_REVEAL_DELAY_MS
      );
    });
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    questionTextEl.textContent = question;
    state.options.forEach((option) => {
      option.textEl.textContent = option.text;
      option.button.disabled = false;
      revealCard(option.button);
    });
    startQuestionTimer();
    return;
  }

  typeText(questionTextEl, question, () => {
    state.questionTypingId = setTimeout(
      () => revealOptions(0),
      ANSWER_REVEAL_DELAY_MS
    );
  });
}

function startQuestionTimer() {
  stopQuestionTimer();
  const startedAt = performance.now();

  const updateTimer = () => {
    const remaining = Math.max(0, QUESTION_TIME_SECONDS - (performance.now() - startedAt) / 1000);
    timerValueEl.textContent = String(Math.ceil(remaining));
    timerFillEl.style.width = `${(remaining / QUESTION_TIME_SECONDS) * 100}%`;
    timerBarEl.setAttribute("aria-valuenow", String(Math.ceil(remaining)));
    timerBarEl.classList.toggle("timer-low", remaining <= 10);

    if (remaining === 0) {
      stopQuestionTimer();
      handleTimeout();
    }
  };

  updateTimer();
  state.timerId = setInterval(updateTimer, 100);
}

function showToast(message, type) {
  toastEl.textContent = message;
  toastEl.classList.remove("hidden", "success", "error");
  toastEl.classList.add(type === "success" ? "success" : "error", "visible");
  setTimeout(() => {
    toastEl.classList.add("hidden");
    toastEl.classList.remove("visible");
  }, 1000);
}

function showResult(title, text) {
  resultTitleEl.textContent = title;
  resultTextEl.textContent = text;
  resultOverlayEl.classList.remove("hidden");
}

function hideResult() {
  resultOverlayEl.classList.add("hidden");
}

function startLevel(levelIndex, savedGame = null) {
  pauseButtonEl.disabled = true;
  state.levelIndex = levelIndex;
  state.currentLevel = LEVELS[levelIndex];
  state.isPaused = false;
  state.questionOffset = savedGame ? savedGame.questionsAnswered : 0;
  state.score = savedGame ? savedGame.score : 50;
  const savedTotalQuestions = savedGame ? savedGame.totalQuestions : QUESTIONS_PER_LEVEL;
  const remainingQuestionCount = Math.max(0, savedTotalQuestions - state.questionOffset);
  state.questionDeck = shuffle(
    getLevelQuestions(levelIndex).filter(
      (question) => !state.usedQuestions.has(question.question)
    )
  ).slice(0, remainingQuestionCount);
  if (state.questionDeck.length === 0) {
    if (state.gameId) {
      deleteSavedGame(state.gameId);
      state.gameId = null;
    }
    showResult("Preguntas agotadas", `Ya respondiste todas las preguntas disponibles de ${state.currentLevel.title}.`);
    setTimeout(() => {
      hideResult();
      startScreenEl.classList.remove("hidden");
      renderLevels();
      levelsScreenEl.classList.remove("hidden");
    }, 1800);
    return;
  }

  const optionCount = state.questionDeck.length
    ? state.questionDeck[0].options.length
    : 4;
  state.answerPositionOrder = createAnswerPositionOrder(
    state.questionDeck.length,
    optionCount
  );
  state.questionIndex = 0;
  state.totalQuestions = state.questionOffset + state.questionDeck.length;
  updateHud();
  hideResult();
  setTimeout(() => nextQuestion(), 350);
}

function buildOptionButton(optionText, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "option";
  button.dataset.index = String(index);
  button.disabled = true;

  const letter = document.createElement("span");
  letter.className = "letter";
  letter.textContent = String.fromCharCode(65 + index);
  const text = document.createElement("span");
  text.className = "option-text";
  button.append(letter, text);

  button.addEventListener("click", () => handleAnswer(index));
  return button;
}

function resetOptions() {
  answersAreaEl.innerHTML = "";
  state.options = [];
}

function nextQuestion() {
  if (state.questionOffset + state.questionIndex >= state.totalQuestions) {
    finalizeLevel(false);
    return;
  }

  pauseButtonEl.disabled = false;
  const sourceQuestion = state.questionDeck[state.questionIndex];
  state.usedQuestions.add(sourceQuestion.question);
  saveQuestionHistory();
  saveActiveGame(state.questionOffset + state.questionIndex);
  const correctIndex = state.answerPositionOrder[state.questionIndex];
  const shuffledOptions = shuffle(
    sourceQuestion.options.filter((_, index) => index !== sourceQuestion.correctIndex)
  );
  shuffledOptions.splice(correctIndex, 0, sourceQuestion.options[sourceQuestion.correctIndex]);
  const q = {
    ...sourceQuestion,
    options: shuffledOptions,
    correctIndex
  };
  state.currentQuestion = q;
  state.answerLocked = false;
  resetOptions();

  q.options.forEach((optionText, index) => {
    const button = buildOptionButton(optionText, index);
    const optionState = {
      button,
      index,
      text: optionText,
      textEl: button.querySelector(".option-text")
    };
    answersAreaEl.appendChild(button);
    state.options.push(optionState);
    button.style.top = `${index * 86}px`;
  });

  updateHud();
  timerValueEl.textContent = String(QUESTION_TIME_SECONDS);
  timerFillEl.style.width = "100%";
  timerBarEl.setAttribute("aria-valuenow", String(QUESTION_TIME_SECONDS));
  timerBarEl.classList.remove("timer-low");
  typeQuestionAndOptions(q.question);
}

function applyAnswerFeedback(correct, incorrectMessage = "Respuesta incorrecta") {
  const correctIndex = state.currentQuestion.correctIndex;

  state.options.forEach((option) => {
    option.button.disabled = true;
    option.button.classList.toggle("correct", option.index === correctIndex);
    option.button.classList.toggle("wrong", option.index !== correctIndex && option.index === state.lastSelectedIndex);
  });

  if (correct) {
    showToast("¡Respuesta correcta!", "success");
  } else {
    showToast(incorrectMessage, "error");
  }
}

function handleAnswer(selectedIndex) {
  if (state.answerLocked || state.isPaused) {
    return;
  }

  state.answerLocked = true;
  pauseButtonEl.disabled = true;
  stopQuestionTimer();
  state.lastSelectedIndex = selectedIndex;
  const isCorrect = selectedIndex === state.currentQuestion.correctIndex;
  const level = LEVELS[state.levelIndex];
  const delta = isCorrect ? level.reward : -level.penalty;
  state.score = clamp(state.score + delta, 0, 100);
  updateHud();
  saveActiveGame(state.questionOffset + state.questionIndex + 1);
  applyAnswerFeedback(isCorrect);

  setTimeout(advanceAfterAnswer, 1200);
}

function handleTimeout() {
  if (state.answerLocked || state.isPaused) {
    return;
  }

  state.answerLocked = true;
  pauseButtonEl.disabled = true;
  state.lastSelectedIndex = -1;
  const level = LEVELS[state.levelIndex];
  state.score = clamp(state.score - level.penalty, 0, 100);
  updateHud();
  saveActiveGame(state.questionOffset + state.questionIndex + 1);
  applyAnswerFeedback(false, "Tiempo agotado");
  setTimeout(advanceAfterAnswer, 1200);
}

function advanceAfterAnswer() {
  const answeredQuestions = state.questionOffset + state.questionIndex + 1;
  if (state.score >= 100) {
    finalizeLevel(true);
    return;
  }

  if (state.score <= 0 || answeredQuestions >= state.totalQuestions) {
    finalizeLevel(false);
    return;
  }

  state.questionIndex += 1;
  nextQuestion();
}

function finalizeLevel(won) {
  stopQuestionTimer();
  pauseButtonEl.disabled = true;
  if (won) {
    state.completedLevels = Math.max(state.completedLevels, state.levelIndex + 1);
    saveCompletedLevels();
    if (state.completedLevels >= LEVELS.length) {
      if (state.gameId) {
        deleteSavedGame(state.gameId);
        state.gameId = null;
      }
      showResult("Curso completado", "¡Felicidades! Has aprobado la clase final.");
    } else {
      showResult("Aprobado", `Nivel ${state.levelIndex + 1} superado. Preparando el siguiente reto...`);
      setTimeout(() => {
        startLevel(state.completedLevels);
      }, 1800);
      return;
    }
  } else {
    if (state.score <= 0) {
      showResult("Reprobado", `Llegaste a 0 puntos. Vuelve a intentarlo desde el nivel ${state.levelIndex + 1}.`);
    } else {
      showResult("Reprobado", `No alcanzaste 100 puntos en el nivel ${state.levelIndex + 1}.`);
    }

    setTimeout(() => {
      startLevel(state.levelIndex);
    }, 2000);
    return;
  }
}

function pauseExam() {
  if (state.isPaused || state.answerLocked || !state.currentQuestion) {
    return;
  }

  stopQuestionTimer();
  stopQuestionTyping();
  state.options.forEach((option) => {
    option.button.disabled = true;
  });
  state.answerLocked = true;
  state.isPaused = true;
  pauseButtonEl.disabled = true;
  toastEl.classList.add("hidden");
  toastEl.classList.remove("visible");
  saveActiveGame(state.questionOffset + state.questionIndex);
  pauseOverlayEl.classList.remove("hidden");
  resumeExamButtonEl.focus();
}

function resumePausedExam() {
  if (!state.isPaused) {
    return;
  }

  const questionsAnswered = state.questionOffset + state.questionIndex;
  pauseOverlayEl.classList.add("hidden");
  state.isPaused = false;
  startLevel(state.levelIndex, {
    score: state.score,
    questionsAnswered,
    totalQuestions: state.totalQuestions
  });
}

function exitPausedExam() {
  if (!state.isPaused) {
    return;
  }

  state.isPaused = false;
  pauseOverlayEl.classList.add("hidden");
  startScreenEl.classList.remove("hidden");
  startButtonEl.focus();
}

window.addEventListener("DOMContentLoaded", () => {
  state.completedLevels = loadCompletedLevels();
  state.usedQuestions = loadQuestionHistory();

  startButtonEl.addEventListener("click", () => {
    startScreenEl.classList.add("hidden");
    startNewGame(0);
  });

  levelsButtonEl.addEventListener("click", () => {
    renderLevels();
    levelsScreenEl.classList.remove("hidden");
  });

  levelsBackButtonEl.addEventListener("click", () => {
    levelsScreenEl.classList.add("hidden");
  });

  savedGamesButtonEl.addEventListener("click", () => {
    renderSavedGames();
    savedGamesScreenEl.classList.remove("hidden");
  });

  savedGamesBackButtonEl.addEventListener("click", () => {
    savedGamesScreenEl.classList.add("hidden");
  });

  pauseButtonEl.addEventListener("click", pauseExam);
  resumeExamButtonEl.addEventListener("click", resumePausedExam);
  exitExamButtonEl.addEventListener("click", exitPausedExam);
});
