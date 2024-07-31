document.addEventListener('DOMContentLoaded', () => {
  // Obtener el lienzo y su contexto
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  
  // Tamaño de cada caja en el juego 
  const box = 10; // Tamaño del SnAkE y los Puntos
  
  // Posición vertical del puntaje en el lienzo
  const scorePositionY = box * 50; // Posición vertical del puntaje
  
  // Inicialización del puntaje
  let score = 0;
  
  // Posición inicial del SnAkE con longitud 3
  let snake = [
  { x: 5 * box, y: 5 * box}
  ];

  
  // Generar los puntos iniciales
  let food = generateFood();
  
  // Dirección inicial del movimiento del SnAkE
  let direction;
  
  // Escuchar eventos de teclado para controlar el SnAkE
  document.addEventListener('keydown', handleDirection);

  // Controles del SnAkE
  function handleDirection(event) {
    const key = event.key;
    // Evitar que el SnAkE se mueva en dirección opuesta a su movimiento actual
    if (key === 'a' && direction !== 'RIGHT') direction = 'LEFT';
    else if (key === 'w' && direction !== 'DOWN') direction = 'UP';
    else if (key === 'd' && direction !== 'LEFT') direction = 'RIGHT';
    else if (key === 's' && direction !== 'UP') direction = 'DOWN';
  }

// Generar comida en una posición aleatoria dentro del canvas
function generateFood() {
  return {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box
  };
}


  // Dibujar el juego en el lienzo
  function draw() {
    // Limpiar el lienzo antes de redibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el SnAkE en el lienzo
    snake.forEach((segment, index) => {
      ctx.fillStyle = (index === 0) ? 'green' : 'green'; // Color del SnAkE
      ctx.fillRect(segment.x, segment.y, box, box);
      ctx.strokeStyle = 'white'; // Líneas de la serpiente
      ctx.strokeRect(segment.x, segment.y, box, box);
    });

    // Dibujar los puntos (comida) en el lienzo
    ctx.fillStyle = 'red'; // Color de los puntos
    ctx.fillRect(food.x, food.y, box, box);

    // Calcular la nueva posición de la cabeza del SnAkE según la dirección
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === 'LEFT') snakeX -= box;
    if (direction === 'UP') snakeY -= box;
    if (direction === 'RIGHT') snakeX += box;
    if (direction === 'DOWN') snakeY += box;

    // Verificar si el SnAkE ha comido un punto (comida)
    if (snakeX === food.x && snakeY === food.y) {
      // Incrementar el puntaje y generar una nueva comida
      score ++;
      food = generateFood();
    } else {
      // Si no ha comido, eliminar la cola del SnAkE para simular movimiento
      snake.pop();
    }

    // Crear la nueva cabeza del SnAkE
    let newHead = {
      x: snakeX,
      y: snakeY
    };

    // Verificar colisión del SnAkE consigo mismo o con los bordes del lienzo
    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || checkCollision(newHead, snake)) {
      // Detener el juego si hay colisión
      clearInterval(game);
      return; // Salir de la función draw() para evitar que se siga dibujando después del GAME OVER
    }

    // Agregar la nueva cabeza del SnAkE al inicio del array (simulando movimiento)
    snake.unshift(newHead);

    // Dibujar el puntaje en el lienzo
    ctx.fillStyle = 'white'; // Color del puntaje
    ctx.font = '25px Arial'; // Tamaño del puntaje
    ctx.fillText(score, box, scorePositionY); // Posición del puntaje
  }

  // Verificar colisión del SnAkE consigo mismo
  function checkCollision(head, snakeArray) {
    for (let i = 1; i < snakeArray.length; i++) {
      if (head.x === snakeArray[i].x && head.y === snakeArray[i].y) {
        return true;
      }
    }
    return false;
  }

  // Iniciar el juego, llamando a la función draw repetidamente
  let game = setInterval(draw, 45); // Velocidad del SnAkE
});
