# Database Connection Issue Fix

## Problem
There's a local PostgreSQL instance running on port 5432 that's intercepting connections before they reach the Docker container.

## Solutions

### Option 1: Stop Local PostgreSQL (Recommended)

**Windows:**
```bash
# Stop PostgreSQL service
net stop postgresql-x64-14
# Or find the service name and stop it
services.msc
```

**Or use Task Manager:**
- Open Task Manager (Ctrl+Shift+Esc)
- Find PostgreSQL processes (PIDs 6564, 21280)
- End the processes

### Option 2: Use Docker Container IP Directly

Update `packages/backend/.env`:
```env
DATABASE_HOST=172.17.0.2  # Use Docker container IP (check with: docker inspect skillproof-postgres)
```

### Option 3: Change Docker Container Port

Update `docker-compose.yml`:
```yaml
ports:
  - "5433:5432"  # Use 5433 instead of 5432
```

Then update `packages/backend/.env`:
```env
DATABASE_PORT=5433
```

### Option 4: Use Docker Network

Connect using Docker's internal network:
```env
DATABASE_HOST=skillproof-postgres  # Container name
```

But this only works if your Node.js app runs inside Docker.

## Recommended: Stop Local PostgreSQL

The easiest solution is to stop your local PostgreSQL service so the Docker container can use port 5432.

