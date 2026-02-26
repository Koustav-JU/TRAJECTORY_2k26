interface Bucket {
  tokens: number;
  lastRefill: number;
}

const CAPACITY = 30; // 30 requests burst
const REFILL_RATE = 2; // Refill 2 tokens per second

// In-memory storage (Zero cost, instance-local)
const storage = new Map<string, Bucket>();

// Basic cleanup to prevent memory growth
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of storage.entries()) {
      if (now - bucket.lastRefill > 60000) {
        storage.delete(key);
      }
    }
  }, 60000);
}

export async function tokenBucket(identifier: string) {
  const now = Date.now();
  let bucket = storage.get(identifier);

  if (!bucket) {
    bucket = {
      tokens: CAPACITY,
      lastRefill: now,
    };
  } else {
    const elapsed = (now - bucket.lastRefill) / 1000;
    const refill = Math.floor(elapsed * REFILL_RATE);
    bucket.tokens = Math.min(CAPACITY, bucket.tokens + refill);
    bucket.lastRefill = now;
  }

  if (bucket.tokens <= 0) {
    storage.set(identifier, bucket);
    return false;
  }

  bucket.tokens -= 1;
  storage.set(identifier, bucket);

  return true;
}
