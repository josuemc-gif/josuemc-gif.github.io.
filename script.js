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
      { question: "¿Qué es una constante?", options: ["Un dato que cambia en tiempo real.", "Un dato fijo durante la ejecución.", "Un nombre de función.", "Una etiqueta HTML."], correctIndex: 1 },
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
      { question: "¿Qué es un objeto?", options: ["Una instancia creada a partir de una clase.", "Una variable global.", "Un archivo CSS.", "Un comentario."], correctIndex: 0 },
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
      { question: "¿Qué es la recursividad?", options: ["Cuando una función se llama a sí misma para resolver un problema.", "Un bloque switch.", "Un evento de clic.", "Un comentario."], correctIndex: 0 },
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

const state = {
  levelIndex: 0,
  questionIndex: 0,
  score: 50,
  totalQuestions: 15,
  currentLevel: null,
  currentQuestion: null,
  answerLocked: false,
  options: [],
  frameId: null,
  lastTimestamp: 0,
  timeoutTriggered: false,
  teacherAnimationTimer: null,
  studentAnimationTimer: null
};

const SPRITE_ANIMATIONS = {
  teacher: {
    "teacher-idle": { row: 0, frames: [0], duration: 150, loop: false },
    "teacher-active": { row: 0, frames: [0, 1, 2, 3, 4, 5], duration: 150, loop: true },
    "teacher-angry": { row: 1, frames: [0, 1, 2, 3, 4, 5], duration: 120, loop: false },
    "teacher-happy": { row: 2, frames: [0, 1, 2, 3, 4, 5], duration: 120, loop: false },
    "teacher-sad": { row: 3, frames: [0, 1, 2, 3, 4, 5], duration: 140, loop: false },
    "teacher-approved": { row: 4, frames: [0, 1, 2, 3, 4, 5], duration: 120, loop: false },
    "teacher-failed": { row: 5, frames: [0, 1, 2, 3, 4, 5], duration: 120, loop: false }
  },
  student: {
    "student-idle": { row: 0, frames: [2], duration: 150, loop: false },
    "student-correct": { row: 0, frames: [2, 3, 4, 5, 6, 7], duration: 130, loop: false },
    "student-wrong": { row: 1, frames: [2, 3, 4, 5, 6, 7], duration: 130, loop: false },
    "student-timedout": { row: 2, frames: [2, 3, 4, 5, 6, 7], duration: 140, loop: false },
    "student-passed": { row: 3, frames: [2, 3, 4, 5, 6, 7], duration: 130, loop: false }
  }
};

const scoreValueEl = document.getElementById("scoreValue");
const scoreFillEl = document.getElementById("scoreFill");
const levelValueEl = document.getElementById("levelValue");
const questionValueEl = document.getElementById("questionValue");
const questionTextEl = document.getElementById("questionText");
const answersAreaEl = document.getElementById("answersArea");
const toastEl = document.getElementById("toast");
const resultOverlayEl = document.getElementById("resultOverlay");
const resultTitleEl = document.getElementById("resultTitle");
const resultTextEl = document.getElementById("resultText");
const teacherEl = document.getElementById("teacher");
const studentEl = document.getElementById("student");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateHud() {
  scoreValueEl.textContent = String(state.score);
  scoreFillEl.style.width = `${state.score}%`;
  levelValueEl.textContent = String(state.levelIndex + 1);
  questionValueEl.textContent = `${state.questionIndex + 1} / ${state.totalQuestions}`;
}

function playSpriteAnimation(element, character, mood) {
  const animations = SPRITE_ANIMATIONS[character];
  const animation = animations[mood];
  const timerKey = `${character}AnimationTimer`;
  const frameWidth = character === "teacher" ? 160 : 144;
  const frameHeight = character === "teacher" ? 128 : 192;

  if (state[timerKey] !== null) {
    clearInterval(state[timerKey]);
    state[timerKey] = null;
  }

  element.setAttribute("aria-label", mood.replace(/^(teacher|student)-/, "").replace("-", " "));

  let frameIndex = 0;
  const renderFrame = () => {
    const frame = animation.frames[frameIndex];
    element.style.backgroundPosition = `${-frame * frameWidth}px ${-animation.row * frameHeight}px`;
  };
  renderFrame();

  if (animation.frames.length === 1 && !animation.loop) {
    return;
  }

  state[timerKey] = setInterval(() => {
    if (frameIndex === animation.frames.length - 1) {
      if (!animation.loop) {
        clearInterval(state[timerKey]);
        state[timerKey] = null;
        return;
      }
      frameIndex = 0;
    } else {
      frameIndex += 1;
    }

    renderFrame();
  }, animation.duration);
}

function setTeacherMood(mood) {
  playSpriteAnimation(teacherEl, "teacher", mood);
}

