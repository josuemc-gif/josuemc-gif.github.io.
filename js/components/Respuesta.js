export function drawAnswerOption(ctx, option) {
  const { x, y, width, height, text, correct } = option;
  ctx.fillStyle = correct ? '#16a34a' : '#1e293b';
  ctx.fillRect(x, y, width, height);

  ctx.strokeStyle = correct ? '#86efac' : '#94a3b8';
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, width, height);

  ctx.fillStyle = '#f8fafc';
  ctx.font = 'bold 17px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x + width / 2, y + height / 2);
}

export function answerContainsPoint(option, x, y) {
  return x >= option.x && x <= option.x + option.width && y >= option.y && y <= option.y + option.height;
}
