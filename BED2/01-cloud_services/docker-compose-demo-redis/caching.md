# ⚡ Intro to Caching with Redis

In this app, we introduced a new service: **Redis**, an in-memory key-value store that’s super fast.

But... why do we need it?

## 🤔 Why Cache at All?

Imagine a user opens the same profile page 10 times.

Without caching:
- Your app hits the database 10 times
- This adds unnecessary load
- It’s slower for the user

With caching:
- You fetch it from the database once
- Then store it in Redis
- The next 9 times, Redis serves it instantly

> ⚡ Redis is **much faster** than hitting a relational database like MySQL

## 🧠 What We’re Doing

Our app checks Redis **before** querying the DB:

```js
const cached = await client.get(`user:${id}`);
```

If the data exists:

```json
{
  "source": "cache",
  "data": { ... }
}
```

Otherwise:

* Query the DB
* Store the result in Redis
* Return the data

## 🧼 Setting Expiration (TTL)

If we cache everything forever, we risk showing **stale data**.

Instead, we can add an **expiration time** to our cache keys.

```js
await client.set(`user:${id}`, JSON.stringify(user), {
  EX: 60, // expires in 60 seconds
});
```

This means Redis will **automatically delete** the cached result after 60 seconds.

## 🧃 TTL = Time To Live

Think of TTL as the **lifespan** of cached data:

* Short TTL = fresher data, but more DB hits
* Long TTL = faster performance, but stale risk

You choose based on how often your data changes.

## 💡 Best Practices for Caching with Redis

Here are some general rules of thumb to follow when caching with Redis:

### 1. ✅ Cache reads, not writes

Only cache **after successfully reading** from the DB.

> Avoid caching failed or missing data (e.g. 404s) unless you're sure it's helpful.

### 2. ⏱️ Use a reasonable TTL

Not all data should live forever in cache. A few examples:

| Data type     | Recommended TTL |
| ------------- | --------------- |
| Country list  | 24 hours        |
| Product info  | 5–10 minutes    |
| User sessions | 15–60 minutes   |
| Live scores   | 5–30 seconds    |

Use **long TTLs** for static data
Use **short TTLs** for changing data

### 3. ❌ Invalidate the cache when data changes

If a user updates their profile, you should:

```js
await client.del(`user:${id}`);
```

Otherwise, the cache might keep serving **old data** — even if the database has changed.

## 🧨 The Real Beast: Cache Invalidation

> “There are only two hard things in Computer Science: cache invalidation and naming things.”
> – Phil Karlton

So... what makes **cache invalidation** so hard?

### ❗ The moment data changes, your cache is wrong

Now you have two “truths”:

* The database (correct)
* The cache (possibly out-of-date)

You must now decide:

* Should I delete the cache?
* When should I refresh it?
* What if multiple services are involved?

In large systems, it's not always clear **who owns the data** or **when to bust the cache**.

## 👀 Real-World Invalidation Strategies

| Strategy          | Description                                                 | ✅ Pros              | ⚠️ Cons                   |
| ----------------- | ----------------------------------------------------------- | ------------------- | ------------------------- |
| **TTL-based**     | Data auto-expires after N seconds                           | Simple              | May return stale data     |
| **Write-through** | Update cache at the same time as DB writes                  | Fresh cache         | Requires extra logic      |
| **Cache-busting** | Manually delete cache after write/update/delete             | Simple to implement | Easy to forget, bug-prone |
| **Event-driven**  | Use a message queue (e.g. RabbitMQ) to notify cache updates | Highly scalable     | Complex setup             |

You’ll likely start with **TTL + cache-busting**, then evolve to more advanced patterns.

## 🧪 How You Can Test It

1. Make a GET request to `/users/1` → **comes from DB**
2. Make it again within 60 seconds → **comes from Redis**
3. Wait 60+ seconds → **DB is hit again**
4. Add logic to update or delete user → test cache invalidation

## 📚 Redis Is More Than Caching

While we use Redis for caching here, it can also be used for:

* Background jobs (queues)
* Session management
* Rate limiting
* Real-time pub/sub messaging
* Leaderboards and counters

It’s a powerful tool — but caching is often the **first and most impactful use case**.

## 🎯 In Summary

* Redis is a high-speed memory store used to reduce DB load
* Add a TTL so data doesn’t live forever
* Invalidate the cache when your data changes
* Caching is simple to start, but hard to get perfect
* You can evolve from basic TTL → busting → write-through → event-driven

## 🙋‍♂️ Think About:

* What happens if Redis goes down?
* How much staleness is acceptable for your app?
* Would caching a failed lookup (e.g. 404) help or harm?
* Should every endpoint use cache?