function setStudentMood(mood) {
  playSpriteAnimation(studentEl, "student", mood);
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

function startLevel(levelIndex) {
  state.levelIndex = levelIndex;
  state.currentLevel = LEVELS[levelIndex];
  state.questionIndex = 0;
  state.score = 50;
  state.totalQuestions = 15;
  updateHud();
  hideResult();
  setTeacherMood("teacher-idle");
  setStudentMood("student-idle");
  setTimeout(() => nextQuestion(), 350);
}

function buildOptionButton(optionText, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "option";
  button.dataset.index = String(index);
  button.innerHTML = `<span class="letter">${String.fromCharCode(65 + index)}</span>${optionText}`;
  button.addEventListener("click", () => handleAnswer(index));
  return button;
}

function resetOptions() {
  answersAreaEl.innerHTML = "";
  state.options = [];
  cancelAnimationFrame(state.frameId);
}

function nextQuestion() {
  if (state.questionIndex >= state.totalQuestions) {
    finalizeLevel(false);
    return;
  }

  const currentLevel = LEVELS[state.levelIndex];
  const q = currentLevel.questions[state.questionIndex];
  state.currentQuestion = q;
  state.answerLocked = false;
  state.timeoutTriggered = false;
  questionTextEl.textContent = q.question;
  resetOptions();

  q.options.forEach((optionText, index) => {
    const button = buildOptionButton(optionText, index);
    const optionState = {
      button,
      index,
      y: index * 82,
      speed: 42 + (state.levelIndex * 6) + (state.questionIndex * 0.8)
    };
    answersAreaEl.appendChild(button);
    state.options.push(optionState);
    button.style.transform = `translateX(-50%) translateY(${optionState.y}px)`;
  });

  setTeacherMood("teacher-active");
  setStudentMood("student-idle");
  updateHud();
  animateOptions();
}

function animateOptions() {
  if (state.answerLocked) {
    return;
  }

  state.options.forEach((option) => {
    option.y += option.speed * 0.016;
    option.button.style.transform = `translateX(-50%) translateY(${option.y}px)`;
  });

  const lastOption = state.options[state.options.length - 1];
  if (lastOption.y >= 290 && !state.timeoutTriggered) {
    state.timeoutTriggered = true;
    handleTimeout();
    return;
  }

  state.frameId = requestAnimationFrame(animateOptions);
}

function applyAnswerFeedback(correct) {
  const correctIndex = state.currentQuestion.correctIndex;

  state.options.forEach((option) => {
    option.button.disabled = true;
    option.button.classList.toggle("correct", option.index === correctIndex);
    option.button.classList.toggle("wrong", option.index !== correctIndex && option.index === state.lastSelectedIndex);
  });

  if (correct) {
    setTeacherMood("teacher-happy");
    setStudentMood("student-correct");
    showToast("¡Respuesta correcta!", "success");
  } else {
    setTeacherMood("teacher-angry");
    setStudentMood("student-wrong");
    showToast("Respuesta incorrecta", "error");
  }
}

function handleAnswer(selectedIndex) {
  if (state.answerLocked) {
    return;
  }

  state.answerLocked = true;
  state.lastSelectedIndex = selectedIndex;
  cancelAnimationFrame(state.frameId);
  const isCorrect = selectedIndex === state.currentQuestion.correctIndex;
  const level = LEVELS[state.levelIndex];
  const delta = isCorrect ? level.reward : -level.penalty;
  state.score = clamp(state.score + delta, 0, 100);
  updateHud();
  applyAnswerFeedback(isCorrect);

  setTimeout(() => {
    const answeredQuestions = state.questionIndex + 1;
    if (state.score >= 100) {
      finalizeLevel(true);
      return;
    }

    if (state.score <= 0) {
      finalizeLevel(false);
      return;
    }

    if (answeredQuestions >= state.totalQuestions) {
      finalizeLevel(false);
      return;
    }

    state.questionIndex += 1;
    nextQuestion();
  }, 1200);
}

function handleTimeout() {
  if (state.answerLocked) {
    return;
  }

  state.answerLocked = true;
  cancelAnimationFrame(state.frameId);
  const level = LEVELS[state.levelIndex];
  state.score = clamp(state.score - level.penalty, 0, 100);
  updateHud();
  setTeacherMood("teacher-sad");
  setStudentMood("student-timedout");
  showToast("Tiempo agotado", "error");
  state.options.forEach((option) => {
    option.button.disabled = true;
  });

  setTimeout(() => {
    if (state.score >= 100) {
      finalizeLevel(true);
      return;
    }

    if (state.score <= 0) {
      finalizeLevel(false);
      return;
    }

    if (state.questionIndex + 1 >= state.totalQuestions) {
      finalizeLevel(false);
      return;
    }

    state.questionIndex += 1;
    nextQuestion();
  }, 1200);
}

function finalizeLevel(won) {
  if (won) {
    setTeacherMood("teacher-approved");
    setStudentMood("student-passed");
    const isFinalLevel = state.levelIndex === LEVELS.length - 1;
    if (isFinalLevel) {
      showResult("Curso completado", "¡Felicidades! Has aprobado la clase final.");
    } else {
      setTeacherMood("teacher-failed");
      setStudentMood("student-wrong");
      showResult("Aprobado", `Nivel ${state.levelIndex + 1} superado. Preparando el siguiente reto...`);
      setTimeout(() => {
        const nextLevel = state.levelIndex + 1;
        startLevel(nextLevel);
      }, 1800);
      return;
    }
  } else {
    if (state.score <= 0) {
      showResult("Reprobado", `Llegaste a 0 puntos. Vuelve a intentarlo desde el nivel ${state.levelIndex + 1}.`);
    } else if (state.questionIndex + 1 >= state.totalQuestions) {
      showResult("Reprobado", `No alcanzaste 100 puntos en el nivel ${state.levelIndex + 1}.`);
    } else {
      showResult("Reprobado", `Se agotó el tiempo en el nivel ${state.levelIndex + 1}.`);
    }

    setTimeout(() => {
      startLevel(state.levelIndex);
    }, 2000);
    return;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  startLevel(0);
});
