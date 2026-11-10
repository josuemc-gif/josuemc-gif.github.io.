export function drawStudent(ctx, x, y, mood = 'neutral') {
  const shirt = mood === 'success' ? '#22c55e' : mood === 'fail' ? '#ef4444' : '#60a5fa';
  ctx.fillStyle = '#f3d5b5';
  ctx.fillRect(x - 25, y - 55, 50, 40);

  ctx.fillStyle = '#1f2937';
  ctx.beginPath();
  ctx.arc(x, y - 75, 24, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = shirt;
  ctx.fillRect(x - 35, y - 35, 70, 80);
  ctx.fillRect(x - 18, y + 35, 18, 58);
  ctx.fillRect(x + 10, y + 35, 18, 58);
  ctx.fillRect(x - 50, y - 12, 15, 50);
  ctx.fillRect(x + 35, y - 12, 15, 50);

  ctx.strokeStyle = '#111827';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x - 12, y - 5);
  ctx.lineTo(x - 30, y + 20);
  ctx.moveTo(x + 12, y - 5);
  ctx.lineTo(x + 30, y + 20);
  ctx.stroke();
}
