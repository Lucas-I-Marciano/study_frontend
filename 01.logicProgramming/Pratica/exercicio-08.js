function formatBefore10(second) {
  if (second < 10) {
    return `0${second}`;
  }
  return `${second}`;
}

function formatTime(seconds) {
  if (seconds < 60) {
    return `00:00:${formatBefore10(seconds)}`;
  } else if (seconds < 3600) {
    const minutes = Math.trunc(seconds / 60);
    const newSeconds = seconds - minutes * 60;
    return `00:${formatBefore10(minutes)}:${formatBefore10(newSeconds)}`;
  } else {
    const hours = Math.trunc(seconds / 3600);
    const secondsAfterHour = seconds - hours * 3600;
    const minutes = Math.trunc(secondsAfterHour / 60);
    const newSeconds = secondsAfterHour - minutes * 60;
    return `${formatBefore10(hours)}:${formatBefore10(
      minutes
    )}:${formatBefore10(newSeconds)}`;
  }
}

console.log(formatTime(45965));
