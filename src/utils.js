const supportedSizes = [16, 24, 32, 48, 64];

const defaultSize = supportedSizes[4];

export function findBestSize(targetSize) {
  if (!targetSize) {
    // Return default size
    return defaultSize;
  }

  if (targetSize <= supportedSizes[0]) {
    return supportedSizes[0];
  }

  if (targetSize >= supportedSizes[supportedSizes.length]) {
    return supportedSizes[supportedSizes.length];
  }

  let i = 0;
  let bestSize = defaultSize;
  while (i < supportedSizes.length && (supportedSizes[i] <= targetSize || supportedSizes[i + 1] >= targetSize)) {
    bestSize = Math.abs(supportedSizes[i] - targetSize) < Math.abs(bestSize - targetSize) ? supportedSizes[i] : bestSize;
    i++;
  }

  return bestSize;
}
