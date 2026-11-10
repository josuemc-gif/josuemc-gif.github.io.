export function drawClassroom(ctx, width, height, levelIndex) {
  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, '#7dd3fc');
  sky.addColorStop(0.2, '#dbeafe');
  sky.addColorStop(0.2, '#fef3c7');
  sky.addColorStop(1, '#d6e5b8');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#cbd5e1';
  ctx.fillRect(0, 120, width, 30);

  ctx.fillStyle = '#e2f2d8';
  ctx.fillRect(65, 70, width - 130, 160);
  ctx.strokeStyle = '#7c4a2c';
  ctx.lineWidth = 8;
  ctx.strokeRect(65, 70, width - 130, 160);

  ctx.fillStyle = '#9ca3af';
  for (let i = 0; i < 5; i += 1) {
    const x = 120 + i * 150;
    ctx.fillRect(x, 250, 70, 120);
    ctx.fillRect(x + 10, 220, 50, 40);
    ctx.fillRect(x + 20, 350, 32, 80);
  }

  ctx.fillStyle = '#b45309';
  ctx.fillRect(0, height - 90, width, 90);

  ctx.fillStyle = '#8b5e3c';
  ctx.fillRect(0, height - 90, width, 20);
}

export function drawTeacher(ctx, x, y, mood = 'neutral') {
  const bodyColor = mood === 'success' ? '#22c55e' : mood === 'fail' ? '#ef4444' : '#f59e0b';

  ctx.fillStyle = '#e5e7eb';
  ctx.fillRect(x - 20, y - 90, 150, 90);

  ctx.fillStyle = '#1f2937';
  ctx.beginPath();
  ctx.arc(x + 55, y - 120, 34, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#f3f4f6';
  ctx.beginPath();
  ctx.arc(x + 65, y - 125, 12, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#f5d0a9';
  ctx.fillRect(x + 18, y - 120, 80, 80);

  ctx.fillStyle = bodyColor;
  ctx.fillRect(x + 15, y - 25, 90, 85);
  ctx.fillRect(x + 25, y - 5, 20, 80);
  ctx.fillRect(x + 80, y - 5, 20, 80);
  ctx.fillRect(x + 0, y + 60, 35, 70);
  ctx.fillRect(x + 90, y + 60, 35, 70);

  ctx.strokeStyle = '#111827';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x + 30, y - 40);
  ctx.lineTo(x + 10, y - 80);
  ctx.moveTo(x + 95, y - 40);
  ctx.lineTo(x + 120, y - 80);
  ctx.stroke();
}

export function drawTeacherBoard(ctx, message) {
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText(message, 540, 200);
}
